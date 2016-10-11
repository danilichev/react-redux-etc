import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from './Slide';
import './SlidingSidebar.less';

const SlidingSidebarActions = {
  OPEN_SIDEBAR: 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_SIDEBAR'
}

class SlidingSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.TRANSITION_TIMEOUT = 300;
    this.TRANSITION_TO_LEFT = 'transition-left';
    this.TRANSITION_TO_RIGHT = 'transition-right';

    this.actionTypes = SlidingSidebarActions;

    this.state = {
      isSidebarOpen: false,
      slides: [],
      slideTransition: this.TRANSITION_TO_RIGHT
    }

    this._getLastSlide = this._getLastSlide.bind(this);
    this._openSidebar = this._openSidebar.bind(this);
    this._closeSidebar = this._closeSidebar.bind(this);
    this._showNextSlide = this._showNextSlide.bind(this);
  }

  _getLastSlide() {
    const slides = this.state.slides;
    return slides.length > 0 ? slides[slides.length - 1] : null;
  }

  _openSidebar(slide) {
    this.setState({
      isSidebarOpen: true,
    });

    this._showNextSlide(slide, this.TRANSITION_TO_RIGHT);
  }

  _closeSidebar() {
    this.setState({
      slides: [],
      slideTransition: this.TRANSITION_TO_LEFT
    });

    setTimeout(() => this.setState({
      isSidebarOpen: false
    }), this.TRANSITION_TIMEOUT);
  }

  _showNextSlide(slide, slideTransition = this.TRANSITION_TO_LEFT) {
    const slides = this.state.slides;
    const newSlide = Object.assign(slide, { key: slides.length });

    this.setState({
      slides: slides.concat(newSlide),
      slideTransition
    });
  }

  componentWillReceiveProps(nextProps) {
    const { action, nextSlide } = nextProps;
    const isSidebarOpen = this.state.isSidebarOpen;

    if (action === this.actionTypes.OPEN_SIDEBAR && !isSidebarOpen) {
      this._openSidebar(nextSlide);
    } else if (action === this.actionTypes.CLOSE_SIDEBAR && isSidebarOpen) {
      this._closeSidebar();
    }
  }

  render() {
    const slide = this._getLastSlide();

    return (
      <div className={`sliding-sidebar ${this.state.isSidebarOpen ? 'open' : ''}`}>
        <ReactCSSTransitionGroup
        	component="div"
        	className="slider-wrapper"
          transitionName={this.state.slideTransition} 
          transitionEnterTimeout={this.TRANSITION_TIMEOUT} 
          transitionLeaveTimeout={this.TRANSITION_TIMEOUT}>
          {slide ? 
            <Slide {...slide}>
              {slide.content}
            </Slide> : 
            null
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export {
  SlidingSidebar,
  SlidingSidebarActions
};
