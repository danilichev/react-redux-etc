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
    const closeSidebarButton = (
      <button onClick={() => this.setState({
          action: SlidingSidebarActions.CLOSE_SIDEBAR
        })}>
        Close Sidebar
      </button>
    );

    const getButtomToNextSlide = (nextSlide) => (
      <button onClick={() => this.setState({
          action: SlidingSidebarActions.SHOW_NEXT_SLIDE,
          nextSlide
        })}>
        {`Go to ${nextSlide.title}`}
      </button>
    );

    const thirdSlide = {
      title: 'Slide 3',
      content: closeSidebarButton
    }

    const secondSlide = {
      title: 'Slide 2',
      content: getButtomToNextSlide(thirdSlide)
    }    

    const firstSlide = {
      title: 'Slide 1',
      content: getButtomToNextSlide(secondSlide)
    }

    const openSidebarButton = (
      <button 
        onClick={() => this.setState({
          action: SlidingSidebarActions.OPEN_SIDEBAR,
          nextSlide: firstSlide
        })}>
        Open Sidebar
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