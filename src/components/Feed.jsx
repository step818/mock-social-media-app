import React from "react";
import Tweet from "./Tweet";

function Feed() {
  var feedStyle = {
    display: 'grid',
    border: '1px solid blue',
    width: '80%',
    height: '800px',
    marginLeft: '10%',
  }
  return(
    <div style={feedStyle}>
      <p>
        <Tweet
          name="Veronika"
          tweet="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
      </p>
    </div>
  );
}

export default Feed;