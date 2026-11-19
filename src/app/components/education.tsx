"use client";

import { useLanguage } from "@/context/language-context";

export default function Education() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 lg:pt-0 lg:flex min-h-screen justify-center lg:gap-10 items-center px-5 lg:px-0">
      <div className="pb-10">
        <p className="uppercase text-right">{t.education.kicker}</p>
        <p className="text-right font-bold text-6xl text-neutral-400">
          <span className="text-black">{t.education.line1}</span>,
        </p>
        <p className="text-right font-bold text-6xl text-neutral-400">
          <span className="text-black">{t.education.line2}</span>
        </p>
        <p className="text-right font-bold text-6xl text-neutral-400">
          {t.education.line3Prefix}{" "}
          <span className="text-black">{t.education.line3Accent}</span>
        </p>
      </div>
      <div className="pb-40 lg:pb-0">
        <ul className="border-black border-l-2 grid gap-20 lg:gap-30 pb-10">
          {t.education.degrees.map((degree) => (
            <li
              key={`${degree.year}-${degree.level}`}
              className="relative pl-10 -translate-x-2 before:absolute before:top-0 before:left-0 before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full"
            >
              <p className="text-2xl font-normal">
                <span className="font-black">{degree.level}</span>
                {degree.title}
              </p>
              <p>
                {degree.year} -{" "}
                <a
                  href={degree.url}
                  className="font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {degree.school}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
