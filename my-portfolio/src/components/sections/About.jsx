import makotoImage from '../../assets/makoto.png';
import AsciiPanel from './AsciiPanel';
import TextPanel from './TextPanel';

function About() {
  return (
    <div className="two-panel-layout">
      <TextPanel>
        <h1>about me</h1>
        <p>
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
          About text Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </TextPanel>

      <AsciiPanel
        imageSrc={makotoImage}
        width={120}
        speed={20}
        delay={1000}
      />
    </div>
  );
}

export default About;