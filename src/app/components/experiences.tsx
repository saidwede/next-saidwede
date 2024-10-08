import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { FiExternalLink } from "react-icons/fi"
import WebProject from "./web-project"

const projects = [
    {
        url: "https://ersy.com",
        image: "/img/ersy.jpg",
        skills: ['JavaScript','JQuery','PHP', 'MySQL']
    },
    {
        url: "https://dahomeybook.com",
        image: "/img/dahomey.jpg",
        skills: ['Vue.js','Firebase','MySQL', 'PHP']
    },
    {
        url: "https://skilldrive.vercel.app",
        image: "/img/skilldrive.png",
        skills: ['Next.js', 'Firebase','MagicUI','Framer']
    },
    {
        url: "http://alarmvalet.com/?k=a0000",
        image: "/img/alarm.png",
        skills: ['Vue.js','PHP','MySQL']
    },
    {
        url: "https://f-chat.vercel.app",
        image: "/img/fchat2.png",
        skills: ['Next.js','MagicUI','Framer']
    },
    {
        url: "",
        image: "/img/said.png",
        skills: ['Next.js','MagicUI','Framer']
    }
]

export default function Experiences(){
    const [selectedId, setSelectedId] = useState<number | null>(null)
    return (
        <div className="pr-5 pb-40 lg:pb-0 h-full px-5 lg:px-0 pt-20 lg:pt-0 w-screen overflow-x-hidden lg:flex flex-col justify-center">
            <div className="pb-8">
                <p>RECENT PROJECTS</p>
                <p className="text-2xl font-bold">Explore Some Projects I&apos;m Proud Of</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 lg:pr-5">
                {projects.map((project, index) => (
                    <WebProject key={index} url={project.url} image={project.image} skills={project.skills} />
                ))}
            </div>
        </div>
    )
}