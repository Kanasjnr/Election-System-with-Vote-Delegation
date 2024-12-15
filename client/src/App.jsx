import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

