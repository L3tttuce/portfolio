import { useEffect, useState } from 'react';
import './About.css';
import makotoImage from '../../assets/makoto.png';

function About() {
  const [ascii, setAscii] = useState('');

  const chars = '@%#*+=-:. ';

  function imageToAscii(image, width = 120) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const aspectRatio = image.height / image.width;
    const height = Math.floor(width * aspectRatio * 0.45);

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0, width, height);

    const pixels = ctx.getImageData(0, 0, width, height).data;
    let result = '';

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;

        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const brightness = (r + g + b) / 3;

        const charIndex = Math.floor(
          (brightness / 255) * (chars.length - 1)
        );

        result += chars[charIndex];
      }

      result += '\n';
    }

    return result;
  }

  function animateAscii(fullAscii) {
    const lines = fullAscii.split('\n');
    let currentLine = 0;

    const interval = setInterval(() => {
      setAscii(lines.slice(0, currentLine).join('\n'));
      currentLine++;

      if (currentLine > lines.length) {
        clearInterval(interval);
      }
    }, 15);
  }

  useEffect(() => {
    const image = new Image();
    image.src = makotoImage;

    image.onload = () => {
      const generatedAscii = imageToAscii(image, 120);
      animateAscii(generatedAscii);
    };
  }, []);

  return (
    <div className='about-content'>
      <div className='text-panel'>
        <h1>about me</h1>
        <p>
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