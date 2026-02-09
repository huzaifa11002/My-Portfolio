"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

interface Project {
  title: string;
  desc: string;
  github: string;
  live: string;
  skills: string[];
}

const ProjectCard = (props: Project) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative h-full flex flex-col bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-main/50 transition-all duration-500 shadow-2xl shadow-black"
    >
      {/* Visual Accent Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-main group-hover:scale-110 transition-transform duration-500 group-hover:bg-main/10">
            <FiExternalLink className="w-6 h-6" />
          </div>
          <div className="flex gap-4">
            <Link
              href={props.github}
              target="_blank"
              className="text-gray-400 hover:text-main transition-colors duration-300"
              title="View Source"
            >
              <FiGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-main transition-colors duration-300 tracking-tight">
          {props.title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
          {props.desc}
        </p>

        {/* Skills/Tags */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {props.skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="text-[10px] sm:text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full group-hover:border-main/30 group-hover:text-main transition-all duration-300"
              >
                {skill}
              </span>
            ))}
            {props.skills.length > 4 && (
              <span className="text-[10px] sm:text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 text-gray-500 rounded-full">
                +{props.skills.length - 4}
              </span>
            )}
          </div>

          <Link
            href={props.live}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-bold text-main group/btn relative overflow-hidden transition-all duration-300 hover:gap-3"
          >
            <span>VIEW PROJECT</span>
            <FiExternalLink className="w-4 h-4" />
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-main transition-all duration-300 group-hover/btn:w-full" />
          </Link>
        </div>
      </div>

      {/* Glassmorphism Shine Effect */}
      <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:animate-shine pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
