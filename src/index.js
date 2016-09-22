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
    const that = this;
    this.setState = this.setState.bind(this);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'cats'}, function(videos) {
      that.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

//put component's HTML in DOM
ReactDom.render(<App />, document.querySelector('.container'))
