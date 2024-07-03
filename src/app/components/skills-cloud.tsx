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
    <div className="h-screen flex justify-center items-center w-full pr-5">
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-5 pb-5 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="grid gap-2">
        <p className="uppercase font-light text-xl">Skills</p>
        <h2 className="text-4xl font-semibold">My Favorite Technologies</h2>
        <p className="max-w-[500px] my-2 text-neutral-600">
        I have a passion for working with cutting-edge technologies that drive innovation and efficiency. My expertise includes a diverse range of tools and platforms that I leverage to create impactful solutions.
        </p>
        
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">Next.js</div>
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">Vue.js</div>
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">Node.js</div>
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">TailwindCSS</div>
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">MongoDB</div>
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">Python</div>
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">OpenCV</div>    
          <div className="inline-block py-3 border border-neutral-500 border-dotted text-center">Tensor Flow</div>    
        </div>
      </div>
    </div>
  );
}
