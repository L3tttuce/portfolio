import panelImage from "../../assets/wumpa-fruit.png";
import AsciiPanel from "./AsciiPanel";
import TextPanel from "./TextPanel";

function Contact() {
  return (
    <div className="two-panel-layout">
      <TextPanel>
        <h1>contact</h1>

        <h2>Links</h2>
        <br />
        <p>
          {'>'} <span className="topic2">Github</span> -{" "}
          <a
            href="https://github.com/L3tttuce"
            target="_blank"
            rel="noopener noreferrer"
          >
            L3tttuce
          </a>
          <br />
          <br />
          {'>'} <span className="topic3">LinkedIn</span> -{" "}
          <a
            href="https://www.linkedin.com/in/alexis-ramirez-437211380"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexis Ramirez
          </a>
          <br />
          <br />
        </p>
      </TextPanel>

      <AsciiPanel imageSrc={panelImage} width={120} speed={20} delay={100} />
    </div>
  );
}

export default Contact;
