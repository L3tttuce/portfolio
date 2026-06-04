import panelImage from "../../assets/makoto.png";
import AsciiPanel from "./AsciiPanel";
import TextPanel from "./TextPanel";

function About() {
  return (
    <div className="two-panel-layout">
      <TextPanel>
        <h1>about me</h1>

        <h2>Who am I?</h2>
        <p>
          Hello! My name is Alexis and I am pursuing junior level roles in
          software development, software engineering, and other
          technology-focused roles.
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Education</h2>

        <p>
          California State University, Long Beach
          <br />
          B.S. in Computer Science, 2026
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Current Status</h2>

        <p>
          {">"} <span className="topic1">Playing</span> - Street Fighter 6<br />
          {">"} <span className="topic2">Watching</span> - One Piece (Wano)
          <br />
          {">"} <span className="topic3">Listening to</span> - Malcolm Todd
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Favorites</h2>

        <p>
          {">"} <span className="topic4"> Movies </span> - Sinners, Whiplash,
          Interstellar, Chainsaw Man (Reze Arc)
          <br />
          {">"} <span className="topic5"> Video Games </span> - Crash Bandicoot:
          Twinsanity, Persona 3 Reload, Factorio, League of Legends
          <br />
          {">"} <span className="topic6"> Music Artists </span> - Malcolm Todd,
          The Marias, 54 Ultra, Mon Laferte
          <br />
          {">"} <span className="topic1"> Hobbies </span> - Video Games, Video
          Editing, Listening to Podcasts, Trading cards, Coffee and Tea Brewing.
        </p>
      </TextPanel>

      <AsciiPanel imageSrc={panelImage} width={120} speed={20} delay={100} />
    </div>
  );
}

export default About;
