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
        return <div className="text-white text-center">No Data Found</div>;
    }

  return (
    <div className="grid grid-cols-1 gap-5 xs:grid-cols-2">
          {project.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </div>
  )
}

export default ProjectData