import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 relative" id="contact">
      <div className="absolute inset-0 grid-pattern-dense opacity-20"></div>
      
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left side - Title */}
          <div className="w-full lg:w-1/3 animate-slide-in-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mono-font">
              <span className="text-main">#</span>contacts
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-main mt-3 sm:mt-4 animate-slide-in-left animate-delay-200"></div>
          </div>
          
          {/* Right side - Contact Info */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-5 md:gap-6">
            <p className="text-gray-400 text-sm sm:text-base animate-slide-in-right animate-delay-200">
              I&apos;m interested in freelance opportunities. However, if you have other request or question, don&apos;t hesitate to contact me
            </p>
            
            <div className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 hover:border-main transition-all duration-300 animate-scale-in animate-delay-300">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Message me here</h3>
              <div className="flex flex-col gap-3">
                <Link 
                  href="mailto:huzaifahuzaifa112@gmail.com" 
                  target="_blank"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-main transition-all hover:translate-x-2 duration-300"
                >
                  <MdOutlineMailOutline className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-all">huzaifahuzaifa112@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
