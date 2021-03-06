import React from "react";
import { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

import Fade from "react-reveal/Fade";

function HeroPreview(props) {
  const [inView, setInView] = useState(false);

  const { challenge, idx } = props;
  const direction = idx % 2 === 0;
  let { name, repo, liveDemo, image } = challenge;
  if (process.env.NODE_ENV === "development") {
    console.log("dev env");
    image =
      window.location.origin + "/front-end-mentor-challenges-showcase/" + image;
  }
  return (
    <div
      className={`hero-component flex ${
        direction ? "flex-row" : "flex-row-reverse"
      } justify-around items-center`}
    >
      <div>
        <h2 className="text-xl text-base md:text-xl lg:text-2xl mb-8 justify-self-center">
          {challenge.name}
        </h2>
        <a href={liveDemo} target="_blank">
          <div className={`flex items-center broswer-mockup-container`}>
            <Fade left={direction} right>
              <div className="browser-mockup flex">
                <img src={image} className="project-preview" alt="" />
              </div>
            </Fade>
          </div>
        </a>
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
