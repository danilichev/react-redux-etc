import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from './Slide';
import './SlidingSidebar.less'

class SlidingSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.TRANSITION_TIMEOUT = 500;
    this.TRANSITION_TO_LEFT = 'transition-left';
    this.TRANSITION_TO_RIGHT = 'transition-right';

    this.state = {
    	isSidebarOpen: false,
      slides: [],
      slideTransition: this.TRANSITION_TO_RIGHT
    }

    this._getLastSlide = this._getLastSlide.bind(this);
    this._removeAllSlides = this._removeAllSlides.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.setNextSlide = this.setNextSlide.bind(this);
    this.setPrevSlide = this.setPrevSlide.bind(this);
  }

  _getLastSlide() {
    const slides = this.state.slides;
    return slides.length > 0 ? slides[slides.length - 1] : null;
  }

  _removeAllSlides() {
  	this.setState({
  		slides: [],
  		slideTransition: this.TRANSITION_TO_LEFT
  	});
  }

  openSidebar(slide) {
    this.setState({
    	isSidebarOpen: true,
    });

    this.setNextSlide(slide, this.TRANSITION_TO_RIGHT);
  }

  closeSidebar() {
  	this._removeAllSlides();

    setTimeout(() => this.setState({
    	isSidebarOpen: false
    }), this.TRANSITION_TIMEOUT);
  }

  setNextSlide(slide, slideTransition = this.TRANSITION_TO_LEFT) {
  	const slides = this.state.slides;
    const newSlide = Object.assign(slide, { _id: slides.length });

    this.setState({
    	slides: slides.concat(newSlide),
    	slideTransition
    });
  }

  setPrevSlide() {}

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
            <Slide 
              key={slide._id} 
              title={slide.title} 
              goBack={this.closeSidebar}>
              {slide.content}
            </Slide> : 
            null
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SlidingSidebar;
