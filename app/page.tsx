import HeroSection from "./component/herosection";
import About from "./component/about";
import Skills from "./component/skills";
import Projects from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";
import ScrollToTop from "./component/ScrollToTop";

import StoryContent from "./component/StoryContent";

export default function Home() {
  return (
    <div className="relative">

      <div className="relative z-10">
        <HeroSection />
        <StoryContent />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
