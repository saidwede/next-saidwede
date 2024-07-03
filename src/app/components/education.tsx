export default function Education(){
    return (
        <div className="flex justify-center gap-10 h-full items-center">
            <div>
                <p className="uppercase text-right">Education</p>
                <p className="text-right font-bold text-4xl max-w-[500px] text-neutral-400">Studied <span className="text-black">Electronics</span> and <span className="text-black">Computer Science</span></p>
            </div>
            <div>
                <ul className="border-black border-l-2 grid gap-20 pb-10">
                    <li className="relative pl-10 -translate-x-2 before:absolute before:top-0 before:left-0 before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full">
                        <p className="text-2xl font-bold">Master of Science (MSc) in Artificial Intelligence (AI)</p>
                        <p>in progress - <a href="https://www.epitech.eu" className="font-semibold" target="_blank" rel="noopener noreferrer">EPITECH</a></p>
                    </li>
                    <li className="relative pl-10 -translate-x-2 before:absolute before:top-0 before:left-0 before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full">
                        <p className="text-2xl font-bold">Bachelor of Computer Engineering</p>
                        <p>2017 - <a href="https://www.hecm-afrique.net" target="_blank" className="font-semibold" rel="noopener noreferrer">HECM</a></p>
                    </li>
                    <li className="relative pl-10 -translate-x-2 before:absolute before:top-0 before:left-0 before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full">
                        <p className="text-2xl font-bold">BTS in Industrial Computing</p>
                        <p>2015 - <a href="https://www.hecm-afrique.net" target="_blank" className="font-semibold" rel="noopener noreferrer">HECM</a></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}