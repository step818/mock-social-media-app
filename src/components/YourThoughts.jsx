import React from "react";
import PropTypes from 'prop-types';

function YourThoughts(props) {
  var yourThoughtsStyles = {
    display: 'grid',
    backgroundColor: 'lightblue',
    height: '60px',
    padding: '0px',
    margin: '0px',
  }

  let _name='Stephen';
  let _tweet=null;

  function handleNewTweetFormSubmission(e) {
    e.preventDefault();
    props.onNewTweetCreation({name:__name.value, tweet:_tweet.value});
    _name.value= 'Stephen';
    _tweet.value= '';
  }

  return(
    <form style={yourThoughtsStyles} onSubmit={handleNewTweetFormSubmission}>
      <label>
        <input type="text" name="tweet" placeholder="What's happening?"
        ref={(input) => {_tweet = input;}} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    
  );
}

YourThoughts.propTypes = {
  onNewTweetCreation:PropTypes.func
};

export default YourThoughts;