import React from "react";

function HeroPreview(props) {
  const { challenge } = props;
  return <div>{challenge.name}</div>;
}

export default HeroPreview;
