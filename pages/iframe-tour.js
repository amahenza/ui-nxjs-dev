import React from "react";
import Iframe from "react-iframe";

const styles = {
  textAlign: "center"
};

const article_url =
  "https://wenzagroup.com/mahenza-assets/Mahenza%20Creative%20Logo-black.png";

const IframeTour = () => (
  <div style={styles}>
    <h2>Testing react-iframe</h2>
    <Iframe
      url={article_url}
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      width="100%"
      height="100%"
      scrolling="auto"
      allowfullscreen="allowfullscreen"
      mozallowfullscreen="mozallowfullscreen"
      msallowfullscreen="msallowfullscreen"
      oallowfullscreen="oallowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen"
    />
  </div>
);

export default IframeTour;
