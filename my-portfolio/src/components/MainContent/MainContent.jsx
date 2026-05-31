import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Projects from '../sections/Projects.jsx';
import Contact from '../sections/Contact.jsx';
import './MainContent.css';


function MainContent({ currentSection }) {
    const sections = {
        about: About,
        skills: Skills,
        projects: Projects,
        contact: Contact,
    };
    const Section = sections[currentSection] || About;

    return (
        <div className='main-content'>
            <Section />
        </div>
    );
}

export default MainContent;