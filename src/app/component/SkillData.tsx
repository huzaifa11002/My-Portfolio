'use client';
import { useEffect, useState } from 'react'
import "../custom.css";
interface Skill {
    skill: string;
    status: string;
}

const SkillData = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
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
        return <div className="text-white text-center">No Data Found</div>;
    }
    return (
        <ul className="flex flex-col gap-3 list-disc list-inside marker:text-main">
            {skills.map((item, index) => (
                <div
                    className="flex justify-between items-center"
                    key={index}
                >
                    <li className="text-white uppercase font-bold text-sm xs:text-base">
                        {item.skill}
                    </li>
                    <span className="text-main font-bold text-center uppercase text-sm xs:text-base">
                        {item.status}
                    </span>
                </div>
            ))}
        </ul>
    )
}

export default SkillData