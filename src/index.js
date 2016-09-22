import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAkULVvoDtRA45aPYrUFj40knzLfymBp3Y';

//create component
class App extends Component {
  constructor(props) {
    super(props);
    // const that = this;
    this.setState = this.setState.bind(this);
    this.videoSearch = this.videoSearch.bind(this);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cats');
  }

  videoSearch = (term) => {
    const that = this;
    YTSearch({key: API_KEY, term: term}, function(videos) {
      that.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
      <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}/>
      </div>
    )
  }
}

//put component's HTML in DOM
ReactDom.render(<App />, document.querySelector('.container'))
