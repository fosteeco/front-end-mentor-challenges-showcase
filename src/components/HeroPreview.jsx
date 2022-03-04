import React from "react";
import { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

import Fade from "react-reveal/Fade";

function HeroPreview(props) {
  const [inView, setInView] = useState(false);

  const { challenge, idx } = props;
  const direction = idx % 2 === 0;
  const { name, repo, liveDemo, image } = challenge;
  return (
    <div
      className={`hero-component flex ${
        direction ? "flex-row" : "flex-row-reverse"
      } justify-around items-center`}
    >
      <div>
        <h2 class="text-xl text-base md:text-xl lg:text-2xl mb-8 justify-self-center">
          {challenge.name}
        </h2>
        <div className={`flex items-center `}>
          <Fade left={direction} right>
            <div className="browser-mockup flex">
              <img src={image} alt="" />
            </div>
          </Fade>
        </div>
      </div>
      <div>
        <Fade delay={500}>
          <div className="project-info">
            <p>
              <a target="_blank" href={liveDemo}>
                Link to Demo
              </a>
            </p>
            <p>
              <a target="_blank" href={repo}>
                Link to Repo
              </a>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default HeroPreview;
