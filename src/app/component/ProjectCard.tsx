"use client";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";


interface Project {
  title: string;
  desc: string;
  github: string;
  live: string;
  skills: string[];
}

const ProjectCard = (props: Project) => {
  const [paragraph, setParagraph] = useState(false);
  const [items, setItems] = useState(false)
  const [wordLimit, setWordLimit] = useState(10);
  const [skillItems, setSkillItems] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setWordLimit(12);
        setSkillItems(4);
      } else if (window.innerWidth < 640) {
        setWordLimit(15);
        setSkillItems(5);
      } else if (window.innerWidth < 768) {
        setWordLimit(18);
        setSkillItems(5);
      }
      else{
        setWordLimit(20);
        setSkillItems(7);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const words = props.desc.split(" ");
  const truncated = words.length > wordLimit;
  const truncatedDesc =
    paragraph || !truncated
      ? props.desc
      : words.slice(0, wordLimit).join(" ") + "...";

  const skillItem = props.skills.length > skillItems;
  const truncatedSkill =
    items || !skillItem ? props.skills : props.skills.slice(0, skillItems);

  const handleParagraph = () => {
    setParagraph(!paragraph);
  };

  const handleItems = () => {
    setItems(!items);
  };

  return (
    <div className="w-full h-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 flex flex-col justify-between gap-4 sm:gap-5 hover:border-main hover:shadow-lg hover:shadow-main/20 hover:-translate-y-2 transition-all duration-300 group">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-white group-hover:text-main transition-colors">{props.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">{truncatedDesc}
              {truncated && (
                <span className="whitespace-nowrap text-main cursor-pointer hover:underline ml-1" onClick={handleParagraph}>
                  {paragraph ? " Read Less" : " Read More"}
                </span>
              )}
            </p>
          </div>
        </div>
        
        <div>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
            {truncatedSkill.map((item, index) => (
              <li
                className="px-2 sm:px-3 py-1 border border-gray-700 text-gray-300 rounded-md hover:border-main hover:text-main hover:scale-105 transition-all"
                key={index}
              >
                {item}
              </li>
            ))}
            {skillItem && (
              <span
                className="px-2 sm:px-3 py-1 border border-gray-700 text-gray-300 cursor-pointer hover:border-main hover:text-main rounded-md transition-all"
                onClick={handleItems}
              >
                {items ? "×" : "..."}
              </span>
            )}
          </ul>
        </div>
      </div>
      
      <div className="flex gap-2 sm:gap-3 pt-3 border-t border-gray-800">
        <Link
          href={props.live}
          className="flex-1 px-3 sm:px-4 py-2 text-center border border-main text-main text-xs sm:text-sm rounded hover:bg-main hover:text-black hover:scale-105 transition-all duration-300"
        >
          Live ~~&gt;
        </Link>
        <Link
          href={props.github}
          className="p-2 border border-gray-700 text-gray-400 rounded hover:border-main hover:text-main hover:scale-110 hover:rotate-6 transition-all"
        >
          <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
