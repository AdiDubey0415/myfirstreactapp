import React, { Component } from "react";
import '../App.css';

class ListItem extends Component {
  render() {
    console.log("Listitem ==>", this.props.video);
    const { video, index } = this.props;
    return (
      <li className={`listItem`} >
        {
          this.props.page === "videos" && (
          <div>
            <div className={`video-img-div`} onClick={() => this.props.getPlayingVideoId(video.id.videoId, index)}>
              <img src={video.snippet.thumbnails.default.url} alt="" />
            </div>
            <div>
              {video.snippet.title}
              <div>
                <button onClick={() => this.props.addVideoToBookmarks(index)}>Add to Bookmarks</button>
              </div>
            </div>
          </div>
          )
        }
        {
          this.props.page === "played-videos" && (
          <div>
            <div className={`video-img-div`} onClick={() => this.props.getPlayingVideoId(video.id.videoId, index)}>
              <img src={video.snippet.thumbnails.default.url} alt="" />
            </div>
            <div>
              {video.snippet.title}
              <div>
                <button onClick={() => this.props.addVideoToBookmarks(index)}>Add to Bookmarks</button>
                <button>Remove from played videos</button>
              </div>
            </div>
          </div>
          )
        }
        {
          this.props.page === "bookmarked-videos" && (
          <div>
            <div className={`video-img-div`} onClick={() => this.props.getPlayingVideoId(video.id.videoId, index)}>
              <img src={video.snippet.thumbnails.default.url} alt="" />
            </div>
            <div>
              {video.snippet.title}
              <div>
                <button onClick={() => this.props.addVideoToBookmarks(index)}>Remove from Bookmarks</button>
              </div>
            </div>
          </div>
          )
        }
      </li>
    );    
  }
}

export default ListItem;
