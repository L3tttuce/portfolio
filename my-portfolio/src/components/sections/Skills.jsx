import panelImage from "../../assets/Straw-Hat-Logo.png";
import AsciiPanel from "./AsciiPanel";
import TextPanel from "./TextPanel";

function Skills() {
  return (
    <div className="two-panel-layout">
      <TextPanel>
        <h1>skills</h1>

        <h2>Languages</h2>
        <p>
          Python, C++, JavaScript, TypeScript, SQL, HTML/CSS
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Frameworks & Libraries</h2>

        <p>
          React, React Native, Expo, Next.js, Node.js, FastAPI, Scikit-learn
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Databases</h2>

        <p>
          PostgreSQL, MongoDB
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Tools & Technologies</h2>

        <p>
          Git, AWS, Google Cloud, REST APIs
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Fundamentals/Concepts</h2>
        <p>
            Data Structures & Algorithms, Artificial Intelligence, Operating Systems, Networking, Agile Development
        </p>
      </TextPanel>
      <AsciiPanel imageSrc={panelImage} width={120} speed={20} delay={100} />
    </div>
  );
}

export default Skills;
