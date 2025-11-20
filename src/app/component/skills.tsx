import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillData from "./SkillData";

const Skills = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 relative" id="skill">
      <div className="absolute inset-0 grid-pattern-dense opacity-20"></div>
      
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="mb-6 sm:mb-8 md:mb-10 animate-slide-in-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mono-font">
            <span className="text-main">#</span>skills
          </h2>
        </div>
        
        <SkillData />
      </div>
    </div>
  );
};

export default Skills;
