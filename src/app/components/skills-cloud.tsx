import IconCloud from "./magicui/icon-cloud";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkMobile = () => {
          setIsMobile(window.innerWidth < 1024);
      }
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {
      setCollapsed(!collapsed);
  }

  return (
    <div
      data-section-scroll="true"
      className="h-screen overflow-y-auto overflow-x-hidden overscroll-y-contain pb-8 lg:pb-0 lg:flex justify-center items-center w-full lg:pr-5 px-5 lg:px-0"
    >
      <div className="relative flex w-full max-w-[32rem] items-center justify-center overflow-hidden px-5 pb-5 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="grid gap-2">
        <p className="uppercase font-light text-xl">Skills</p>
        <motion.h2 initial={{ fontSize: isMobile ? "4rem" : "6rem" }} animate={{ fontSize: collapsed ? isMobile ? "4rem" : "6rem" : isMobile ? "2rem" : "5rem" }} transition={{ duration: 0.7 }} className="font-bold leading-none">
          <p className="text-black">My Tech</p>
          <p className="text-black">Stack</p>
        </motion.h2>
        <motion.p initial={{ fontSize: isMobile ? "1.3rem" : "1.9rem" }} animate={{ fontSize: collapsed ? isMobile ? "1.3rem" : "1.9rem" : isMobile ? "1rem" : "1.3rem" }} transition={{ duration: 0.7 }} className=" max-w-[600px] text-black leading-tight  font-extralight">
            My expertise includes a diverse range of tools and platforms that I leverage to create impactful solutions.
            <span onClick={toggleCollapse} className="ml-2 font-bold text-xl inline-flex justify-center items-center bg-black rounded-full cursor-pointer h-7 w-7">
                <BiChevronDown className="animate-bounce text-white text-xl lg:text-2xl" />
            </span>
        </motion.p>
        <motion.p initial={{ height: "0px" }} animate={{ height: collapsed ? "0px" : "fit-content" }} transition={{ duration: 0.7 }} className=" max-w-[600px] text-black leading-normal font-extralight  overflow-hidden pt-3">
            I am an AI/ML Engineer and Senior Full-Stack Developer with a Master’s degree in Artificial Intelligence. I specialize in building intelligent, scalable, and user-centric applications by combining modern web development with machine learning expertise. With strong experience across front-end and back-end technologies, I design end-to-end solutions that integrate AI models, data-driven systems, and automation. My work spans from developing robust platforms to deploying AI-powered features such as predictive analytics, recommendation systems, and agentic RAG solutions using OpenAI and Google models.
        </motion.p>
      </div>
    </div>
  );
}
