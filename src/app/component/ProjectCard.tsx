"use client";
import { FiGithub } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
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
      if (window.innerWidth < 640) {
        setWordLimit(15);
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
    <div className="w-full border-main border rounded-md p-3 flex flex-col justify-between gap-5">
      <div className="flex justify-between gap-5">
        <div>
          <h3 className="font-bold text-sm sm:text-base mb-2">{props.title}</h3>
          <p className="text-white text-xs sm:text-sm">{truncatedDesc}
            {truncated && (
              <span className="whitespace-nowrap text-main cursor-pointer hover:underline" onClick={handleParagraph}>
                {paragraph ? " Read Less" : " Read More"}
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href={props.github}
            className="p-2 rounded-full text-center border border-main"
          >
            <FiGithub className="text-white" />
          </Link>
          <Link
            href={props.live}
            className="p-2 rounded-full border border-main"
          >
            <FaEye className="text-white" />
          </Link>
        </div>
      </div>
      <div>
      <ul className="grid grid-cols-3 gap-3 text-[8px] md:text-xs md:grid-cols-3 sm lg:grid-cols-4">
          {truncatedSkill.map((item, index) => (
            <li
              className="p-1 border border-main text-center rounded-3xl md:p-2 overflow-hidden text-ellipsis whitespace-normal"
              key={index}
            >
              {item}
            </li>
          ))}
          {skillItem && (
            <span
              className="p-1 border border-main text-center cursor-pointer hover:underline rounded-3xl md:p-2"
              onClick={handleItems}
            >
              {items ? "x" : "..."}
            </span>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

