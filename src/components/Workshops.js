import React from 'react';
import bankwell from './images/bankwell.png';
import globalstake from './images/GlobalStake.png';
import hadera from './images/hadera.png';
import inx from './images/inx.png';
import kadena from './images/kadena.png';
import oasispro from './images/oasispro.png';
import promethium from './images/promethium.png';
import silvermine from './images/silvermine.png';
import vaneck from './images/vaneck.png';
import wigginx from './images/wigginx.png';

const sponsorLogos = [
  bankwell, globalstake, hadera, inx, kadena,
  oasispro, promethium, silvermine, vaneck, wigginx
];

// Helper function to check if the event has already passed
const isPastEvent = (startTime) => {
  return new Date(startTime) < new Date();
};

const Workshops = () => (
  <section id="workshops" className="backdrop">
    <h2>Workshops (DWTN 132)</h2>

    <div className={`event-box ${isPastEvent("2025-06-04T11:00:00") ? 'past-event' : ''}`}>
      <h3>11 AM–Noon – Intro Blockchain Technology</h3>
      <p>Prof. John Prelli</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T13:00:00") ? 'past-event' : ''}`}>
      <h3>1–2 PM – Meet the Global Recruiters: Future of Work</h3>
      <p>Michael Castine, Andrew Dmytryk, Rahul Kapur, Deepali Vyas</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T14:00:00") ? 'past-event' : ''}`}>
      <h3>2–3 PM – Generative AI & The Future of Business</h3>
      <p>Prof. Wei Chen</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T15:00:00") ? 'past-event' : ''}`}>
      <h3>3–3:30 PM – Managing Your Career from TradFi to Crypto</h3>
      <p>George Chuang, Kelly Ye, Kyle Downey, Doug Bilyk</p>
    </div>

    {sponsorLogos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`Sponsor ${index}`}
        className="falling-logo"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          width: `${40 + Math.random() * 40}px`,
        }}
      />
    ))}
  </section>
);

export default Workshops;
