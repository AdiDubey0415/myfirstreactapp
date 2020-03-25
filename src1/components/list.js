import React, { Component } from "react";
import ListItem from "./listitem";
import '../App.css';

class List extends Component {
  render() {
    return (
      <ul className={`${this.props.className} videosList`}>
        
        { 
          this.props.page === "videos"
          && this.props.videos
          && this.props.videos.map((val, index) => (
          <ListItem 
          getPlayingVideoId={this.props.getPlayingVideoId} 
          addVideoToBookmarks={this.props.addVideoToBookmarks}
          video={val} 
          index={index} 
          page={this.props.page} />
          )
          ) 
        }
        { 
          this.props.page === "played-videos"
          && this.props.videos
          && this.props.videos.map((val, index) => (
          <ListItem 
          getPlayingVideoId={this.props.getPlayingVideoId} 
          addVideoToBookmarks={this.props.addVideoToBookmarks}
          video={val} 
          index={index} 
          page={this.props.page} />
          )
          ) 
        }
        { 
          this.props.page === "bookmarked-videos"
          && this.props.videos
          && this.props.videos.map((val, index) => (
          <ListItem 
          getPlayingVideoId={this.props.getPlayingVideoId} 
          addVideoToBookmarks={this.props.addVideoToBookmarks}
          video={val} 
          index={index} 
          page={this.props.page} />
          )
          ) 
        }

      </ul>
    );    
  }
}

export default List;
