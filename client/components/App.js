import React from 'react';
import SlidingSidebar from './SlidingSidebar.js';
import loremIpsum from '../data/lorem-ipsum.js';
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className="app">
      <div className="toggle-sidebar">
        <button onClick={() => this.refs.sidebar.openSidebar('Title', 'Content')}>
          Open Sidebar
        </button>
        <button onClick={() => this.refs.sidebar.closeSidebar()}>
          Close Sidebar
        </button>
      </div>
      <SlidingSidebar ref="sidebar"/>
    </div>
  );
  }
}

export default App;