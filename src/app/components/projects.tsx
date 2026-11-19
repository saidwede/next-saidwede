"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { useLanguage } from "@/context/language-context";
import { ProjectId } from "@/i18n/translations";
import ShimmerButton from "./magicui/shimmer-button";

export interface SteppedSectionHandle {
  step: (direction: 1 | -1) => boolean;
  resetToEdge: (edge: "start" | "end") => void;
}

interface ProjectConfig {
  id: ProjectId;
  url: string;
  images: string[];
  portrait?: boolean;
}

const projects: ProjectConfig[] = [
  {
    id: "grafyme",
    url: "https://grafy.me",
    images: [
      "/img/grafyme/photo04.png",
      "/img/grafyme/photo01.png",
      "/img/grafyme/photo05.png",
    ],
  },
  {
    id: "ersy",
    url: "https://ersy.com/artists",
    images: [
      "/img/ersy/photo1.png",
      "/img/ersy/photo2.png",
      "/img/ersy/photo3.png",
    ],
  },
  {
    id: "gogochap",
    url: "https://www.gogochap.com/telecharger",
    images: ["/img/gogochap/Home.png", "/img/gogochap/Menus.png"],
    portrait: true,
  },
  {
    id: "alyahnightwear",
    url: "https://www.alyahnightwear.com",
    images: [
      "/img/alyahnightwear/photo01.png",
      "/img/alyahnightwear/photo02.png",
      "/img/alyahnightwear/photo03.png",
    ],
  },
  {
    id: "root-capture",
    url: "https://root-capture.vercel.app",
    images: ["/img/root_capture.png"],
  },
  {
    id: "alarm-valet",
    url: "http://alarmvalet.com/?k=a0000",
    images: ["/img/alarm.png"],
  },
];

const slideVariants = {
  enter: (direction: 1 | -1) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction: 1 | -1) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

interface BentoTileProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  extraCount?: number;
  onClick: () => void;
}

