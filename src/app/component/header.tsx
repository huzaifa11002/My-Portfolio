import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import Logo from "@/../public/logo.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <>
      <div className="border-b border-main">
        <div className="container mx-auto flex justify-between items-center py-10 px-5 xl:px-10">
          <div className="max-w-[150px] xs:max-w-[200px]">
            <Link href="/"><Image src={Logo} alt="logo" /></Link>
          </div>
          <div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4 text-[#c4ef04] text-base">
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
                  <FaBars  className="w-8 h-8"/>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription>
                      <div className="flex flex-col gap-5 justify-center">
                        <Link href="/" className="flex justify-center"><Image src={Logo} alt="logo" width={100} /></Link>
                        <ul className="flex flex-col gap-5 text-main text-xs">
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
