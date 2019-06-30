import React from "react";

import NavBar from "./NavBar";
import FeedTable from "./FeedTable";

function App() {
  var appStyles = {
    marginLeft: '50px',
    marginTop: '15px',
  }
  return(
    <div style={appStyles}>
      <NavBar/>
      <FeedTable/>
    </div>
    
  );
}

export default App;