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

const GallerySessions = () => (
  <section id="gallery" className="backdrop">
    <h2>Gallery Sessions (117.E)</h2>

    <div className={`event-box ${isPastEvent("2025-06-04T10:00:00") ? 'past-event' : ''}`}>
      <h3>10 AM–Noon – Meet NextGen Entrepreneurs and Projects</h3>
      <p>UConn and Yale students discuss their projects across the digital ecosystem.</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T12:00:00") ? 'past-event' : ''}`}>
      <h3>12–1 PM – Topic Table / Networking (One)</h3>
      <p>Exclusive networking with industry experts — first come, first served.</p>

      <div className="sub-box">
        <h4>TABLE 1: How to Find Talent in a Disrupted Tech Landscape</h4>
        <p><strong>Speaker:</strong> John Bemis, President – Benchmark IT</p>
      </div>

      <div className="sub-box">
        <h4>TABLE 2: Smarter Markets, Clearer Models</h4>
        <p><strong>Speaker:</strong> Ellie Arbab – Greenwich AI</p>
      </div>

      <div className="sub-box">
        <h4>TABLE 3: The Future of Trading in the Age of AI</h4>
        <p><strong>Speaker:</strong> Samir Varma, Managing Member  
          <br />
          Author of “The Science of Free Will” – VS Asset Management</p>
      </div>

      <div className="sub-box">
        <h4>TABLE 4: Building a Proprietary Trading Firm in Crypto</h4>
        <p><strong>Speaker:</strong> George Chuang, CEO – Lucy Labs</p>
      </div>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T13:00:00") ? 'past-event' : ''}`}>
      <h3>1–2 PM – Topic Table / Networking (Two)</h3>

      <div className="sub-box">
        <h4>TABLE 1: Adapting Your Job Search for the AI Era</h4>
        <p><strong>Speaker:</strong> Mariah Szarek – Benchmark IT</p>
      </div>

      <div className="sub-box">
        <h4>TABLE 2: The Age of Crypto Strategic Reserves</h4>
        <p><strong>Speaker:</strong> Wilfred Daye, CEO – Samara Alpha Management</p>
      </div>

      <div className="sub-box">
        <h4>TABLE 3: Stablecoins: What Does the Future Hold?</h4>
        <p><strong>Speaker:</strong> Lynne Marlor, Co-Founder – Women in Digital Assets Forum</p>
      </div>

      <div className="sub-box">
        <h4>TABLE 4: Democratization Through Tokenization</h4>
        <p><strong>Speaker:</strong> Keeyan Ravanshid, Co-Founder – HODL Markets</p>
      </div>

      <div className="sub-box">
        <h4>TABLE 5: The Next Large Digital Asset Class</h4>
        <p><strong>Speaker:</strong> Darren Wolfberg, Co-Founder & CEO – Triangle Digital</p>
      </div>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T14:00:00") ? 'past-event' : ''}`}>
      <h3>2–4 PM – Digital Art Show, Talk, Demo and Sale</h3>
      <p>Stop in and meet the artists!</p>
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

export default GallerySessions;
