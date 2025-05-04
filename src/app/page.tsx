import HeroSection from "./component/herosection";
import About from "./component/about";
import Skills from "./component/skills";
import Projects from "./component/project";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
