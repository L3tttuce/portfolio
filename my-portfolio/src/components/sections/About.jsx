import { useEffect, useState } from 'react';
import './About.css';
import makotoImage from '../../assets/makoto.png';
import { loadImageAsAscii } from './AsciiPanel';

function About() {
  const [ascii, setAscii] = useState('');

  useEffect(() => {
    setTimeout(() => {
      loadImageAsAscii(makotoImage, setAscii, 120, 20)
    }, 1000)
  }, []);

  return (
    <div className='about-content'>
      <div className='text-panel'>
        <h1>about me</h1>
        <p>
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </div>

      <div className='ascii-panel'>
        <pre className='ascii-art'>{ascii}</pre>
      </div>
    </div>
  );
}

export default About;