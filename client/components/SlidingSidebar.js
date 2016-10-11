import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from './Slide';
import './SlidingSidebar.less';

const SlidingSidebarActions = {
  OPEN_SIDEBAR: 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_SIDEBAR',
  SHOW_NEXT_SLIDE: 'SHOW_NEXT_SLIDE',
  SHOW_PREV_SLIDE: 'SHOW_PREV_SLIDE'
};

const transitionConfig = {
 	TIMEOUT: 300,
 	TO_LEFT: 'transition-left',
 	TO_RIGHT: 'transition-right'
}; 

class SlidingSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.actionTypes = SlidingSidebarActions;
    this.transition = transitionConfig;

    this.state = {
    	slides: [],
    	slideTransition: this.transition.TO_RIGHT
    };

    this._pushSlide = this._pushSlide.bind(this);
    this._popSlide =this._popSlide.bind(this);
    this._getLastSlide = this._getLastSlide.bind(this);
    this._cleanSlides = this._cleanSlides.bind(this);
    this._isSidebarOpen = this._isSidebarOpen.bind(this);
  }

  _pushSlide(slide) {
    const slides = this.state.slides;
    const newSlide = Object.assign(slide, { key: slides.length });

    this.setState({ 
    	slides: slides.concat(newSlide),
    	slideTransition: slides.length === 0 ? this.transition.TO_RIGHT : this.transition.TO_LEFT
    });
  }

  _popSlide() {
    const slides = this.state.slides.slice();
    slides.pop();

    this.setState({ 
    	slides,
    	slideTransition: slides.length === 0 ? this.transition.TO_LEFT : this.transition.TO_RIGHT
    });
  }

  _getLastSlide() {
    const slides = this.state.slides;
    return slides.length > 0 ? slides[slides.length - 1] : null;
  }

  _cleanSlides() {
  	this.setState({
      slides: [],
      slideTransition: this.transition.TO_LEFT
    });
  }

  _isSidebarOpen() {
  	return this.state.slides.length > 0;
  }

  componentWillReceiveProps(nextProps) {
    const { action, nextSlide } = nextProps;
    const actions = this.actionTypes;
    const isSidebarOpen = this._isSidebarOpen();

    switch(action) {
      case actions.OPEN_SIDEBAR:
        !isSidebarOpen && this._pushSlide(nextSlide);
        break;    
      case actions.CLOSE_SIDEBAR:
        isSidebarOpen && this._cleanSlides();
        break;
      case actions.SHOW_NEXT_SLIDE:
        isSidebarOpen && this._pushSlide(nextSlide);
        break;
      case actions.SHOW_PREV_SLIDE:
        isSidebarOpen && this._popSlide();
        break;
    }
  }

  render() {
    const slide = this._getLastSlide();

    return (
      <div className={`sliding-sidebar ${this._isSidebarOpen() ? 'open' : 'close'}`}>
        <ReactCSSTransitionGroup
        	component="div"
        	className="slider-wrapper"
          transitionName={this.state.slideTransition} 
          transitionEnterTimeout={this.transition.TIMEOUT} 
          transitionLeaveTimeout={this.transition.TIMEOUT}>
          {slide ? <Slide {...slide}>{slide.content}</Slide> : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export {
  SlidingSidebar,
  SlidingSidebarActions
};
