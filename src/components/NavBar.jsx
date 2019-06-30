import React from "react";

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
      <h3>Home</h3>
      <h3>Notifications</h3>
      <h3>Messages</h3>
      <hr></hr>
    </div>
  );
}

export default NavBar;