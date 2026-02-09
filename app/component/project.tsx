import ProjectData from "./ProjectData";

const Projects = () => {

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 relative" id="project">
      <div className="absolute inset-0 grid-pattern-dense opacity-20"></div>

      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mono-font text-center uppercase tracking-tighter">
            projects
          </h2>
          <div className="w-20 h-1.5 bg-main mt-4 rounded-full shadow-[0_0_10px_rgba(196,239,4,0.5)]" />
        </div>
        <ProjectData />
      </div>
    </div>
  );
};

export default Projects;
