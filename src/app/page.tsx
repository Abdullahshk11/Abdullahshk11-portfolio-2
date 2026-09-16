import Image from "next/image";
import FrostedTypeBand from "./Compounds/Hero";
import BlockTextReveal from "./Compounds/About"
import SkillsSection from "./Compounds/Skill";
import Projects from "./Compounds/Projects";
import Contact from "./Compounds/Contact";
import Navbar from "./Compounds/Navbar";





export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="scroll-mt-20 relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#092328]">
        <FrostedTypeBand
          style={{
            minWidth: "100%",
            minHeight: "100%",
          }}
        />
      </div>
      <div id="about" className="scroll-mt-20 flex min-h-screen flex-col items-center gap-1 bg-[#12544F] p-6 py-16 md:flex-row md:justify-center md:gap-16">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={500}
          height={500}
          className="h-72 w-full max-w-sm rounded-2xl object-cover shadow-lg md:h-96 md:w-96"
        />
        <div className="w-full md:flex-1 ">
          <BlockTextReveal />
        </div>
      </div>
      <div id="skills" className="scroll-mt-20">
        <SkillsSection />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
      <footer className="mx-auto ">
        Made with love ❤️ by Abdullah
      </footer>
    </>
  );
}
