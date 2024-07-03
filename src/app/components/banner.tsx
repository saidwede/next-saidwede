import Image from "next/image"
import ShimmerButton from "./magicui/shimmer-button"
import { UIContext } from "@/context/ui-context";
import { useContext } from "react";

export default function Banner(){
    const uiContext = useContext(UIContext)
    if (!uiContext) {
        throw new Error('SomeComponent must be used within a MyProvider');
    }
    const { pos, setPos, openPos } = uiContext;
    return (
        <div className="flex justify-center h-screen ">
            <div className="flex flex-row-reverse items-center gap-10 xl:gap-20 p-5">
                <div className="grid gap-2">
                    <p className="text-neutral-600">Hello, I am</p>
                    <div className="font-bold text-5xl">
                        <p>Saïd</p>
                        <p>Bio Wede</p>
                    </div>
                    <p className=" max-w-[600px] text-neutral-600">A senior full stack web developer with expertise in both front-end and back-end technologies.</p>
                    <div className="flex gap-3 pt-4">
                        <a href="https://www.upwork.com/freelancers/~010659bb7544301117" target="_blank">
                            <ShimmerButton className="shadow-2xl">
                                <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    Hire me
                                </span>
                            </ShimmerButton>
                        </a>
                        <ShimmerButton className="shadow-2xl" onClick={() => openPos(4)}>
                            <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Contact me
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
                <div className="h-[210px] aspect-square relative border-2 border-dotted border-black rounded-full">
                    <div className="h-[200px] aspect-square  rounded-full bg-white overflow-hidden flex items-end absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <Image className="w-full h-full grayscale object-contain rounded-full translate-y-1" alt="Saïd BIO WEDE" width={500} height={500} src="/img/said_bio_wede.png" />
                    </div>
                </div>
            </div>  
        </div>
    )
}