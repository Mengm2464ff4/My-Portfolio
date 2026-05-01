import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import ProjectsPreview from '../sections/ProjectsPreview';
import ContactSection from '../sections/ContactSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <ProjectsPreview />
      <ContactSection />
    </main>
  );
};

export default Home;