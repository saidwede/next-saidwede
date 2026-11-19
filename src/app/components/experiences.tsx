"use client";

import { useLanguage } from "@/context/language-context";

export default function Experiences() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 lg:py-0 lg:flex min-h-screen justify-center lg:items-start lg:gap-12 xl:gap-16 px-5 lg:px-10 xl:px-14">
      {/* Left Sticky Heading */}
      <div className="pb-12 lg:pb-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:shrink-0">
        <p className="uppercase tracking-widest text-xs font-medium text-neutral-500 text-left lg:text-right mb-2">
          {t.experiences.kicker}
        </p>
        <p className="text-left lg:text-right font-bold text-4xl sm:text-5xl xl:text-6xl text-neutral-400 leading-tight">
          <span className="text-black">{t.experiences.line1}</span>,
        </p>
        <p className="text-left lg:text-right font-bold text-4xl sm:text-5xl xl:text-6xl text-neutral-400 leading-tight">
          <span className="text-black">{t.experiences.line2}</span>
        </p>
        <p className="text-left lg:text-right font-bold text-4xl sm:text-5xl xl:text-6xl text-neutral-400 leading-tight">
          {t.experiences.line3Prefix}{" "}
          <span className="text-black">{t.experiences.line3Accent}</span>
        </p>
      </div>

      {/* Right Scrollable Timeline */}
      <div className="lg:py-28 w-full max-w-xl">
        <ul className="border-black border-l-2 ml-2 space-y-12 pb-6">
          {t.experiences.items.map((exp) => (
            <li
              key={`${exp.company}-${exp.period}`}
              className="relative pl-8 before:absolute before:top-1.5 before:-left-[9px] before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl lg:text-2xl font-bold text-black leading-snug">
                  {exp.company}
                </h3>
                <span className="text-xs font-medium text-neutral-500 tabular-nums shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm lg:text-base font-medium text-neutral-800 mt-1">
                {exp.role}
              </p>

              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm font-light text-neutral-600 leading-relaxed before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1.5 before:rounded-full before:bg-neutral-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
