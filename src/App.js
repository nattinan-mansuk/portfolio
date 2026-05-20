import React from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Marquee from './components/Marquee';
import About   from './components/About';
import Skills  from './components/Skills';
import Works   from './components/Works';
import Contact from './components/Contact';
import Footer  from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Works />
      </main>
      <Footer />
    </div>
  );
}
