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
        <div className="flex justify-center h-screen pb-40 lg:pb-0">
            <div className="flex flex-col-reverse justify-end lg:justify-center lg:flex-row-reverse items-center gap-10 xl:gap-20 p-5 pt-20 lg:pt-0 pb-20 lg:pb-0">
                <div className="grid gap-2">
                    <p className="text-black">Hello, I am</p>
                    <div className="font-bold text-7xl lg:text-9xl">
                        <p>Saïd</p>
                        <p>Bio Wede</p>
                    </div>
                    <p className=" max-w-[600px] text-black text-2xl lg:text-4xl font-extralight">A senior Full-Stack Developer with expertise in both front-end and back-end technologies.</p>
                    <div className="grid grid-cols-2 lg:flex gap-3 pt-4">
                        <a href="https://www.upwork.com/freelancers/~010659bb7544301117" className="w-full lg:w-auto inline-block" target="_blank">
                            <ShimmerButton className="shadow-2xl w-full lg:w-auto">
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
                <div className="relative flex justify-center items-center h-[310px] aspect-square rounded-full ">
                    <div className=" z-10 absolute h-full w-full text-4xl font-extralight rotating">
                        <div className="absolute top-2 left-2 h-20 w-20 bg-neutral-100  rounded-full flex justify-center items-center">
                            <div className="back-rotating h-16 w-16 rounded-full bg-black bg-opacity-5 ">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{'</>'}</div>
                            </div>
                        </div>
                    </div>
                    <div className=" z-10 absolute h-full w-full text-4xl font-extralight rotating">
                        <div className="absolute bottom-2 right-2 h-20 w-20 bg-neutral-100 rounded-full flex justify-center items-center">
                            <div className="absolute back-rotating  h-16 w-16 rounded-full bg-black bg-opacity-5 ">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{'{}'}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-[280px] aspect-square rounded-full ">
                        <div className="h-[250px] aspect-square absolute border-2 border-dotted border-neutral-400 rounded-full back-rotating">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] bg-white h-[100px]"></div>
                        </div>
                        <div className="h-[250px] aspect-square relative  rounded-full">
                            <div className="h-[calc(100%-20px)] aspect-square  rounded-full bg-white overflow-hidden flex items-end absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                <Image className="w-full h-full grayscale object-contain rounded-full translate-y-1" alt="Saïd BIO WEDE" width={500} height={500} src="/img/said_bio_wede.png" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>  
        </div>
    )
}