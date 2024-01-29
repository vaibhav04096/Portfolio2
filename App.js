import React from 'react'
import "./app.scss";
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Parallax from './components/parallax/Parallax';
import Projects from "./components/projects/Projects.js"
import Portfolio from './components/portfolio/Portfolio.js';
import Contact from './components/contact/Contact.js';
import Cursor from './components/cursor/Cursor.js';

const App = () => {
  return (
 <div>
  <Cursor/>
     <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Connect' ><Parallax type="services"/></section>
      <section ><Projects/></section>
      <section id='Portfolio'><Parallax type="portfolio"/></section>
     
      <Portfolio/>
      {/* <section ><Parallax type="contact"/></section> */}
      <section id='Contact'><Contact/></section>
      
    </div>
  );
}

export default App