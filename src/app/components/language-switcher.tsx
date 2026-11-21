"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { Locale } from "@/i18n/translations";

const LOCALES: Locale[] = ["en", "fr"];

export default function LanguageSwitcher() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.common.languageSwitcher}
      className="group fixed z-40 right-5 bottom-5 lg:right-12 lg:bottom-8 inline-flex items-center bg-white/85 backdrop-blur-md p-1 cursor-pointer"
    >
      {LOCALES.map((code) => {
        const isActive = locale === code;
        return (
          <span
            key={code}
            aria-current={isActive ? "true" : undefined}
            className={`relative px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-200 ${
              isActive ? "text-white" : "text-neutral-500 group-hover:text-black"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-locale-pill"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
                className="absolute inset-0 bg-black"
              />
            )}
            <span className="relative z-10">{code}</span>
          </span>
        );
      })}
    </button>
  );
}
