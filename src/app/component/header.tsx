import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import Logo from "@/../public/main-logo.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import "../custom.css";

const Header = () => {
  return (
    <>
      <div className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50 animate-slide-in-down">
        <div className="container mx-auto flex justify-between items-center py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 xl:px-10">
          <div>
            <Link href="/" className="flex flex-row items-center gap-1.5 sm:gap-2 logo group">
              <Image src={Logo} alt="logo" className="object-fit w-[30px] sm:w-[35px] lg:w-[45px] group-hover:scale-110 transition-transform" />
              <span className="text-lg sm:text-xl lg:text-2xl text-white">Huzaifa</span>
            </Link>
          </div>
          <div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4 lg:space-x-6 text-gray-400 text-xs lg:text-sm">
                <li className="hover:text-main transition-colors">
                  <Link href="/"><span className="text-main">#</span>home</Link>
                </li>
                <li className="hover:text-main transition-colors">
                  <Link href="#project"><span className="text-main">#</span>projects</Link>
                </li>
                <li className="hover:text-main transition-colors">
                  <Link href="#skill"><span className="text-main">#</span>skills</Link>
                </li>
                <li className="hover:text-main transition-colors">
                  <Link href="#about"><span className="text-main">#</span>about-me</Link>
                </li>
                <li className="hover:text-main transition-colors">
                  <Link href="#contact"><span className="text-main">#</span>contacts</Link>
                </li>
              </ul>
            </nav>
            <div className="md:hidden text-main flex items-center">
              <Sheet>
                <SheetTrigger>
                  <FaBars className="w-6 h-6 sm:w-7 sm:h-7" />
                </SheetTrigger>
                <SheetContent className="w-[280px] sm:w-[350px]">
                  <SheetHeader>
                    <SheetDescription>
                      <div className="flex flex-col gap-6 justify-center pt-4">
                        <div className="flex justify-center">
                          <Link href="/" className="flex flex-row items-center gap-2 logo">
                            <Image src={Logo} alt="logo" className="object-fit w-[35px]" />
                            <span className="text-2xl text-main">Huzaifa</span>
                          </Link>
                        </div>
                        <ul className="flex flex-col gap-5 text-gray-400 text-base">
                          <li className="hover:text-main transition-colors">
                            <Link href="/"><span className="text-main">#</span>home</Link>
                          </li>
                          <li className="hover:text-main transition-colors">
                            <Link href="#project"><span className="text-main">#</span>projects</Link>
                          </li>
                          <li className="hover:text-main transition-colors">
                            <Link href="#skill"><span className="text-main">#</span>skills</Link>
                          </li>
                          <li className="hover:text-main transition-colors">
                            <Link href="#about"><span className="text-main">#</span>about-me</Link>
                          </li>
                          <li className="hover:text-main transition-colors">
                            <Link href="#contact"><span className="text-main">#</span>contacts</Link>
                          </li>
                        </ul>
                        <ul className="flex flex-row gap-3 items-center justify-center text-white">
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
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
