import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contacts />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;