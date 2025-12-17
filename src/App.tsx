import React from 'react';
import { Helmet } from 'react-helmet';

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
    <div className="min-h-screen font-sans text-white bg-black scroll-smooth">
      
      {/* SEO & Social Tags */}
      <Helmet>
        <title>Edward Kayiira | Frontend Web Developer</title>
        <meta
          name="description"
          content="I build modern, responsive websites using React, TypeScript, Tailwind CSS, and WordPress. View projects and book a call."
        />
        <meta
          name="keywords"
          content="Edward Kayiira, Kayiira Edward, web developer, frontend, React, TypeScript, Tailwind CSS, WordPress, Uganda, portfolio"
        />
        <meta name="author" content="Edward Kayiira" />

        {/* Open Graph */}
        <meta property="og:title" content="Edward Kayiira | Frontend Web Developer" />
        <meta
          property="og:description"
          content="I create visually stunning, responsive websites using React, TypeScript, Tailwind CSS, and WordPress."
        />
        <meta property="og:image" content="https://yourdomain.com/assets/og-image.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edward Kayiira | Frontend Web Developer" />
        <meta
          name="twitter:description"
          content="I build modern, responsive websites using React, TypeScript, Tailwind CSS, and WordPress."
        />
        <meta name="twitter:image" content="https://yourdomain.com/assets/og-image.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Edward Kayiira",
            "url": "https://yourdomain.com",
            "sameAs": [
              "https://linkedin.com/in/Edwardkay1",
              "https://github.com/edwardkay1",
              "https://twitter.com/Edwardkay1",
              "https://facebook.com/Edwardkay1"
            ],
            "jobTitle": "Frontend Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Self-Employed"
            },
            "email": "mailto:edwardbrin1@email.com",
            "telephone": "+256746838046",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kampala",
              "addressCountry": "Uganda"
            }
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://yourdomain.com",
            "name": "Edward Kayiira Portfolio",
            "description": "One-page portfolio showcasing Edward Kayiira's web development services and projects.",
            "publisher": {
              "@type": "Person",
              "name": "Edward Kayiira"
            }
          }
          `}
        </script>
      </Helmet>

      <Navbar /> 

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="faqs">
          <FAQSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
