
import Link from "next/link"
import { TbBrandFacebookFilled } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandX } from "react-icons/tb";
import { Dock, DockIcon } from "./magicui/dock";
import { TbBrandGmail } from "react-icons/tb";
import { useContext } from "react";
import { UIContext } from "@/context/ui-context";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function SideBar(){
    const uiContext = useContext(UIContext)
    if (!uiContext) {
        throw new Error('SomeComponent must be used within a MyProvider');
    }
    const { pos, setPos, openPos } = uiContext;
    const [drawerOpen, setDrawerOpen] = useState(false)
    
    return (
        <div className={`fixed w-full lg:w-auto z-40 left-0 top-0 px-4 lg:pl-16 py-4 lg:py-20 overflow-hidden lg:overflow-visible ${drawerOpen ? 'h-screen' : 'h-12'} transition-all duration-500 lg:h-screen items-center flex flex-col justify-between bg-white`}>
            <div className="w-full flex justify-between">
                <div className="font-black text-xl cursor-pointer" onClick={() => openPos(0)}>Saïd_</div>
                <div className="inline-block lg:hidden" onClick={() => setDrawerOpen(!drawerOpen)}>
                    {!drawerOpen && (
                        <RiMenu5Fill className="text-2xl" />
                    )}
                    {drawerOpen && (
                        <IoCloseOutline className="text-2xl" />
                    )}
                    
                </div>
            </div>
            
            <div onClick={() => setDrawerOpen(false)}>
                <ul className="flex flex-col items-center justify-center gap-20">
                    <li onClick={() => openPos(0)}>
                    <Link href="#" className="inline-flex flex-col px-2 items-center justify-center">About me
                        <div className={`h-px transition-all duration-500 bg-black ${pos == 0 ? 'w-full' : 'w-0'} `}></div>
                    </Link>
                    </li>
                    <li onClick={() => openPos(1)}>
                    <Link href="#" className="inline-flex flex-col px-2 items-center justify-center">Skills
                    <div className={`h-px transition-all duration-500 bg-black ${pos == 1 ? 'w-full' : 'w-0'} `}></div></Link>
                    </li>
                    <li onClick={() => openPos(2)}>
                    <Link href="#" className="inline-flex flex-col px-2 items-center justify-center">Experiences
                    <div className={`h-px transition-all duration-500 bg-black ${pos == 2 ? 'w-full' : 'w-0'} `}></div></Link>
                    </li>
                    <li onClick={() => openPos(3)}>
                    <Link href="#" className="inline-flex flex-col px-2 items-center justify-center">Education
                    <div className={`h-px transition-all duration-500 bg-black ${pos == 3 ? 'w-full' : 'w-0'} `}></div></Link>
                    </li>
                </ul>
            </div>
            <div onClick={() => setDrawerOpen(false)} className="relative w-full pb-10">
                <Dock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0 border-none">
                    <DockIcon>
                        <a href="https://github.com/saidwede" target="_blank" className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl">
                            <TbBrandGithub />
                        </a>
                    </DockIcon>
                    <DockIcon>
                        <a href="https://x.com/saidwede" target="_blank" className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl">
                            <TbBrandX />
                        </a>
                    </DockIcon>
                    <DockIcon>
                        <a href="https://facebook.com/" target="_blank" className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl">
                            <TbBrandFacebookFilled />
                        </a>
                    </DockIcon>
                    <DockIcon >
                        <Link onClick={() => openPos(4)} href="#" className="h-10 w-10 bg-black text-white rounded-full inline-flex justify-center items-center text-2xl">
                            <TbBrandGmail />
                        </Link>
                    </DockIcon>
                </Dock>
            </div>
        </div>
    )
}