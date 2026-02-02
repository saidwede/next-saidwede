import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "nestdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function SkillsCloud() {
  return (
    <div className="h-screen overflow-scroll pb-8 lg:pb-0 lg:flex justify-center items-center w-full lg:pr-5 px-5 lg:px-0">
      <div className="relative flex w-full max-w-[32rem] items-center justify-center overflow-hidden px-5 pb-5 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="grid gap-2">
        <p className="uppercase font-light text-xl">Skills</p>
        <h2 className="text-4xl lg:text-5xl font-bold">What I like to work with</h2>
        <p className="max-w-[700px] font-extralight text-xl lg:text-4xl my-2 text-black">
        My expertise includes a diverse range of tools and platforms that I leverage to create impactful solutions.
        </p>
      </div>
    </div>
  );
}
