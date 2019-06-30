import React from "react";
import PropTypes from "prop-types";

function Tweet(props) {
  var tweetStyle = {
    display: 'grid',
    fontSize: '14px',
    float: 'left',
    placeItems: 'center',
    borderBottom: '1px solid gray',
  }
  return(
    <div style= {tweetStyle}>
      <h3>{props.name}</h3>
      <p>{props.tweet}</p>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired
};

export default Tweet;