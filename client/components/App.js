import React from 'react';
import SlidingSidebar from './SlidingSidebar.js';
import loremIpsum from '../data/lorem-ipsum.js';
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const closeSidebarButton = (
      <button onClick={() => this.refs.sidebar.closeSidebar()}>
        Close Sidebar
      </button>
    );

    const openSidebarButton = (
      <button onClick={() => this.refs.sidebar.openSidebar(firstSlide)}>
        Open Sidebar
      </button>
    );

    const getShowSlideButton = (slide) => (
      <button onClick={() => this.refs.sidebar.showNextSlide(slide)}>
        {`Open ${slide.title}`}
      </button>
    )

    const thirdSlide = {
      title: 'Slide#3',
      content: closeSidebarButton
    };

    const secondSlide = {
      title: 'Slide#2',
      content: getShowSlideButton(thirdSlide)
    };

    const firstSlide = {
      title: 'Slide#1',
      goBack: () => this.refs.sidebar.closeSidebar(),
      content: getShowSlideButton(secondSlide)
    };

    return (
      <div className="app">
        <div className="toggle-sidebar">
          {openSidebarButton}
          {closeSidebarButton}
        </div>
        <SlidingSidebar ref="sidebar"/>
      </div>
    );
  }
}

export default App;