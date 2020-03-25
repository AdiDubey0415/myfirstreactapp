import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/input";
import List from "./components/list";
import VideoPlayer from "./components/video";
import axios from "axios";
const API_KEY = "AIzaSyDsUro2mrHwyIEP5SneV8x2ZC5JgXsR5Dg";

class App extends Component {
  state = {
    videos: [],
    playingVideoID: "",
    playedVideos: [],
    bookmarkedVideos: []
  }

  fetchVideos = (searchTerm) => {
    let request = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&maxResults=25&part=snippet&key=${API_KEY}`);
    request.then(response => {
      this.setState({
        videos: response.data.items
      });
    }).catch()
  }

  setVideoPlayer = (id, index) => {
    let videos = this.state.playedVideos.slice();
    let video = this.state.videos[index];
    videos.push(video);
    this.setState({
      playingVideoID: id,
      playedVideos: videos
    });
  }
  
  addVideoToBookmarks = (index) => {
    console.log("In app, bookmark index", index);
    let videos = this.state.bookmarkedVideos.slice();
    let video = this.state.videos[index];
    videos.push(video);
    this.setState({
      bookmarkedVideos: videos
    });
  }

  render() {
    return (
      <div className="App">

        <Input 
        className="input-class" 
        getSearchTerm={(searchTerm) => this.fetchVideos(searchTerm)} />

        <div className="page-wrapper">
          
          <List 
          className="width-30" 
          page="videos" 
          videos={this.state.videos} 
          getPlayingVideoId={(id, index) => this.setVideoPlayer(id, index)}
          addVideoToBookmarks={(index) => this.addVideoToBookmarks(index)} />
          
          <div className="width-100">
            
            <VideoPlayer 
            className="video-player"
            playingVideoID={this.state.playingVideoID} />
            
            <div className="played-bookmarked">
            
              <div className="width-40">
                PLAYED VIDEOS
                <List 
                page="played-videos" 
                getPlayingVideoId={(id, index) => this.setVideoPlayer(id, index)}
                videos={this.state.playedVideos} className="width-80" />
              </div>
            
              <div className="width-40">
                BOOKMARKED VIDEOS
                <List 
                className="width-80"
                getPlayingVideoId={(id, index) => this.setVideoPlayer(id, index)}
                videos={this.state.bookmarkedVideos}
                page="bookmarked-videos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
