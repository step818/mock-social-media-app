import React from "react";


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
      <hr/>
      <p>This is feed</p>
    </div>
  );
}



export default Feed;