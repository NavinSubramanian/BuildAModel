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
import HowWorks from './sections/HowWorks';
import WhyUs from './sections/WhyUs';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <WeDo />
          <WhyUs />
          <HowWorks />
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