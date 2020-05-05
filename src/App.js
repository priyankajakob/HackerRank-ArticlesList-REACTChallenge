import React, { Component } from 'react';
import './App.css';

import Articles from './components/Articles';
import List from './components/List'
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Lists of Articles</h3>
          <p>
          <List/>
          </p>
        </div>
        <hr/>
        <div>
          <h3>Lists of Articles by Author (Search)</h3>
          <p>
          <Articles/>
          </p>
        </div>
        </div>
    );
  }
}

export default App;
