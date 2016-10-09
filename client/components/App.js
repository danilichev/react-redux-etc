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
      <button 
        className="toggle-sidebar"
        onClick={() => this.refs.sidebar.openSidebar('Title', 'Content')}>
        Show/hide Sidebar
      </button>
      <SlidingSidebar ref="sidebar"/>
    </div>
  );
  }
}

export default App;