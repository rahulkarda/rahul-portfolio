import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import GithubWall from "@/components/GithubWall";

const TICKER_ITEMS = [
  "BITS PILANI",
  "SAP LABS",
  "ML ENGINEER",
  "BANGALORE",
  "OPEN SOURCE",
  "FULL STACK",
];

const TICKER_ITEMS_REVERSE = [
  "MEMTRAIL",
  "KNOWLEDGE GRAPH",
  "ADAPTIVE STREAMING",
  "RAG",
  "LLM-RL",
  "FINE-TUNING",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Marquee acts as a section transition between hero + work. */}
        <Marquee items={TICKER_ITEMS} duration={40} variant="accent" />
        <FeaturedProjects />
        <ProjectGrid />
        {/* Reverse-direction strip ticking project names. */}
        <Marquee
          items={TICKER_ITEMS_REVERSE}
          duration={45}
          reverse
          variant="default"
        />
        <Skills />
        <GithubWall />
        <Writing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
