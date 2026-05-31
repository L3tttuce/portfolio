//import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import MainContent from './components/MainContent/MainContent.jsx'

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  return (
    <div className="scanlines old-crt-boot">
      <Navbar setCurrentSection={setCurrentSection} />
      <MainContent currentSection={currentSection} />
   </div>
  );
}

export default App
