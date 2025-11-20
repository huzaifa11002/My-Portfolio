'use client';
import { useEffect, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaBootstrap, FaWordpress, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { BsFileEarmarkCode } from 'react-icons/bs';
import "../custom.css";

interface Skill {
    skill: string;
    status: string;
}

const SkillData = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    
    const getSkillIcon = (skillName: string) => {
        const name = skillName.toLowerCase();
        const iconClass = "w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14";
        
        if (name.includes('html')) return <FaHtml5 className={iconClass} />;
        if (name.includes('css') && !name.includes('tailwind')) return <FaCss3Alt className={iconClass} />;
        if (name.includes('javascript')) return <FaJs className={iconClass} />;
        if (name.includes('typescript')) return <SiTypescript className={iconClass} />;
        if (name.includes('python')) return <FaPython className={iconClass} />;
        if (name.includes('agentic')) return <FaRobot className={iconClass} />;
        if (name.includes('next')) return <SiNextdotjs className={iconClass} />;
        if (name.includes('react')) return <FaReact className={iconClass} />;
        if (name.includes('tailwind')) return <SiTailwindcss className={iconClass} />;
        if (name.includes('bootstrap')) return <FaBootstrap className={iconClass} />;
        if (name.includes('wordpress')) return <FaWordpress className={iconClass} />;
        return <BsFileEarmarkCode className={iconClass} />;
    };
    
    useEffect(() => {
        const url = window.location.origin;
        const fetchData = async () => {
            try {
                const res = await fetch(`${url}/api/skill`);
                const skillData = await res.json();
                setSkills(skillData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (skills.length === 0) {
        return <div className="text-white text-center bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
        </div>;
    }

    if (!skills) {
        return <div className="text-white text-center text-sm sm:text-base">No Data Found</div>;
    }
    
    return (
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {skills.map((item, index) => (
                <div
                    className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-main transition-all duration-300 group animate-scale-in cursor-pointer"
                    key={index}
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <div className="text-main group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {getSkillIcon(item.skill)}
                    </div>
                    <span className="text-white text-xs sm:text-sm font-medium text-center uppercase">
                        {item.skill}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default SkillData
