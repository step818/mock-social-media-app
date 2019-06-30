import React from "react";

import NavBar from "./NavBar";

function App() {
  var appStyles = {
    marginLeft: '50px',
    marginTop: '15px',
  }
  return(
    <div style={appStyles}>
      <NavBar/>
    </div>
  );
}

export default App;