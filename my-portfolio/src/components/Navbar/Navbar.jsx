import './Navbar.css' 

function Navbar({ setCurrentSection}) {
    return (
        <nav className ='navbar'> 
            <ul className='nav-links'>
                <li>
                    <button onClick={() => setCurrentSection("about")}>
                        [ About ]
                    </button>
                </li>

                <li>
                    <button onClick={() => setCurrentSection("skills")}>
                        [ Skills ]
                    </button>
                </li>

                <li>
                    <button onClick={() => setCurrentSection("projects")}>
                        [ Projects ]
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentSection("contact")}>
                        [ Contact ]
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;