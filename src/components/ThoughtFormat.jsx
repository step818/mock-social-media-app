import React from 'react';
import PropTypes from 'prop-types';

function ThoughtFormat(props) {
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.tweet}</p>
    </div>
  );
}

ThoughtFormat.propTypes = {
  name: 'Stephen',
  tweet: PropTypes.string.isRequired
};

export default ThoughtFormat;