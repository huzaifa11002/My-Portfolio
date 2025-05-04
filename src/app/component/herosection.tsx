import Image from "next/image";
import { Button } from "@/components/ui/button";
import MyImage from "@/../public/Huzaifa.jpeg";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import "../custom.css";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-20 flex flex-col-reverse gap-10 xs:flex-row xs:justify-between xs:items-center px-5 xl:px-10">
      <div className="text-white flex flex-col text-center xs:text-start gap-5 xs:w-1/2">
        <div>
          <span className="text-main font-bold text-sm">Hello,</span>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl whitespace-nowrap">
            I&apos;m
            <span className="text-main font-extrabold"> Huzaifa Khan</span>
          </h1>
        </div>
        <p className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 lg:leading-7">
        A passionate Frontend Developer from Karachi, driven by creativity and a love for innovative technology. I enjoy solving bugs — every challenge is a step toward growth.
        </p>
        <div className="flex justify-center xs:justify-start">
          <Link href="#about">
          <Button className="w-fit px-2 py-1 border border-main text-xs sm:text-sm bg-transparent shadow-sm shadow-main">
            Explore Now
          </Button>
          </Link>
        </div>
        <ul className='flex flex-row gap-3 items-center mt-1 justify-center xs:justify-start'>
          <li className='p-2 border border-main rounded-md cursor-pointer btn'>
            <Link href={"https://www.linkedin.com/in/huzaifa-khan-codes/"} target="_blank">
            <FaLinkedinIn className='w-5 h-5' />
            </Link>
            </li>
          <li className='p-2 border border-main rounded-md cursor-pointer btn'>
            <Link href={"https://github.com/huzaifa11002"} target="_blank">
            <FiGithub className='w-5 h-5' />
            </Link>
            </li>
        </ul>
      </div>
      <div className="flex justify-center xs:justify-end xs:w-1/2">
        <div className="w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] xl:w-[400px] xl:h-[400px]">
          <Image
            src={MyImage}
            alt="Huzaifa"
            className="object-cover rounded-full shadow-lg shadow-main"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
