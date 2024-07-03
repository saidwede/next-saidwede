"use client"
import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShimmerButton from "./components/magicui/shimmer-button";
import { motion } from "framer-motion"

import Banner from "./components/banner";
import SideBar from "./components/sidebar";
import { SkillsCloud } from "./components/skills-cloud";
import { UIContext } from "@/context/ui-context";
import Experiences from "./components/experiences";
import Education from "./components/education";
import Contacts from "./components/contacts";

export default function Home() {
  const uiContext = useContext(UIContext)
  if (!uiContext) {
    throw new Error('SomeComponent must be used within a MyProvider');
  }
  const { sectionRotate, setSectionRotate } = uiContext;
  
  return (
    <main className="relative font-poppins">
      <SideBar />
      <a href='https://www.upwork.com/freelancers/~010659bb7544301117' target="_blank" className="fixed z-20 right-12 top-12">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Hire me
          </span>
        </ShimmerButton>
      </a>
      <div className="absolute top-0 px-20 right-0 h-screen overflow-hidden w-[calc(100vw-220px)]">
        <motion.div animate={{ rotate: sectionRotate[0] }} className={` absolute bg-white w-full top-0 left-0 origin-top-left transition-all duration-500 `}>
          <Banner />
        </motion.div>
        <motion.div animate={{ rotate: sectionRotate[1] }} className={` absolute bg-white w-full top-0 left-0 origin-top-left transition-all duration-500 ${sectionRotate[1]}`}>
          <SkillsCloud />
        </motion.div>
        <motion.div animate={{ rotate: sectionRotate[2] }} className={` absolute bg-white w-full top-0 left-0 origin-top-left transition-all duration-500 ${sectionRotate[2]}`}>
          <div className="h-screen flex items-center justify-center">
          <Experiences />
          </div>
        </motion.div>
        <motion.div animate={{ rotate: sectionRotate[3] }} className={`h-screen absolute bg-white w-full top-0 left-0 origin-top-left transition-all duration-500 ${sectionRotate[3]}`}>
          <Education />
        </motion.div>
        <motion.div animate={{ rotate: sectionRotate[4] }} className={`h-screen absolute bg-white w-full top-0 left-0 origin-top-left transition-all duration-500 ${sectionRotate[4]}`}>
          <Contacts />
        </motion.div>

        <motion.div animate={{ rotate: sectionRotate[5] }} className={`h-screen absolute bg-white w-full top-0 left-0 origin-top-left transition-all duration-500 ${sectionRotate[4]}`}>
          
        </motion.div>
      </div>
    </main>
  );
}
