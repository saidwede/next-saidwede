import IconCloud from "./magicui/icon-cloud";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import { useLanguage } from "@/context/language-context";

const skillLabels: Record<string, string> = {
  python: "Python",
  typescript: "TypeScript",
  dart: "Dart",
  java: "Java",
  react: "React",
  flutter: "Flutter",
  express: "Express",
  nextdotjs: "Next.js",
  nestjs: "NestJS",
  fastapi: "FastAPI",
  tensorflow: "TensorFlow",
  pytorch: "PyTorch",
  scikitlearn: "scikit-learn",
  opencv: "OpenCV",
  langchain: "LangChain",
  langgraph: "LangGraph",
  huggingface: "Hugging Face",
  openai: "OpenAI",
  googlegemini: "Google Gemini",
  anthropic: "Anthropic",
  ollama: "Ollama",
  prisma: "Prisma",
  amazonaws: "AWS",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  supabase: "Supabase",
  jest: "Jest",
  cypress: "Cypress",
  docker: "Docker",
  github: "GitHub",
  gitlab: "GitLab",
  figma: "Figma",
};

const slugs = Object.keys(skillLabels);

export function SkillsCloud() {
  const { t } = useLanguage();
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
        <IconCloud iconSlugs={slugs} iconLabels={skillLabels} />
      </div>
      <div className="grid gap-2">
        <p className="uppercase font-light text-xl">{t.skills.kicker}</p>
        <motion.h2 initial={{ fontSize: isMobile ? "4rem" : "6rem" }} animate={{ fontSize: collapsed ? isMobile ? "4rem" : "6rem" : isMobile ? "2rem" : "5rem" }} transition={{ duration: 0.7 }} className="font-bold leading-none">
          <p className="text-black">{t.skills.headingLine1}</p>
          <p className="text-black">{t.skills.headingLine2}</p>
        </motion.h2>
        <motion.p initial={{ fontSize: isMobile ? "1.3rem" : "1.9rem" }} animate={{ fontSize: collapsed ? isMobile ? "1.3rem" : "1.9rem" : isMobile ? "1rem" : "1.3rem" }} transition={{ duration: 0.7 }} className=" max-w-[600px] text-black leading-tight  font-extralight">
            {t.skills.subtitle}
            <span onClick={toggleCollapse} className="ml-2 font-bold text-xl inline-flex justify-center items-center bg-black rounded-full cursor-pointer h-7 w-7">
                <BiChevronDown className="animate-bounce text-white text-xl lg:text-2xl" />
            </span>
        </motion.p>
        <motion.p initial={{ height: "0px" }} animate={{ height: collapsed ? "0px" : "fit-content" }} transition={{ duration: 0.7 }} className=" max-w-[600px] text-black leading-normal font-extralight  overflow-hidden pt-3">
            {t.skills.bio}
        </motion.p>
      </div>
    </div>
  );
}
