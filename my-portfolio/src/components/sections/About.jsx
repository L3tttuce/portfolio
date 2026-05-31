import './About.css' 
import ascii from '../../assets/makoto-ascii.txt?raw';

function About() {
    
    return(
        <div className='about-content'>
            <div className='text-panel'>
                <h1>about me</h1>
                <p>About text
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien 
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus 
                bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
                semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>

            <div className='ascii-panel'>
                <pre className='ascii-art'>{ascii}</pre>
            </div>
        </div>
        

    );
}

export default About;