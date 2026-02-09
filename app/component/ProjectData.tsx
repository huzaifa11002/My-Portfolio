"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/project";

const ProjectData = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 overflow-visible py-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectData;
