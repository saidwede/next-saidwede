export default function Education(){
    return (
        <div className="pt-20 lg:pt-0 lg:flex h-screen justify-center lg:gap-10 items-center px-5 lg:px-0">
            <div className="pb-10">
                <p className="uppercase text-right">Education</p>
                <p className="text-right font-bold text-4xl lg:max-w-[500px] text-neutral-400">Studied <span className="text-black">Electronics</span> and <span className="text-black">Computer Science</span></p>
            </div>
            <div>
                <ul className="border-black border-l-2 grid gap-20 pb-10">
                    <li className="relative pl-10 -translate-x-2 before:absolute before:top-0 before:left-0 before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full">
                        <p className="text-2xl font-bold">Master of Science (MSc) in Artificial Intelligence (AI)</p>
                        <p>2025</p>
                    </li>
                    <li className="relative pl-10 -translate-x-2 before:absolute before:top-0 before:left-0 before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full">
                        <p className="text-2xl font-bold">Bachelor of Computer Engineering</p>
                        <p>2017</p>
                    </li>
                    <li className="relative pl-10 -translate-x-2 before:absolute before:top-0 before:left-0 before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full">
                        <p className="text-2xl font-bold">BTS in Industrial Computing</p>
                        <p>2015</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
