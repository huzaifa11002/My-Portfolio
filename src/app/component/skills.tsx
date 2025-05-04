import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const res1 = await fetch("http://localhost:3000/api/education");
const education = await res1.json();

const res2 = await fetch("http://localhost:3000/api/skill");
const skill = await res2.json();

interface Education {
  edu: string;
  status: string;
}
interface Skill {
  skill: string;
  status: string;
}
const edu: Education[] = education;
const skills: Skill[] = skill;

const Skills = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-main text-center" id="skill">
        Education / Skills
      </h2>
      <div className="container mx-auto py-10 flex flex-col gap-5 xs:flex-row xs:justify-between xs:items-center px-5 xl:px-10">
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
              <ul className="flex flex-col gap-3 list-disc list-inside marker:text-main">
                {edu.map((item, index) => (
                  <div
                    className="flex justify-between items-center"
                    key={index}
                  >
                    <li className="text-white uppercase font-bold text-sm xs:text-base">
                      {item.edu}
                    </li>
                    <span className="text-main font-bold text-center uppercase text-sm xs:text-base">
                      {item.status}
                    </span>
                  </div>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="skills">
              <ul className="flex flex-col gap-3 list-disc list-inside marker:text-main">
                {skills.map((item, index) => (
                  <div
                    className="flex justify-between items-center"
                    key={index}
                  >
                    <li className="text-white uppercase font-bold text-sm xs:text-base">
                      {item.skill}
                    </li>
                    <span className="text-main font-bold text-center uppercase text-sm xs:text-base">
                      {item.status}
                    </span>
                  </div>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
