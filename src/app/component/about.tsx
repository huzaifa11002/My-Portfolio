import { Button } from '@/components/ui/button'
import Link from 'next/link'
const about = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-main text-center" id="about">About US</h2>
      <div className="container mx-auto py-10 px-5 xl:px-10 flex flex-col gap-3">
        <span className='font-bold text-main text-sm'>About Me</span>
        <p className=' flex flex-col gap-3 text-xs text-white sm:text-sm lg:text-base leading-5 sm:leading-6 lg:leading-7 my-2'>
          <span>
          My name is <b className='text-main'>Huzaifa Khan</b>, and I am a passionate <b className='text-main'>Frontend Web Developer</b>. Originally from Hyderabad, I am currently based in Karachi.<i> I have a deep interest in innovation and emerging technologies, and I constantly strive to push my creative and technical boundaries</i>.
          </span>
          <span>        
          I approach every project with enthusiasm and a strong desire to learn and grow. One thing that truly excites me about programming is debugging — I believe that every bug is an opportunity to learn something new and become a better developer. This mindset has shaped my journey and keeps me motivated to improve my skills every day.
          </span>
          <span>
          I take pride in writing clean, efficient code and crafting responsive, user-friendly web interfaces that offer both functionality and aesthetic appeal.<i> For me, frontend development is not just about code — it's about creating experiences that connect people with technology </i>.
          </span>
        </p>
        <Link href="/file/CV.pdf" target="_blank" download>
          <Button className="w-fit px-2 py-1 border border-main text-xs sm:text-sm bg-transparent shadow-sm shadow-main">
            CV Download
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default about