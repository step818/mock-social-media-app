import React from "react";
import { Switch, Route } from 'react-router-dom';

import NavBar from "./NavBar";
import FeedTable from "./FeedTable";
import Error404 from "./Error404";


function App() {
  var appStyles = {
    marginLeft: '50px',
    marginTop: '15px',
  }
  return(
    <div style={appStyles}>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={FeedTable} />
        <Route component={Error404}/>
      </Switch>
    </div>
    
  );
}

export default App;