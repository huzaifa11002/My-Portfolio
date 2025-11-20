"use client";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../custom.css";

interface Project {
    title: string;
    desc: string;
    github: string;
    live: string;
    skills: string[];
  }

const ProjectData = () => {
    const [project, setProject] = useState<Project[]>([]);
      useEffect(() => {
        const url = window.location.origin;
        const fetchData = async () => {
          try {    
            const res = await fetch(`${url}/api/project`);
            const projectData = await res.json();
            setProject(projectData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    
    if (project.length === 0) {
            return <div className="text-white text-center bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
        </div>;;
        }
    
    if(!project) {
        return <div className="text-white text-center text-sm sm:text-base">No Data Found</div>;
    }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {project.map((item, index) => (
            <div 
              key={index}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...item} />
            </div>
          ))}
        </div>
  )
}

export default ProjectData
