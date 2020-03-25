import React, { Component } from "react";

class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <iframe className={this.props.className} width="420" height="315" title="Youtube video"
        src={`https://www.youtube.com/embed/${this.props.playingVideoID}`}>
        </iframe>
      </div>
    );    
  }
}

export default VideoPlayer;
