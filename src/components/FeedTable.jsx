import React from "react";

import YourThoughts from "./YourThoughts";
import Feed from "./Feed";

function FeedTable(){

    var feedTableStyles = {
      display: 'grid',
      border: '1px solid gray',
      width: '50%',
      height: '1000px',
      textAlign: 'center',
      marginLeft: '25%',
      marginTop: '2%',
    }
  
    return(
      <div style={feedTableStyles}>
        <YourThoughts/>
        <Feed/>
      </div>
    );
  }


export default FeedTable;