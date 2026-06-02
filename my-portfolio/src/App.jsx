//import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import MainContent from './components/MainContent/MainContent.jsx'
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  return (
    <div className="app scanlines old-crt-boot">
      <Navbar setCurrentSection={setCurrentSection} />
      <MainContent currentSection={currentSection} />
      <Footer></Footer>
   </div>
  );
}

export default App
