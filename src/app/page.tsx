"use client";

import { useContext, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./components/magicui/shimmer-button";
import Banner from "./components/banner";
import SideBar from "./components/sidebar";
import { SkillsCloud } from "./components/skills-cloud";
import { UIContext } from "@/context/ui-context";
import Projects, { SteppedSectionHandle } from "./components/projects";
import Education from "./components/education";
import Contacts from "./components/contacts";
import Gallery from "./components/gallery";
import Experiences from "./components/experiences";

const TOTAL_SECTIONS = 7;
const ROTATION_DURATION_S = 0.45;
const ANIMATION_LOCK_MS = 550;
const GESTURE_IDLE_RESET_MS = 140;
const EDGE_ARRIVAL_WINDOW_MS = 180;
const WHEEL_TRIGGER_THRESHOLD = 40;
const NEW_IMPULSE_MIN_DELTA = 30;
const NEW_IMPULSE_RATIO = 2.5;
const TOUCH_TRIGGER_THRESHOLD = 50;
const SCROLL_TOLERANCE_PX = 2;

type Direction = 1 | -1;
type LockKind = "none" | "transition" | "edge";

function isVerticallyScrollable(el: HTMLElement): boolean {
  const { overflowY } = window.getComputedStyle(el);
  const allowsScroll =
    overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay";
  return allowsScroll && el.scrollHeight > el.clientHeight + SCROLL_TOLERANCE_PX;
}

function canScrollInDirection(el: HTMLElement, direction: Direction): boolean {
  if (!isVerticallyScrollable(el)) return false;
  if (direction > 0) {
    return el.scrollTop + el.clientHeight < el.scrollHeight - SCROLL_TOLERANCE_PX;
  }
  return el.scrollTop > SCROLL_TOLERANCE_PX;
}

function findScrollableAncestor(
  target: EventTarget | null,
  sectionEl: HTMLElement,
  direction: Direction
): HTMLElement | null {
  let current = target instanceof HTMLElement ? target : null;
  if (!current || !sectionEl.contains(current)) return null;

  while (current) {
    if (canScrollInDirection(current, direction)) {
      return current;
    }
    if (current === sectionEl) break;
    current = current.parentElement;
  }
  return null;
}

function findDesignatedScrollable(
  sectionEl: HTMLElement,
  direction: Direction
): HTMLElement | null {
  const innerScrollables = sectionEl.querySelectorAll<HTMLElement>(
    "[data-section-scroll]"
  );
  for (const el of Array.from(innerScrollables)) {
    if (canScrollInDirection(el, direction)) {
      return el;
    }
  }
  if (canScrollInDirection(sectionEl, direction)) {
    return sectionEl;
  }
  return null;
}

function setSectionScrollPosition(
  sectionEl: HTMLElement | null,
  edge: "top" | "bottom"
) {
  if (!sectionEl) return;
  const targets: HTMLElement[] = [
    sectionEl,
    ...Array.from(sectionEl.querySelectorAll<HTMLElement>("[data-section-scroll]")),
  ];
  for (const el of targets) {
    el.scrollTop =
      edge === "top" ? 0 : Math.max(0, el.scrollHeight - el.clientHeight);
  }
}

function hasScrollLockOverlay(): boolean {
  return document.querySelector('[data-scroll-lock="true"]') !== null;
}

function isEditableElement(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  );
}

