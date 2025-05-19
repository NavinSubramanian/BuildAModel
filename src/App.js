import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'

import Pricing from './sections/Pricing';
import Project from './sections/Project';
import Contact from './sections/Contact';
import Query from './sections/Query';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './sections/Hero';
import WeDo from './sections/WeDo';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <title>BuildaModel - 3D Modeling & Printing Services</title>
          <meta name="description" content="Expert 3D models for architects, designers, and businesses — crafted with accuracy and delivered fast." />
          <meta name="keywords" content="3D modeling, 3D printing, architectural models, product prototypes, custom models" />
          <meta property="og:title" content="BuildaModel - 3D Modeling & Printing Services" />
          <meta property="og:description" content="Expert 3D models for architects, designers, and businesses — crafted with accuracy and delivered fast." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://buildamodel.com" />
          <meta property="og:image" content="https://buildamodel.com/og-image.jpg" />
          <link rel="canonical" href="https://buildamodel.com" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "BuildaModel",
                "description": "Expert 3D models for architects, designers, and businesses — crafted with accuracy and delivered fast.",
                "url": "https://buildamodel.com",
                "telephone": "+1 234 567 890",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Model Lane",
                  "addressLocality": "Design City",
                  "addressRegion": "State",
                  "postalCode": "12345",
                  "addressCountry": "US"
                },
                "priceRange": "$$",
                "openingHours": "Mo-Fr 09:00-17:00",
                "sameAs": [
                  "https://www.linkedin.com/company/buildamodel",
                  "https://www.instagram.com/buildamodel",
                  "https://www.facebook.com/buildamodel"
                ]
              }
            `}
          </script>
        </Helmet>
        <Header />
        <main>
          <Hero />
          <WeDo />
          {/* Why Choose Us */}
          {/* How it Works */}
          <Project />
          <Pricing />
          <Query />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;