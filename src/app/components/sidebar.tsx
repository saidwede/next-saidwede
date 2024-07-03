
import Link from "next/link"
import { TbBrandFacebookFilled } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandX } from "react-icons/tb";
import { Dock, DockIcon } from "./magicui/dock";
import { TbBrandGmail } from "react-icons/tb";
import { useContext } from "react";
import { UIContext } from "@/context/ui-context";

export default function SideBar(){
    const uiContext = useContext(UIContext)
    if (!uiContext) {
        throw new Error('SomeComponent must be used within a MyProvider');
    }
    const { pos, setPos, openPos } = uiContext;
    
    return (
        <div className="fixed z-10 left-0 top-0 pl-16 py-20  h-screen items-center flex flex-col justify-between">
            <div className="font-black text-xl cursor-pointer" onClick={() => openPos(0)}>Saïd_</div>
            <div>
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
            <div className="relative w-full">
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