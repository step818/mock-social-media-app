import React from "react";

import YourThoughts from "./YourThoughts";
import Feed from "./Feed";

class FeedTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet) {
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  render() {
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
        render={() =><YourThoughts onNewTweetCreation={this.handleAddingNewTweetToList}/>}
        render={() =><Feed tweetList={this.state.masterTweetList}/>}
      </div>
    );
  }
}

export default FeedTable;