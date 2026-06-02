import "./Footer.css";
import seesImage from "../../assets/sees-logo.png";
import { useEffect, useState } from "react";

const moonPhases = Object.values(
  import.meta.glob("../../assets/moons/*.png", {
    eager: true,
    import: "default",
  }),
).sort();

function Footer() {
  const [clock, setClock] = useState({
    hours: "00",
    minutes: "00",
    period: "AM",
  });

  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    function updateClock() {
      const now = new Date();

      setClock({
        hours: String(now.getHours() % 12 || 12).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        period: now.getHours() >= 12 ? "PM" : "AM",
      });
    }

    updateClock();

    const clockInterval = setInterval(updateClock, 1000);
    const blinkInterval = setInterval(() => {
      setShowColon((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="footer-content">
      <img className="footer-logo" src={seesImage} alt="SEES Logo" />

      <div className="sees-text">
        <div className="sees-title">S.E.E.S.</div>
        <div className="sees-subtitle">
          Specialized Extracurricular Execution Squad
        </div>
      </div>

      <div className="moon-zoetrope">
        <div className="moon-track">
          {[...moonPhases, ...moonPhases].map((moon, index) => (
            <img
              key={index}
              className="moon-logo"
              src={moon}
              alt={`Moon phase ${(index % moonPhases.length) + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="digital-clock">
        <span>{clock.hours}</span>
        <span className="clock-colon">{showColon ? ":" : " "}</span>
        <span>{clock.minutes}</span>
        <span className="clock-period">{clock.period}</span>
      </div>

      <div className="my-name">Alexis Ramirez</div>
    </div>
  );
}

export default Footer;
