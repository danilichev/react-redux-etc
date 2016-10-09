import React from 'react';
import SlidingSidebar from './SlidingSidebar.js';
import loremIpsum from '../data/lorem-ipsum.js';
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const secondSlide = {
      title: 'Slide#2',
      content: 'Bingo!'
    };

    const firstSlide = {
      title: 'Slide#1',
      content: <button onClick={() => this.refs.sidebar.setNextSlide(secondSlide)}>Show new slide</button>
    };

    return (
      <div className="app">
        <div className="toggle-sidebar">
          <button onClick={() => this.refs.sidebar.openSidebar(firstSlide)}>
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