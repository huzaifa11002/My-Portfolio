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
      <div className="border-b border-main">
        <div className="container mx-auto flex justify-between items-center py-10 px-5 xl:px-10">
          <div className="">
            <Link href="/" className="flex flex-row items-end gap-1 logo w-[200px]">
              <Image src={Logo} alt="logo" className="object-fit w-[40px] lg:w-[55px]" />
              <span className="text-2xl lg:text-4xl leading-[1.7rem]">Huzaifa</span>
            </Link>
          </div>
          <div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4 text-main text-base">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#skill">Skills</Link>
                </li>
                <li>
                  <Link href="#project">Projects</Link>
                </li>
                {/* <li>
                  <Link href="/contact">Contact</Link>
                </li> */}
                {/* <li>
                  <Link href="/login">Admin Login</Link>
                </li> */}
              </ul>
            </nav>
            <div className="md:hidden text-main flex items-center">
              <Sheet>
                <SheetTrigger>
                  <FaBars className="w-8 h-8" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription>
                      <div className="flex flex-col gap-5 justify-center">
                        <div className="flex justify-center">
                          <Link href="/" className="flex flex-row items-end gap-1 logo">
                            <Image src={Logo} alt="logo" className="object-fit w-[40px] lg:w-[55px]" />
                            <span className="text-2xl lg:text-4xl leading-[1.7rem] text-main">Huzaifa</span>
                          </Link>
                        </div>
                        <ul className="flex flex-col gap-5 text-main text-base">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="#about">About</Link>
                          </li>
                          <li>
                            <Link href="#skill">Skills</Link>
                          </li>
                          <li>
                            <Link href="#project">Projects</Link>
                          </li>
                          {/* <li>
                          <Link href="/contact">Contact</Link>
                        </li> */}
                          {/* <li>
                          <Link href="/login">Admin Login</Link>
                        </li> */}
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
