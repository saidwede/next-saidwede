import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { FiExternalLink } from "react-icons/fi"

export default function Experiences(){
    const [selectedId, setSelectedId] = useState<number | null>(null)
    return (
        <div className="pr-5 px-5 lg:px-0 pt-20 pb-5 lg:pt-0 w-screen overflow-x-hidden">
            <div className="pb-8">
                <p>RECENT PROJECTS</p>
                <p className="text-2xl font-bold">Explore Some Projects I&apos;m Proud Of</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="relative rounded-xl p-2 border border-dotted border-neutral-400">
                    <Image className="w-full rounded-lg" width={300} height={300} alt="ersy" src="/img/ersy.jpg" />
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-0 hover:opacity-100 rounded-xl">
                        <a href="https://ersy.com" className="absolute cursor-pointer h-10 w-10 rounded-full  flex justify-center items-center bg-white top-3 right-3" target="_blank"><FiExternalLink /></a>
                        <div className="absolute flex gap-2 items-center w-full rounded-xl bottom-0 left-0 h-10 bg-white bg-opacity-80 px-2 text-xs font-bold">
                            <span>JavaScript</span>
                            <span>JQuery</span>
                            <span>PHP</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                    
                </div>
                <div className="relative rounded-xl p-2 border border-dotted border-neutral-400">
                    <Image className="w-full rounded-lg" width={300} height={300} alt="ersy" src="/img/dahomey.jpg" />
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-0 hover:opacity-100 rounded-xl">
                        <a href="https://dahomeybook.com" className="absolute cursor-pointer h-10 w-10 rounded-full  flex justify-center items-center bg-white top-3 right-3" target="_blank"><FiExternalLink /></a>
                        <div className="absolute flex gap-2 items-center w-full rounded-xl bottom-0 left-0 h-10 bg-white bg-opacity-80 px-2 text-xs font-bold">
                            <span>Vue.js</span>
                            <span>MySQL</span>
                            <span>PHP</span>
                            <span>Firebase</span>
                        </div>
                    </div>
                    
                </div>
                <div className="relative rounded-xl p-2 border border-dotted border-neutral-400">
                    <Image className="w-full rounded-lg" width={300} height={300} alt="ersy" src="/img/alarm.png" />
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-0 hover:opacity-100 rounded-xl">
                        <a href="http://alarmvalet.com/?k=a0000" className="absolute cursor-pointer h-10 w-10 rounded-full  flex justify-center items-center bg-white top-3 right-3" target="_blank"><FiExternalLink /></a>
                        <div className="absolute flex gap-2 items-center w-full rounded-xl bottom-0 left-0 h-10 bg-white bg-opacity-80 px-2 text-xs font-bold">
                            <span>Vue.js</span>
                            <span>PHP</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                    
                </div>
                <div className="relative rounded-xl p-2 border border-dotted border-neutral-400">
                    <Image className="w-full rounded-lg" width={300} height={300} alt="ersy" src="/img/zoidberg.png" />
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-0 hover:opacity-100 rounded-xl">
                        <a href="https://zoidberg.vercel.app" className="absolute cursor-pointer h-10 w-10 rounded-full  flex justify-center items-center bg-white top-3 right-3" target="_blank"><FiExternalLink /></a>
                        <div className="absolute flex gap-2 items-center w-full rounded-xl bottom-0 left-0 h-10 bg-white bg-opacity-80 px-2 text-xs font-bold">
                            <span>Next.js</span>
                            <span>Scickit Learn</span>
                            <span>Flask</span>
                        </div>
                    </div>
                    
                </div>
                <div className="relative rounded-xl p-2 border border-dotted border-neutral-400">
                    <Image className="w-full rounded-lg" width={300} height={300} alt="ersy" src="/img/robot.png" />
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-0 hover:opacity-100 rounded-xl">
                        <a className="absolute cursor-pointer h-10 w-10 rounded-full  flex justify-center items-center bg-white top-3 right-3" target="_blank"><FiExternalLink /></a>
                        <div className="absolute flex gap-2 items-center w-full rounded-xl bottom-0 left-0 h-10 bg-white bg-opacity-80 px-2 text-xs font-bold">
                            <span>Next</span>
                        </div>
                    </div>
                    
                </div>
                <div className="relative rounded-xl p-2 border border-dotted border-neutral-400">
                    <Image className="w-full rounded-lg" width={300} height={300} alt="ersy" src="/img/said.png" />
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-0 hover:opacity-100 rounded-xl">
                        <a className="absolute cursor-pointer h-10 w-10 rounded-full  flex justify-center items-center bg-white top-3 right-3" target="_blank"><FiExternalLink /></a>
                        <div className="absolute flex gap-2 items-center w-full rounded-xl bottom-0 left-0 h-10 bg-white bg-opacity-80 px-2 text-xs font-bold">
                            <span>Next.js</span>
                            <span>Framer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}