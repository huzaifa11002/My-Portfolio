import HeroSection from "./component/herosection";
import About from "./component/about";
import Skills from "./component/skills";
import Projects from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";
import ScrollToTop from "./component/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
