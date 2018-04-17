import React, { Component } from 'react';
import './App.css';
import { SearchBar } from "./components/SearchBar";
import { SearchedItem } from "./components/SearchedItem"
import { getSearchedVideos } from "./services/searchVideos";
import { PlayingVideo } from "./components/PlayingVideo";
import { WatchedVideo } from "./components/WatchedVideo";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      firstOfSearched: "L3wKzyIN1yk",
      searchedSix: [],
      watchedVideos: ["L3wKzyIN1yk"]
    }

  }

  goGetSearchedVideos = () => {
    getSearchedVideos(this.state.searchValue)
      .then((response) => {
        this.setState({
          firstOfSearched: response.items[0].id.videoId,
          searchedSix: response.items
        })
      })
  }

  getSearchInputValue = (event) => {
    let data = event.target.value;
    this.setState({
      searchValue: data
    })
    this.goGetSearchedVideos()
  }

  searchedShortcut = (event) => {
    let data = event.target.getAttribute("data-videoId")
    this.state.watchedVideos.push(data)
    this.setState({
      firstOfSearched: data,
    })
  }


  render() {
    return (
      <div className="col-xs-8 offset-xs-2 col-md-8 offset-md-2">
        <div className="row">
          <div className="col-xs-8 col-md-4 offset-xs-2 offset-md-8 p-2">
            <SearchBar appGoGetSearchedVideos={this.goGetSearchedVideos} appStateSearchValue={this.state.searchValue} appSetStateSearchValue={this.getSearchInputValue} />
          </div>
          {this.state.searchedSix.map((element) => {
            return <SearchedItem appSearchedUrl={element.snippet.thumbnails.default.url} appSearchedShortcutUrl={element.id.videoId} appSearchedShortcut={this.searchedShortcut} />
          })}
          <div className="col-xs-12 col-md-8 mt-5">
            <PlayingVideo appFirstOfSearched={this.state.firstOfSearched} />
            <div className="row">
              {this.state.watchedVideos.map((element,index) => {
                return <WatchedVideo appWatchedVideo={element} key={index} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
