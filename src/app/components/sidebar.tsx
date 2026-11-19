"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import {
  TbBrandFacebookFilled,
  TbBrandGithub,
  TbBrandGmail,
  TbBrandX,
} from "react-icons/tb";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { UIContext } from "@/context/ui-context";
import { useLanguage } from "@/context/language-context";
import { Dock, DockIcon } from "./magicui/dock";
import ShimmerButton from "./magicui/shimmer-button";

export default function SideBar() {
  const uiContext = useContext(UIContext);
  if (!uiContext) {
    throw new Error("SideBar must be used within a UIProvider");
  }
  const { pos, openPos } = uiContext;
  const { t } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { pos: 0, label: t.nav.about },
    { pos: 1, label: t.nav.projects },
    { pos: 2, label: t.nav.experiences },
    { pos: 3, label: t.nav.skills },
    { pos: 4, label: t.nav.education },
    { pos: 5, label: t.nav.photos },
  ];

  return (
    <div
      data-scroll-lock={drawerOpen ? "true" : undefined}
      className={`fixed w-full lg:w-auto left-0 top-0 px-4 lg:pl-16 lg:pr-4 lg:py-20 lg:overflow-visible transition-all duration-500 lg:h-screen flex flex-col justify-between items-center bg-white ${
        drawerOpen
          ? "h-[100dvh] z-50 overflow-y-auto"
          : "h-16 z-40 overflow-hidden"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full h-16 lg:h-auto shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            className="inline-flex items-center justify-center lg:hidden"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            {!drawerOpen ? (
              <RiMenu5Fill className="text-2xl" />
            ) : (
              <IoCloseOutline className="text-2xl" />
            )}
          </button>
          <div
            className="font-black text-2xl lg:text-3xl cursor-pointer"
            onClick={() => {
              openPos(0);
              setDrawerOpen(false);
            }}
          >
            Saïd_
          </div>
        </div>
        <ShimmerButton
          className="block lg:hidden px-4 py-2"
          onClick={() => {
            openPos(6);
            setDrawerOpen(false);
          }}
        >
          <span className="whitespace-pre-wrap text-center text-xs font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
            {t.nav.contactMe}
          </span>
        </ShimmerButton>
      </div>

      {/* Navigation Links */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`flex-1 flex items-center justify-center py-6 lg:py-0 transition-opacity duration-300 lg:opacity-100 lg:pointer-events-auto ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {navItems.map((item) => (
            <li key={item.pos} onClick={() => openPos(item.pos)}>
              <Link
                href="#"
                className="inline-flex flex-col px-2 items-center justify-center"
              >
                {item.label}
                <div
                  className={`h-px transition-all duration-500 bg-black ${
                    pos === item.pos ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Social Dock */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`w-full shrink-0 flex items-center justify-center pb-6 pt-2 lg:py-0 transition-opacity duration-300 lg:opacity-100 lg:pointer-events-auto ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Dock className="mt-0 border-none">
          <DockIcon>
            <a
              href="https://github.com/saidwede"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl"
            >
              <TbBrandGithub />
            </a>
          </DockIcon>
          <DockIcon>
            <a
              href="https://x.com/saidwede"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl"
            >
              <TbBrandX />
            </a>
          </DockIcon>
          <DockIcon>
            <a
              href="https://www.facebook.com/said.biowede.5"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl"
            >
              <TbBrandFacebookFilled />
            </a>
          </DockIcon>
          <DockIcon>
            <Link
              onClick={() => openPos(6)}
              href="#"
              className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl"
            >
              <TbBrandGmail />
            </Link>
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
