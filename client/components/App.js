import React from 'react';
import { SlidingSidebar, SlidingSidebarActions } from './SlidingSidebar.js';
import loremIpsum from '../data/lorem-ipsum.js';
import './App.less';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      action: null,
      nextSlide: null
    }
  }

  render() {
    const openSidebarButton = (
      <button 
        onClick={() => this.setState({
          action: SlidingSidebarActions.OPEN_SIDEBAR,
          nextSlide: {
            title: 'Slide#1',
            content: '...'
          }
        })}>
        Open Sidebar
      </button>
    );

    const closeSidebarButton = (
      <button onClick={() => this.setState({
          action: SlidingSidebarActions.CLOSE_SIDEBAR
        })}>
        Close Sidebar
      </button>
    );

    return (
      <div className="app">
        <div className="toggle-sidebar">
          {openSidebarButton}
          {closeSidebarButton}
        </div>
        <SlidingSidebar {...this.state}/>
      </div>
    );
  }
}

export default App;