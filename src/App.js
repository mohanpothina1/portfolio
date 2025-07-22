import './App.css';
import AboutMe from './components/AboutMe';
import AdditionalInfo from './components/AdditionalInfo';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Navbar/>
     <Hero/>
     <AboutMe/>
     <Skills/>
     <Experience/>
     <Project/>
     <Education/>
     <Certificates/>
     <AdditionalInfo/>
     <Footer/>
    </div>
  );
}

export default App;
