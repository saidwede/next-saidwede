import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

type WebProjectProps = {
    url: string;
    skills: string[];
    image: string;
};

const WebProject: React.FC<WebProjectProps> = ({ url="", skills, image }) => {
    return (
        <div className="relative rounded-xl p-2 border border-dotted border-neutral-400">
            <Image className="w-full rounded-lg" width={300} height={300} alt="ersy" src={image} />
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-0 hover:opacity-100 rounded-xl">
                <a href={url} className="absolute cursor-pointer h-10 w-10 rounded-full  flex justify-center items-center bg-white top-3 right-3" target="_blank"><FiExternalLink /></a>
                <div className="absolute flex gap-2 items-center w-full rounded-xl bottom-0 left-0 h-10 bg-white px-2 text-xs">
                    {skills.map((skill) => (
                        <span className="inline-block px-2 py-1 bg-neutral-200 rounded-full">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebProject;
