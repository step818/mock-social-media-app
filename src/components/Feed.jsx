import React from "react";
import PropTypes from 'prop-types';
import ThoughtFormat from './ThoughtFormat';

function Feed(props) {
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
      {props.tweetList.map((thought,index) => <ThoughtFormat name={thought.name} tweet=       {thought.tweet} key={index} />
      )}
    </div>
  );
}

Feed.propTypes = {
  tweetLlist: PropTypes.array
};

export default Feed;