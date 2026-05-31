import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <ProjectGrid />
        <Skills />
        <Writing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
