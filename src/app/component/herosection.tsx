import Image from "next/image";
import { Button } from "@/components/ui/button";
import MyImage from "@/../public/Huzaifa.jpeg";
import Link from "next/link";
import "../custom.css";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 animate-fade-in"></div>
      
      <div className="container mx-auto py-10 sm:py-16 md:py-20 flex flex-col-reverse gap-8 md:gap-10 lg:flex-row lg:justify-between lg:items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        {/* Left side - Text content */}
        <div className="text-white flex flex-col text-center lg:text-start gap-4 sm:gap-5 md:gap-6 lg:w-1/2 animate-slide-in-left">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-normal">
              Hi, I&apos;m a 
              <br />
              <span className="text-main capitalize"> front-end developer</span>
            </h1>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I&apos;m currently into Frontend Dev, Backend Dev, and Agentic AI
          </p>
          
          <div className="flex justify-center lg:justify-start mt-2 sm:mt-4">
            <Link href="#project">
              <Button className="px-4 sm:px-6 py-2 sm:py-3 border border-main text-xs sm:text-sm bg-transparent hover:bg-main hover:text-black transition-all duration-300">
                Scroll Down ↓
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right side - Image with decorations */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 relative animate-slide-in-right">
          <div className="relative">
            {/* Decorative squares around image - hidden on mobile */}
            <div className="hidden sm:block absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-28 sm:w-40 h-28 sm:h-40 border-2 border-gray-700"></div>
            <div className="hidden sm:block absolute top-4 sm:top-8 left-4 sm:left-8 w-24 sm:w-32 h-24 sm:h-32 border-2 border-gray-600"></div>
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-28 h-20 sm:h-28 border-2 border-gray-700"></div>
            
            {/* Main image */}
            <div className="relative w-[240px] h-[300px] xs:w-[280px] xs:h-[350px] sm:w-[320px] sm:h-[400px] md:w-[340px] md:h-[430px] lg:w-[360px] lg:h-[450px] xl:w-[380px] xl:h-[480px] z-10">
              <Image
                src={MyImage}
                alt="Huzaifa"
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Decorative dots grid on the right - hidden on small mobile */}
            <div className="hidden xs:flex absolute -right-8 sm:-right-12 top-1/2 -translate-y-1/2 flex-col gap-2 sm:gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col gap-2 sm:gap-3">
                  {[...Array(3)].map((_, j) => (
                    <div 
                      key={j} 
                      className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-600 rounded-full"
                      style={{ animationDelay: `${(i + j) * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Currently working badge */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-max z-20 max-w-[90vw]">
              <div className="bg-gray-900 border border-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-main rounded-sm flex-shrink-0"></span>
                <span className="text-gray-300 text-xs sm:text-sm whitespace-nowrap">
                  Currently working on <span className="text-white font-semibold">Portfolio</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
