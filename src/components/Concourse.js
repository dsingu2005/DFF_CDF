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

import catalysts from './images/theCatalysts.png';
import hoodiesToSuits from './images/fromHoodiesToSuits.png';
import cryptoInAmerica from './images/cryptoInAmerica.png';
import exploringProsperity from './images/exploringProsperity.png';

const sponsorLogos = [bankwell, globalstake, hadera, inx, kadena, oasispro, promethium, silvermine, vaneck, wigginx];

const Concourse = () => (
  <section id="concourse" className="backdrop">
    <h2>Concourse</h2>
    <div className="event-box">
      <p>Book Signing / 12 Noon</p>
      <p>The Catalysts by Amanda Wick</p>
      <img src={catalysts} alt="The Catalysts" className="concourse-image" />
      <p>From Hoodies to Suits by Annelise Osborne</p>
      <img src={hoodiesToSuits} alt="From Hoodies to Suits" className="concourse-image" />
    </div>

    <div className="event-box">
      <p>Live Podcasting all day</p>
      <img src={cryptoInAmerica} alt="Crypto in America" className="concourse-image" />
      <img src={exploringProsperity} alt="Exploring Prosperity" className="concourse-image" />
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

export default Concourse;
