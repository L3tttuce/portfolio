import panelImage from "../../assets/factorio.png";
import AsciiPanel from "./AsciiPanel";
import TextPanel from "./TextPanel";

function Projects() {
  return (
    <div className="two-panel-layout">
      <TextPanel>
        <h1>projects</h1>

        <h2>PeerCritic <span className='subheader'>May 2026</span></h2>
        <p>
          {'>'} A <span className="topic3">webapp</span> that enables users to discover and review, film, television, and music.<br /><br />
          {'>'} Many established review platforms focus separately on movies, TV, or music. This project incorporates all three and adds a deeper social experience.<br /><br />
          {'>'} Worked on the complete software development lifecycle, including project conception, requirements, system design, testing, and full-stack development.<br /><br />
          {'>'} <span className="topic2">Tech Stack</span> - Next.js, React, FastAPI, PostgreSQL, REST APIs, TypeScript, Python<br /><br />
          {'>'} Selected to present at the CSULB Senior Design Expo.
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Pet Simulator <span className='subheader'>December 2025</span></h2>

        <p>
          {'>'} A <span className="topic3">mobile app</span> that allows users to check in and tend to their pet’s needs throughout the day.<br /><br />
          {'>'} Implemented persistent game-state storage, core gameplay systems, user interface elements, and pet interaction mechanics.<br /><br />
          {'>'} <span className="topic2">Tech Stack</span> - Expo, React Native, AsyncStorage, TypeScript, JavaScript<br /><br />
          {'>'} Led a team of developers through scrum-based development practices.
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>Marina Mental AI Emotion Detector <span className='subheader'>October 2025</span></h2>

        <p>
          {'>'} A <span className="topic3">desktop application</span> that uses a device camera and an AI emotion recognition model to analyze 
          facial expression in real time.<br /><br />
          {'>'} Built an initial prototype of detecting faces within static images. Logged emotion classification results and confidence scores for later analysis.<br /><br />
          {'>'} Led a group of three programmers, delegating tasks, project planning, and final presentation.<br /><br />
          {'>'} <span className="topic2">Tech Stack</span> - OpenCV, DeepFace, PySide6, Python<br /><br />
          {'>'} Created in less than 24 hours for the CSULB Marina Hacks Hackathon.
        </p>

        <div className="divider">{"=".repeat(200)}</div>

        <h2>End-to-end IoT System <span className='subheader'>May 2025</span></h2>

        <p>
          {'>'} An end-to-end IoT <span className="topic3">data collection system</span> that collects sensor data from smart appliances and stores it in a centralized database. 
          This allows users to query and analyze device activity through a networked client application.<br /><br />
          {'>'} Large amounts of sensor data can be difficult to analyze properly. This project enables users to monitor device activity and derive meaningful insights 
          from IoT data.<br /><br />
          {'>'} <span className="topic2">Tech Stack</span> - PostgreSQL, TCP/IP Sockets, Psycopg2, Dataniz, Threading, Python<br /><br />
          {'>'} Applied fundamental networking principles.
        </p>
      </TextPanel>

      <AsciiPanel imageSrc={panelImage} width={120} speed={20} delay={100} />
    </div>
  );
}

export default Projects;