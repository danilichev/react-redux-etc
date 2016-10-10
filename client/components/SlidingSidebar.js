import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from './Slide';
import './SlidingSidebar.less'

class SlidingSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.TRANSITION_TIMEOUT = 300;
    this.TRANSITION_TO_LEFT = 'transition-left';
    this.TRANSITION_TO_RIGHT = 'transition-right';

    this.state = {
    	isSidebarOpen: false,
      slides: [],
      slideTransition: this.TRANSITION_TO_RIGHT
    }

    this._getLastSlide = this._getLastSlide.bind(this);
    // this._removeAllSlides = this._removeAllSlides.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.showNextSlide = this.showNextSlide.bind(this);
    this.showPrevSlide = this.showPrevSlide.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  _getLastSlide() {
    const slides = this.state.slides;
    return slides.length > 0 ? slides[slides.length - 1] : null;
  }

  openSidebar(slide) {
    this.setState({
    	isSidebarOpen: true,
    });

    this.showNextSlide(slide, this.TRANSITION_TO_RIGHT);
  }

  closeSidebar() {
  	this.setState({
  		slides: [],
  		slideTransition: this.TRANSITION_TO_LEFT
  	});

  	this.setTimeout(() => this.setState({
  		isSidebarOpen: false
  	}), this.TRANSITION_TIMEOUT);
  }

  showNextSlide(slide, slideTransition = this.TRANSITION_TO_LEFT) {
  	const slides = this.state.slides;
    const newSlide = Object.assign(slide, { key: slides.length });

    this.setState({
    	slides: slides.concat(newSlide),
    	slideTransition
    });
  }

  showPrevSlide() {
  	const slides = this.state.slides.slice();
  	slides.pop();

    this.setState({
    	slides,
    	slideTransition: this.TRANSITION_TO_RIGHT 
    });
  }

  goBack() {
  	this.state.slides.length > 1 ? this.showPrevSlide() : this.closeSidebar();
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
            <Slide {...slide} goBack={this.goBack}>
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
