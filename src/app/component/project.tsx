import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  desc: string;
  github: string;
  live: string;
  skills: string[];
}
try {
  
} catch (error) {
  
}
const res = await fetch("http://localhost:3000/api//project");
const project = await res.json();

const projects: Project[] = project;

const Projects = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-main text-center" id="project">Projects</h2>
      <div className="container mx-auto py-10 px-5 xl:px-10">
        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2">
          {projects.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;