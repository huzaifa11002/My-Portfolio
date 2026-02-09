'use client';

import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact,
    FaBootstrap, FaWordpress, FaRobot, FaVuejs, FaAngular, FaNodeJs, FaLaravel, FaPhp
} from 'react-icons/fa';
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma,
    SiMongodb, SiPostgresql, SiFlask, SiDjango, SiExpress
} from 'react-icons/si';
import { BsFileEarmarkCode } from 'react-icons/bs';

interface SkillProps {
    name: string;
    level: string;
    index: number;
}

const getSkillIcon = (name: string) => {
    const iconClass = "w-8 h-8 sm:w-10 sm:h-10";
    const skillName = name.toLowerCase();

    if (skillName.includes('html')) return <FaHtml5 className={iconClass} />;
    if (skillName.includes('css') && !skillName.includes('tailwind')) return <FaCss3Alt className={iconClass} />;
    if (skillName.includes('javascript')) return <FaJs className={iconClass} />;
    if (skillName.includes('typescript')) return <SiTypescript className={iconClass} />;
    if (skillName.includes('python')) return <FaPython className={iconClass} />;
    if (skillName.includes('agentic')) return <FaRobot className={iconClass} />;
    if (skillName.includes('next')) return <SiNextdotjs className={iconClass} />;
    if (skillName.includes('react')) return <FaReact className={iconClass} />;
    if (skillName.includes('vue')) return <FaVuejs className={iconClass} />;
    if (skillName.includes('angular')) return <FaAngular className={iconClass} />;
    if (skillName.includes('node')) return <FaNodeJs className={iconClass} />;
    if (skillName.includes('express')) return <SiExpress className={iconClass} />;
    if (skillName.includes('laravel')) return <FaLaravel className={iconClass} />;
    if (skillName.includes('flask')) return <SiFlask className={iconClass} />;
    if (skillName.includes('django')) return <SiDjango className={iconClass} />;
    if (skillName.includes('mongodb')) return <SiMongodb className={iconClass} />;
    if (skillName.includes('postgres')) return <SiPostgresql className={iconClass} />;
    if (skillName.includes('php')) return <FaPhp className={iconClass} />;
    if (skillName.includes('tailwind')) return <SiTailwindcss className={iconClass} />;
    if (skillName.includes('bootstrap')) return <FaBootstrap className={iconClass} />;
    if (skillName.includes('wordpress')) return <FaWordpress className={iconClass} />;
    if (skillName.includes('psd') || skillName.includes('web')) return <SiFigma className={iconClass} />;
    return <BsFileEarmarkCode className={iconClass} />;
};

const SkillCard = ({ name, level, index }: SkillProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, borderColor: 'var(--color-main)' }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col items-center gap-4 hover:bg-main/5 transition-all duration-300 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300">
                {getSkillIcon(name)}
            </div>

            <div className="text-gray-400 group-hover:text-main transition-colors duration-300">
                {getSkillIcon(name)}
            </div>

            <div className="text-center relative z-10">
                <h3 className="text-white text-sm font-bold tracking-tight mb-1">{name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">{level}</p>
            </div>

            {/* Progress indicator (Subtle) */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-main w-0 group-hover:w-full transition-all duration-500" />
        </motion.div>
    );
};

export default SkillCard;
