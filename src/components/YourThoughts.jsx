import React from "react";

function YourThoughts() {
  var yourThoughtsStyles = {
    display: 'grid',
    backgroundColor: 'lightblue',
    height: '60px',
    padding: '0px',
    margin: '0px',
  }
  return(
    <form style= {yourThoughtsStyles}>
      <label>
        <input type="text" name="tweet" placeholder="What's happening?" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    
  );
}

export default YourThoughts;