function BentoTile({
  src,
  alt,
  sizes,
  priority = false,
  extraCount = 0,
  onClick,
}: BentoTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Inspect ${alt}`}
      className="group relative block w-full overflow-hidden rounded-lg bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        sizes={sizes}
        priority={priority}
        className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      {extraCount > 0 && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold">
          +{extraCount}
        </div>
      )}
    </button>
  );
}

interface ProjectBentoGridProps {
  title: string;
  images: string[];
  portrait?: boolean;
  isFirstProject: boolean;
  onSelectImage: (index: number) => void;
}

function ProjectBentoGrid({
  title,
  images,
  portrait = false,
  isFirstProject,
  onSelectImage,
}: ProjectBentoGridProps) {
  const visible = images.slice(0, 6);
  const extraCount = images.length - visible.length;
  const count = visible.length;

  if (portrait) {
    return (
      <div className="flex items-center justify-center gap-5 sm:gap-7 lg:gap-9 w-full pt-4 pb-10">
        {visible.map((imgSrc, index) => {
          const isLastWithMore = index === count - 1 && extraCount > 0;
          return (
            <button
              key={imgSrc}
              type="button"
              onClick={() => onSelectImage(index)}
              aria-label={`Inspect ${title} preview ${index + 1}`}
              className="group relative block transition-transform duration-500 ease-out hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 rounded-[2.4rem]"
            >
              {/* Side hardware buttons */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-[3px] top-[18%] h-5 w-[3px] rounded-l-sm bg-neutral-700"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-[3px] top-[28%] h-9 w-[3px] rounded-l-sm bg-neutral-700"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-[3px] top-[39%] h-9 w-[3px] rounded-l-sm bg-neutral-700"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-[3px] top-[27%] h-12 w-[3px] rounded-r-sm bg-neutral-700"
              />

              {/* Outer phone frame */}
              <div className="relative rounded-[2.1rem] sm:rounded-[2.4rem] bg-neutral-900 p-[6px] sm:p-[8px] shadow-[0_20px_38px_-12px_rgba(0,0,0,0.28)] ring-1 ring-neutral-700/80">
                {/* Inner screen (fixed phone aspect ratio, top-aligned so long screenshots clip cleanly at the bottom) */}
                <div className="relative h-[44vh] sm:h-[52vh] lg:h-[56vh] max-h-[520px] aspect-[393/867] overflow-hidden rounded-[1.65rem] sm:rounded-[1.9rem] bg-white">
                  {/* Dynamic Island */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 z-10 h-[12px] w-[48px] sm:h-[14px] sm:w-[58px] rounded-full bg-black"
                  />

                  <Image
                    src={imgSrc}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 45vw, 240px"
                    priority={isFirstProject && index < 2}
                    className="object-cover object-top"
                  />

                  {/* Bottom home indicator */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 h-[3px] w-14 sm:w-16 rounded-full bg-black/20"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  {isLastWithMore && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold">
                      +{extraCount}
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  const renderTile = (index: number, sizes: string, isLast = false) => (
    <BentoTile
      key={visible[index]}
      src={visible[index]}
      alt={`${title} preview ${index + 1}`}
      sizes={sizes}
      priority={isFirstProject && index < 3}
      extraCount={isLast ? extraCount : 0}
      onClick={() => onSelectImage(index)}
    />
  );

  if (count === 1) {
    return (
      <div className="w-full overflow-hidden rounded-xl">
        {renderTile(0, "(max-width: 1024px) 100vw, 55vw")}
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="grid grid-cols-2 gap-2 w-full">
        {renderTile(0, "(max-width: 1024px) 50vw, 28vw")}
        {renderTile(1, "(max-width: 1024px) 50vw, 28vw")}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="flex gap-2 items-start w-full">
        <div style={{ width: "calc(66.6667% - 0.6px)" }}>
          {renderTile(0, "(max-width: 1024px) 67vw, 38vw")}
        </div>
        <div
          className="flex flex-col gap-2"
          style={{ width: "calc(33.3333% - 7.4px)" }}
        >
          {renderTile(1, "(max-width: 1024px) 33vw, 20vw")}
          {renderTile(2, "(max-width: 1024px) 33vw, 20vw")}
        </div>
      </div>
    );
  }

  if (count === 4) {
    return (
      <div className="flex gap-2 items-start w-full">
        <div style={{ width: "calc(75% + 1.1px)" }}>
          {renderTile(0, "(max-width: 1024px) 75vw, 42vw")}
        </div>
        <div
          className="flex flex-col gap-2"
          style={{ width: "calc(25% - 9.1px)" }}
        >
          {renderTile(1, "(max-width: 1024px) 25vw, 15vw")}
          {renderTile(2, "(max-width: 1024px) 25vw, 15vw")}
          {renderTile(3, "(max-width: 1024px) 25vw, 15vw")}
        </div>
      </div>
    );
  }

  if (count === 5) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="grid grid-cols-2 gap-2">
          {renderTile(0, "(max-width: 1024px) 50vw, 28vw")}
          {renderTile(1, "(max-width: 1024px) 50vw, 28vw")}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {renderTile(2, "(max-width: 1024px) 33vw, 19vw")}
          {renderTile(3, "(max-width: 1024px) 33vw, 19vw")}
          {renderTile(4, "(max-width: 1024px) 33vw, 19vw")}
        </div>
      </div>
    );
  }

  // 6 images: 3 distinct tile sizes (60% hero, two 40% right, three 20% bottom-left)
  // Exact rectangular outer silhouette with 100% original aspect ratio on every image
  return (
    <div className="flex gap-2 items-start w-full">
      <div
        className="flex flex-col gap-2"
        style={{ width: "calc(60% - 3.2px)" }}
      >
        {renderTile(0, "(max-width: 1024px) 60vw, 35vw")}
        <div className="grid grid-cols-3 gap-2">
          {renderTile(3, "(max-width: 1024px) 20vw, 12vw")}
          {renderTile(4, "(max-width: 1024px) 20vw, 12vw")}
          {renderTile(5, "(max-width: 1024px) 20vw, 12vw", true)}
        </div>
      </div>
      <div
        className="flex flex-col gap-2"
        style={{ width: "calc(40% - 4.8px)" }}
      >
        {renderTile(1, "(max-width: 1024px) 40vw, 23vw")}
        {renderTile(2, "(max-width: 1024px) 40vw, 23vw")}
      </div>
    </div>
  );
}

const Projects = forwardRef<SteppedSectionHandle>(function Projects(_, ref) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(
    null
  );
  const [mounted, setMounted] = useState(false);
  const activeIndexRef = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectConfig = projects[activeIndex];
  const projectCopy = t.projects.items[projectConfig.id];
  const project = { ...projectConfig, ...projectCopy };

  const goToProject = useCallback((nextIndex: number, dir?: 1 | -1) => {
    const current = activeIndexRef.current;
    if (nextIndex < 0 || nextIndex >= projects.length || nextIndex === current) {
      return false;
    }
    setSlideDirection(dir ?? (nextIndex > current ? 1 : -1));
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    setLightboxImageIndex(null);
    const scrollParent = rootRef.current?.parentElement;
    if (scrollParent && scrollParent.scrollTop > 0) {
      scrollParent.scrollTop = 0;
    }
    return true;
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      step: (direction: 1 | -1) => {
        return goToProject(activeIndexRef.current + direction, direction);
      },
      resetToEdge: (edge: "start" | "end") => {
        const target = edge === "end" ? projects.length - 1 : 0;
        setLightboxImageIndex(null);
        if (target === activeIndexRef.current) return;
        setSlideDirection(edge === "end" ? -1 : 1);
        activeIndexRef.current = target;
        setActiveIndex(target);
      },
    }),
    [goToProject]
  );

  useEffect(() => {
    if (lightboxImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxImageIndex((prev) =>
          prev === null ? null : (prev + 1) % project.images.length
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxImageIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + project.images.length) % project.images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImageIndex, project.images.length]);

  const lightbox = mounted
    ? createPortal(
        <AnimatePresence>
          {lightboxImageIndex !== null && (
            <motion.div
              data-scroll-lock="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
              onClick={() => setLightboxImageIndex(null)}
            >
              <button
                type="button"
                onClick={() => setLightboxImageIndex(null)}
                aria-label={t.projects.closePreview}
                className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-50 p-2 transition-colors"
              >
                <IoClose />
              </button>

              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImageIndex(
                        (lightboxImageIndex - 1 + project.images.length) %
                          project.images.length
                      );
                    }}
                    aria-label={t.projects.previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl sm:text-5xl z-50 p-2 transition-all hover:scale-110"
                  >
                    <IoChevronBack />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImageIndex(
                        (lightboxImageIndex + 1) % project.images.length
                      );
                    }}
                    aria-label={t.projects.nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl sm:text-5xl z-50 p-2 transition-all hover:scale-110"
                  >
                    <IoChevronForward />
                  </button>
                </>
              )}

              <motion.div
                key={`${activeIndex}-${lightboxImageIndex}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={project.images[lightboxImageIndex]}
                  alt={`${project.title} preview ${lightboxImageIndex + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <div
      ref={rootRef}
      className="min-h-screen lg:h-screen w-full flex flex-col justify-between px-5 lg:px-10 xl:px-14 pt-24 pb-10 lg:py-16 overflow-x-hidden"
    >
      {/* Header */}
      <div>
        <p className="uppercase tracking-widest text-xs font-medium text-neutral-500">
          {t.projects.kicker}
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-black mt-1">
          {t.projects.heading}
        </h2>
      </div>

      {/* Horizontal Sliding Showcase */}
      <div className="relative flex-1 flex items-center w-full overflow-x-clip my-4 lg:my-6">
        <div className="grid w-full items-center">
          <AnimatePresence initial={false} custom={slideDirection}>
            <motion.div
              key={activeIndex}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3 },
              }}
              className="col-start-1 row-start-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left: Aspect-Ratio-Preserving Rectangular Bento Grid */}
              <div className="lg:col-span-7">
                <ProjectBentoGrid
                  title={project.title}
                  images={project.images}
                  portrait={project.portrait}
                  isFirstProject={activeIndex === 0}
                  onSelectImage={setLightboxImageIndex}
                />
              </div>

              {/* Right: Project Title, Description, Tech Stack & Link */}
              <div className="lg:col-span-5 flex flex-col items-start gap-5">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-black leading-tight">
                  {project.title}
                </h3>

                <p className="text-neutral-600 font-light leading-relaxed text-sm lg:text-base max-w-prose">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block"
                >
                  <ShimmerButton
                    type="button"
                    tabIndex={-1}
                    className="block lg:flex px-4 py-2 lg:shadow-xl"
                  >
                    <span className="inline-flex items-center gap-2 whitespace-pre-wrap text-center text-xs font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
                      <span>{t.projects.visitProject}</span>
                      <FiExternalLink size={14} />
                    </span>
                  </ShimmerButton>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Indicator Bar */}
      <div className="flex flex-col items-center gap-2 pt-2">
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goToProject(activeIndex - 1, -1)}
            disabled={activeIndex === 0}
            aria-label={t.projects.previousProject}
            className="h-9 w-9 rounded-full flex items-center justify-center text-black transition-colors hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <IoChevronBack size={16} />
          </button>

          <div
            className="flex items-center gap-2 px-2"
            role="tablist"
            aria-label={t.projects.projectSelector}
          >
            {projects.map((item, idx) => {
              const isActive = idx === activeIndex;
              const itemTitle = t.projects.items[item.id].title;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${t.projects.showProject} ${itemTitle}`}
                  title={itemTitle}
                  onClick={() => goToProject(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-10 bg-black"
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-500"
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goToProject(activeIndex + 1, 1)}
            disabled={activeIndex === projects.length - 1}
            aria-label={t.projects.nextProject}
            className="h-9 w-9 rounded-full flex items-center justify-center text-black transition-colors hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <IoChevronForward size={16} />
          </button>
        </div>
      </div>

      {lightbox}
    </div>
  );
});

export default Projects;