export default function Home() {
  const uiContext = useContext(UIContext);
  if (!uiContext) {
    throw new Error("Home must be used within a UIProvider");
  }
  const { sectionRotate, openPos, pos } = uiContext;

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const steppedSectionRefs = useRef<(SteppedSectionHandle | null)[]>([]);
  const posRef = useRef(pos);
  const isFirstRenderRef = useRef(true);
  const navSourceRef = useRef<"click" | "scroll-down" | "scroll-up">("click");

  const wheelStateRef = useRef({
    lockKind: "none" as LockKind,
    lockStartedAt: 0,
    lockedDirection: 0 as -1 | 0 | 1,
    lastWheelAt: 0,
    minAbsDeltaSinceLock: Infinity,
    lastInternalScrollAt: 0,
    boundaryAccum: 0,
    boundaryDirection: 0 as -1 | 0 | 1,
  });

  const touchStateRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    canScrollDownAtStart: false,
    canScrollUpAtStart: false,
  });

  const navigateBy = useCallback(
    (direction: Direction): boolean => {
      const currentPos = posRef.current;
      const nextPos = currentPos + direction;
      if (nextPos < 0 || nextPos >= TOTAL_SECTIONS) {
        return false;
      }

      navSourceRef.current = direction > 0 ? "scroll-down" : "scroll-up";
      posRef.current = nextPos;
      openPos(nextPos);
      return true;
    },
    [openPos]
  );

  // Sync scroll position and lock transition whenever active section changes
  useEffect(() => {
    const source = navSourceRef.current;
    navSourceRef.current = "click";
    posRef.current = pos;

    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    const targetEdge = source === "scroll-up" ? "bottom" : "top";
    setSectionScrollPosition(sectionRefs.current[pos] ?? null, targetEdge);
    steppedSectionRefs.current[pos]?.resetToEdge(
      source === "scroll-up" ? "end" : "start"
    );

    // If triggered by sidebar/button click, protect the rotation animation
    if (source === "click") {
      const state = wheelStateRef.current;
      state.lockKind = "transition";
      state.lockStartedAt = performance.now();
      state.lockedDirection = 0;
      state.minAbsDeltaSinceLock = Infinity;
      state.boundaryAccum = 0;
      state.boundaryDirection = 0;
    }
  }, [pos]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || hasScrollLockOverlay()) return;

      let deltaY = e.deltaY;
      let deltaX = e.deltaX;
      if (e.deltaMode === 1) {
        deltaY *= 16;
        deltaX *= 16;
      } else if (e.deltaMode === 2) {
        deltaY *= window.innerHeight;
        deltaX *= window.innerWidth;
      }

      const steppedController = steppedSectionRefs.current[posRef.current];
      const isHorizontalDominant = Math.abs(deltaX) > Math.abs(deltaY);
      if (isHorizontalDominant && !steppedController) return;

      const primaryDelta = isHorizontalDominant ? deltaX : deltaY;
      const absDelta = Math.abs(primaryDelta);
      if (absDelta < 1) return;

      const direction: Direction = primaryDelta > 0 ? 1 : -1;
      const now = performance.now();
      const state = wheelStateRef.current;
      const gap = now - state.lastWheelAt;
      state.lastWheelAt = now;

      // 1. Handle active transition or boundary-arrival inertia lock
      if (state.lockKind !== "none") {
        const elapsed = now - state.lockStartedAt;

        if (state.lockKind === "transition" && elapsed < ANIMATION_LOCK_MS) {
          e.preventDefault();
          state.minAbsDeltaSinceLock = Math.min(
            state.minAbsDeltaSinceLock,
            absDelta
          );
          return;
        }

        const noInertiaToAbsorb = state.lockedDirection === 0;
        const gestureEndedBySilence = gap > GESTURE_IDLE_RESET_MS;
        const directionReversed =
          state.lockedDirection !== 0 && direction !== state.lockedDirection;
        const minWaitPassed =
          state.lockKind === "transition" ? elapsed >= ANIMATION_LOCK_MS : elapsed >= 200;
        const isNewStrongImpulse =
          minWaitPassed &&
          absDelta >= NEW_IMPULSE_MIN_DELTA &&
          absDelta >= state.minAbsDeltaSinceLock * NEW_IMPULSE_RATIO;

        if (
          !noInertiaToAbsorb &&
          !gestureEndedBySilence &&
          !directionReversed &&
          !isNewStrongImpulse
        ) {
          e.preventDefault();
          state.minAbsDeltaSinceLock = Math.min(
            state.minAbsDeltaSinceLock,
            absDelta
          );
          return;
        }

        // Gesture ended or user clearly started a new gesture
        state.lockKind = "none";
        state.lockedDirection = 0;
        state.minAbsDeltaSinceLock = Infinity;
        state.boundaryAccum = 0;
        state.boundaryDirection = 0;
      }

      const activeSectionEl = sectionRefs.current[posRef.current];
      if (!activeSectionEl) return;

      // 2. For vertical scroll, allow native internal scrolling if the container still has room
      if (!isHorizontalDominant) {
        const nativeScrollable = findScrollableAncestor(
          e.target,
          activeSectionEl,
          direction
        );
        if (nativeScrollable) {
          state.lastInternalScrollAt = now;
          state.boundaryAccum = 0;
          state.boundaryDirection = 0;
          return;
        }

        // If cursor is outside the inner scroll box (e.g. Gallery padding or desktop sidebar),
        // scroll the active section's scrollable area first before switching sections
        const designatedScrollable = findDesignatedScrollable(
          activeSectionEl,
          direction
        );
        if (designatedScrollable) {
          e.preventDefault();
          designatedScrollable.scrollTop += deltaY;
          state.lastInternalScrollAt = now;
          state.boundaryAccum = 0;
          state.boundaryDirection = 0;
          return;
        }

        // 3. We are at the top or bottom boundary of the active section.
        // If internal scrolling JUST hit this boundary, absorb leftover momentum first
        // so the section stops cleanly at its edge instead of accidentally flipping.
        if (now - state.lastInternalScrollAt < EDGE_ARRIVAL_WINDOW_MS) {
          e.preventDefault();
          state.lockKind = "edge";
          state.lockStartedAt = now;
          state.lockedDirection = direction;
          state.minAbsDeltaSinceLock = absDelta;
          state.boundaryAccum = 0;
          state.boundaryDirection = 0;
          return;
        }
      }

      // Check if there is either an internal step or an adjacent main section to move to
      const nextPos = posRef.current + direction;
      const hasAdjacentSection =
        !isHorizontalDominant && nextPos >= 0 && nextPos < TOTAL_SECTIONS;
      if (!steppedController && !hasAdjacentSection) {
        state.boundaryAccum = 0;
        state.boundaryDirection = 0;
        return;
      }

      e.preventDefault();

      if (gap > GESTURE_IDLE_RESET_MS || state.boundaryDirection !== direction) {
        state.boundaryAccum = 0;
        state.boundaryDirection = direction;
      }

      state.boundaryAccum += absDelta;
      if (state.boundaryAccum >= WHEEL_TRIGGER_THRESHOLD) {
        const steppedInternally = steppedController?.step(direction) ?? false;
        const switched =
          steppedInternally || (!isHorizontalDominant && navigateBy(direction));

        if (switched) {
          state.lockKind = "transition";
          state.lockStartedAt = now;
          state.lockedDirection = direction;
          state.minAbsDeltaSinceLock = absDelta;
          state.boundaryAccum = 0;
          state.boundaryDirection = 0;
        } else {
          state.boundaryAccum = 0;
          state.boundaryDirection = 0;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || hasScrollLockOverlay()) {
        touchStateRef.current.active = false;
        return;
      }
      const activeSectionEl = sectionRefs.current[posRef.current];
      if (!activeSectionEl) return;

      const touch = e.touches[0];
      const canScrollDown = Boolean(
        findScrollableAncestor(e.target, activeSectionEl, 1) ||
          findDesignatedScrollable(activeSectionEl, 1)
      );
      const canScrollUp = Boolean(
        findScrollableAncestor(e.target, activeSectionEl, -1) ||
          findDesignatedScrollable(activeSectionEl, -1)
      );

      touchStateRef.current = {
        active: true,
        startX: touch.clientX,
        startY: touch.clientY,
        canScrollDownAtStart: canScrollDown,
        canScrollUpAtStart: canScrollUp,
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchState = touchStateRef.current;
      if (!touchState.active || e.changedTouches.length === 0) return;
      touchState.active = false;

      if (hasScrollLockOverlay()) return;

      const now = performance.now();
      const wheelState = wheelStateRef.current;
      if (
        wheelState.lockKind === "transition" &&
        now - wheelState.lockStartedAt < ANIMATION_LOCK_MS
      ) {
        return;
      }

      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchState.startX;
      const dy = touch.clientY - touchState.startY;
      const steppedController = steppedSectionRefs.current[posRef.current];

      // Allow horizontal swipe inside stepped sections (e.g. Projects)
      const isHorizontalSwipe =
        Math.abs(dx) >= TOUCH_TRIGGER_THRESHOLD &&
        Math.abs(dx) > Math.abs(dy) * 1.2;
      if (isHorizontalSwipe && steppedController) {
        const direction: Direction = dx < 0 ? 1 : -1;
        if (steppedController.step(direction)) {
          wheelState.lockKind = "transition";
          wheelState.lockStartedAt = now;
          wheelState.lockedDirection = direction;
          wheelState.minAbsDeltaSinceLock = Infinity;
        }
        return;
      }

      if (
        Math.abs(dy) < TOUCH_TRIGGER_THRESHOLD ||
        Math.abs(dy) <= Math.abs(dx) * 1.2
      ) {
        return;
      }

      const activeSectionEl = sectionRefs.current[posRef.current];
      if (!activeSectionEl) return;

      // Swiping up (dy < 0) means scrolling down to next project/section
      const direction: Direction = dy < 0 ? 1 : -1;
      const couldScrollAtStart =
        direction > 0
          ? touchState.canScrollDownAtStart
          : touchState.canScrollUpAtStart;
      if (couldScrollAtStart) return;

      const canScrollNow = Boolean(
        findScrollableAncestor(e.target, activeSectionEl, direction) ||
          findDesignatedScrollable(activeSectionEl, direction)
      );
      if (canScrollNow) return;

      const steppedInternally = steppedController?.step(direction) ?? false;
      const switched = steppedInternally || navigateBy(direction);
      if (switched) {
        wheelState.lockKind = "transition";
        wheelState.lockStartedAt = now;
        wheelState.lockedDirection = direction;
        wheelState.minAbsDeltaSinceLock = Infinity;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || hasScrollLockOverlay() || isEditableElement(e.target)) {
        return;
      }

      const steppedController = steppedSectionRefs.current[posRef.current];
      let direction: Direction | null = null;
      let isHorizontalKey = false;
      if (e.key === "ArrowDown" || e.key === "PageDown") direction = 1;
      else if (e.key === "ArrowUp" || e.key === "PageUp") direction = -1;
      else if (e.key === "ArrowRight" && steppedController) {
        direction = 1;
        isHorizontalKey = true;
      } else if (e.key === "ArrowLeft" && steppedController) {
        direction = -1;
        isHorizontalKey = true;
      }
      if (!direction) return;

      const now = performance.now();
      const state = wheelStateRef.current;
      if (
        state.lockKind === "transition" &&
        now - state.lockStartedAt < ANIMATION_LOCK_MS
      ) {
        e.preventDefault();
        return;
      }

      const activeSectionEl = sectionRefs.current[posRef.current];
      if (!activeSectionEl) return;

      if (!isHorizontalKey) {
        const canScroll = Boolean(
          findScrollableAncestor(document.activeElement, activeSectionEl, direction) ||
            findDesignatedScrollable(activeSectionEl, direction)
        );
        if (canScroll) return;
      }

      const steppedInternally = steppedController?.step(direction) ?? false;
      const switched =
        steppedInternally || (!isHorizontalKey && navigateBy(direction));
      if (switched) {
        e.preventDefault();
        state.lockKind = "transition";
        state.lockStartedAt = now;
        state.lockedDirection = direction;
        state.minAbsDeltaSinceLock = Infinity;
      }
    };

    const container = containerRef.current;
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    container?.addEventListener("touchstart", handleTouchStart, { passive: true });
    container?.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigateBy]);

  const sections = [
    <Banner key="banner" />,
    <Projects
      key="projects"
      ref={(el) => {
        steppedSectionRefs.current[1] = el;
      }}
    />,
    <Experiences key="experiences" />,
    <SkillsCloud key="skills" />,
    <Education key="education" />,
    <Gallery key="gallery" />,
    <Contacts key="contacts" />,
  ];

  return (
    <main className="relative h-screen w-screen overflow-hidden font-poppins">
      <SideBar />
      <div className="hidden lg:block fixed z-20 right-12 top-12">
        <ShimmerButton className="shadow-2xl" onClick={() => openPos(6)}>
          <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Contact me
          </span>
        </ShimmerButton>
      </div>
      <div
        ref={containerRef}
        className="absolute top-0 right-0 h-screen overflow-hidden w-screen lg:w-[calc(100vw-220px)]"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            initial={false}
            animate={{ rotate: sectionRotate[index] }}
            transition={{ duration: ROTATION_DURATION_S, ease: "easeInOut" }}
            aria-hidden={pos !== index}
            className={`absolute inset-0 h-screen w-full overflow-y-auto overflow-x-hidden overscroll-y-contain bg-white origin-top-left ${
              pos === index ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {section}
          </motion.div>
        ))}

        <motion.div
          initial={false}
          animate={{ rotate: sectionRotate[7] }}
          transition={{ duration: ROTATION_DURATION_S, ease: "easeInOut" }}
          aria-hidden
          className="pointer-events-none min-h-screen z-30 absolute bg-white w-full top-0 left-0 origin-top-left"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-200 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
