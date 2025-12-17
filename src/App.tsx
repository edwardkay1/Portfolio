import React from 'react';
// Components
import Navbar from './components/Nav/Nav'; 
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

// Sections
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection'; 
import FAQSection from './sections/FAQSection';
import AboutSection from './sections/AboutSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-white bg-black">
      
      <Navbar /> 
      <main>
        
        <section id="home">
        <Hero />
        </section>
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;