import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);

    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}/>
        <div>
          Search term: {this.state.term}
        </div>
      </div>
    );
  }
}

export default SearchBar;
