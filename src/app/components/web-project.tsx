import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

type WebProjectProps = {
    url: string;
    skills: string[];
    image: string;
};

const WebProject: React.FC<WebProjectProps> = ({ url = "", skills, image }) => {
    return (
        <div className="group relative rounded-xl p-2 border border-dotted border-neutral-400 w-full [perspective:1000px] bg-white">
            <div className="relative w-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all ease-in-out">
                {/* Front Side */}
                <div className="[backface-visibility:visible] w-full h-full">
                    <Image
                        className="w-full h-full rounded-lg"
                        width={600}
                        height={600}
                        alt="project illustration"
                        src={image}
                    />
                </div>

                {/* Back Side */}
                <div className="absolute top-0 left-0 inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg flex flex-col items-center justify-center p-6 ">
                    
                    <div className="absolute top-0 left-0 w-full h-full bg-white/80"></div>
                    <div className="flex flex-col items-center gap-6 absolute">
                        <a
                            href={url}
                            className="h-14 w-14 rounded-full flex justify-center items-center bg-white shadow-lg hover:bg-neutral-100 transition-all hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiExternalLink size={28} className="text-neutral-700" />
                        </a>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full text-xs font-semibold shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebProject;
