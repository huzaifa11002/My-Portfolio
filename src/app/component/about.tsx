import { Button } from '@/components/ui/button'
import Link from 'next/link'
const about = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 relative" id="about">
      <div className="absolute inset-0 grid-pattern-dense opacity-20"></div>
      
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 xl:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left side - Title */}
          <div className="w-full lg:w-1/3 animate-slide-in-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mono-font">
              <span className="text-main">#</span>about-me
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-main mt-3 sm:mt-4 animate-slide-in-left animate-delay-200"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-5 md:gap-6">
            <div className="flex flex-col gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p className="animate-slide-in-right animate-delay-200">
                I&apos;m a self-taught <span className="text-white">front-end developer</span> based in Karachi. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
              </p>
              <p className="animate-slide-in-right animate-delay-300">
                Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
              </p>
            </div>
            
            <Link href="/file/CV.pdf" target="_blank" download className="animate-slide-in-right animate-delay-400">
              <Button className="w-fit px-4 sm:px-6 py-2 sm:py-3 border border-main text-xs sm:text-sm bg-transparent hover:bg-main hover:text-black transition-all duration-300 hover:translate-x-2">
                Resume →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
