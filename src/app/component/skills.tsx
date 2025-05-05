import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillData from "./SkillData";
import EducationData from "./EducationData";

const Skills = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-main text-center" id="skill">
        Education / Skills
      </h2>
      <p className='text-xs sm:text-sm lg:text-base text-white text-center my-1'>What&apos;s my Education and Skill?</p>
      <div className="container mx-auto py-10 sm:py-14 md:py-20 flex flex-col gap-5 xs:flex-row xs:justify-between xs:items-center px-5 xl:px-10">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="w-full bg-main text-black">
            <TabsTrigger value="education" className="w-1/2 text-xl p-0">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="w-1/2 text-xl p-0">
              Skills
            </TabsTrigger>
          </TabsList>
          <div className="my-5">
            <TabsContent value="education">
              <EducationData/>
            </TabsContent>
            <TabsContent value="skills">
              <SkillData />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
