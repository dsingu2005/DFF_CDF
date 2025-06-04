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

// List of logos
const sponsorLogos = [bankwell, globalstake, hadera, inx, kadena, oasispro, promethium, silvermine, vaneck, wigginx];

// Utility: Check if event is past
const isPastEvent = (startTime) => {
  return new Date(startTime) < new Date();
};

const MainStage = () => (
  <section id="mainstage" className="backdrop">
    <h2>Main Stage (Gen Re)</h2>

    <div className={`event-box ${isPastEvent("2025-06-04T08:00:00") ? 'past-event' : ''}`}>
      <h3>8:00 AM – Registration and Networking</h3>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T09:00:00") ? 'past-event' : ''}`}>
      <h3>9:00 AM – Welcome</h3>
      <p>Jarvis Cromwell, Co-founder & CEO, CT Digital Forum</p>
      <p>Leah Kagan, Director Economic Development, City of Stamford</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T09:10:00") ? 'past-event' : ''}`}>
      <h3>9:10 AM – The Future of Work</h3>
      <p>Dan O’Keefe, Connecticut Chief Innovation Officer and Commissioner, DECD</p>
      <p>Matthew Breitleder, Global Head of Human Capital, Apollo</p>
      <p>Michael Castine, Global Head of Financial Services, ZRG Partners, Moderator</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T10:00:00") ? 'past-event' : ''}`}>
      <h3>10:00 AM – Building the Worldwide Web of AI</h3>
      <p>Evan Malanga, Chief Revenue Officer, Yuma</p>
      <p>Doug Petkanics, CEO & Co-founder, Livepeer</p>
      <p>Zach Pandl, Head of Research, Grayscale</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T11:00:00") ? 'past-event' : ''}`}>
      <h3>11:00 AM – Future of Digital Investing, Strategies, Instruments</h3>
      <p>Kyle DaCruz, Head Product Strategy, Van Eck</p>
      <p>Aaron Kaplan, Co-CEO, Prometheum</p>
      <p>David Nage, VC Portfolio Manager, Arca</p>
      <p>Bob Dewey, Exploring Prosperity Podcast, Moderator</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T11:30:00") ? 'past-event' : ''}`}>
      <h3>11:30 AM – What's Next Wall Street?</h3>
      <p>Eleanor Terrett, Moderator, Host, Crypto in America Podcast</p>
      <p>Paul McCaffery, Managing Director, KBW</p>
      <p>John Wu, President, Ava Labs</p>
      <p>William Cohan, Co-Founder, Puck; NYT Best-Selling Author</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T13:00:00") ? 'past-event' : ''}`}>
      <h3>1:00 PM – Regs, Risk, Cybercrime, Oh My</h3>
      <p>Amanda Wick, Author, The Catalysts</p>
      <p>Kari Larsen, Partner, Willkie Farr</p>
      <p>Debra Brookes, Chief Risk & Compliance Officer, Wyoming Stable Token Commission</p>
      <p>Matthew Hogan, Cyber Security, Crypto Fraud, CT State Police</p>
      <p>Stephanie Breslow, Executive Committee & Co-Head, Digital Assets, Schulte Roth</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T14:00:00") ? 'past-event' : ''}`}>
      <h3>2:00 PM – Future of On-Chain Finance</h3>
      <p>Michael Moro, Chief Strategy Officer, INX</p>
      <p>Todd Ziegler, TCS Blockchain</p>
      <p>Thomas Cowan, Head of Tokenization, Galaxy</p>
      <p>Angel Warren, President, TDR Transport</p>
      <p>Annelise Osborne, Chief Business Officer, Kadena; Author, From Hoodies to Suits</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T15:30:00") ? 'past-event' : ''}`}>
      <h3>3:30 PM – The Future of Blockchain Goes Mainstream</h3>
      <p>Rich Shorten, GlobalStake/Silvermine Capital, Moderator</p>
      <p>Scott Sigel, CEO, Helium Foundation</p>
      <p>Gregg Bell, Chief Business Officer, Hedera</p>
      <p>Chris Tyrrell, Private Markets Executive, Ondo</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T16:00:00") ? 'past-event' : ''}`}>
      <h3>4:00 PM – Tokenizing a Trillion Dollar Creator Economy</h3>
      <p>Daniel P Harris, DPH Ventures</p>
    </div>

    <div className={`event-box ${isPastEvent("2025-06-04T17:00:00") ? 'past-event' : ''}`}>
      <h3>5:00 PM – Cocktail Hour</h3>
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

export default MainStage;
