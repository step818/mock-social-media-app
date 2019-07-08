import React from "react";
import { Link } from 'react-router-dom';


function NavBar() {
  var styling = {
    border: '3px solid lightgray',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1px',
    width: '30%',
    letterSpacing: '0.6px',
    placeItems: 'center',
    fontSize: '15px',
    fontFamily: 'Montserrat',
  }
  return (
    <div style = {styling}>
      <Link to="/">Home</Link>
      <h3>Notifications</h3>
      <h3>Messages</h3>
      <hr></hr>
    </div>
  );
}

export default NavBar;