'use client';

import SkillCard from './SkillCard';
import { skills } from '@/app/data/skills';

const SkillData = () => {
    return (
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 pt-4">
            {skills.map((skill, index) => (
                <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                />
            ))}
        </div>
    );
}

export default SkillData;
