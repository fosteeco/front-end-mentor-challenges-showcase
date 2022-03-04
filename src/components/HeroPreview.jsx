import React from "react";

function HeroPreview(props) {
  const { challenge } = props;
  const { name, repo, liveDemo, image } = challenge;
  return (
    <div>
      {challenge.name}
      <div class="flex items-center w-full mx-auto content-end">
        <div class="browser-mockup flex">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroPreview;
