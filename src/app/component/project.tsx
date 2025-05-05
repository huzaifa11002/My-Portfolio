import ProjectData from "./ProjectData";

const Projects = () => {

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-main text-center" id="project">Projects</h2>
      <p className='text-xs sm:text-sm lg:text-base text-white text-center my-1'>What&apos;s my Projects?</p>
      <div className="container mx-auto py-10 sm:py-14 md:py-20 px-5 xl:px-10">
        <ProjectData/>
      </div>
    </div>
  );
};

export default Projects;