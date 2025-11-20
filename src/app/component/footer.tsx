import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/main-logo.svg";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import "../custom.css";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-12 sm:mt-16 md:mt-20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-10 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Left - Logo and Name */}
          <div className="flex items-center gap-2 sm:gap-3 animate-slide-in-left">
            <Link href="/" className="flex flex-row items-center gap-2 logo group">
              <Image src={Logo} alt="logo" className="object-fit w-[25px] sm:w-[30px] group-hover:scale-110 transition-transform" />
              <span className="text-lg sm:text-xl text-white">Huzaifa</span>
            </Link>
          </div>
          
          {/* Center - Copyright */}
          <div className="text-gray-500 text-xs sm:text-sm text-center animate-fade-in animate-delay-200">
            © Copyright 2024. Made by Huzaifa
          </div>
          
          {/* Right - Social Links */}
          <div className="flex items-center gap-2 animate-slide-in-right">
            <Link 
              href="https://github.com/huzaifa11002" 
              target="_blank"
              className="p-1.5 sm:p-2 text-gray-400 hover:text-main transition-all hover:scale-110 duration-300"
            >
              <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/huzaifa-khan-codes/" 
              target="_blank"
              className="p-1.5 sm:p-2 text-gray-400 hover:text-main transition-all hover:scale-110 duration-300"
            >
              <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
