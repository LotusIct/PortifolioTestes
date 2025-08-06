import React from "react";
import "./App.css";
import './styles/global.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero.js";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import Projects from "./components/projects.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects/>
      <About />
      <Skills />
      <Contact/>
      <Footer />
      {/* Contact, Projects, etc. */}
    </div>
  );
}

export default App;
