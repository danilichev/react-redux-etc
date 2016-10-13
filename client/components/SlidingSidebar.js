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

const SlidingSidebarConfig = {
 	TIMEOUT: 4000,
 	transitions: {
 		OPEN: 'transition-open',
 		CLOSE: 'transition-close',
 		PUSH: 'transition-push',
 		POP: 'transition-pop'
 	}
}; 

class SlidingSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.actions = SlidingSidebarActions;
    this.timeout = SlidingSidebarConfig.TIMEOUT;
    this.transitions = SlidingSidebarConfig.transitions;

    this.state = {
    	slides: [],
    	transition: ''
    };

    this._popSlide = this._popSlide.bind(this);
    this._willToggleFewSlides = this._willToggleFewSlides.bind(this);
  }

  _pushSlide(slide) {
    const slides = this.state.slides;
    const newSlide = Object.assign(slide, { key: slides.length });

    this.setState({
    	slides: slides.concat(newSlide),
    	transition: slides.length === 0 ? this.transitions.OPEN : this.transitions.PUSH
    });
  }

  _popSlide() {
    const slides = this.state.slides.slice();

    if (slides.pop()) {
    	this.setState({ 
    		slides,
    		transition: slides.length === 0 ? this.transitions.CLOSE : this.transitions.POP
    	});
    }    
  }

  _getLastSlide() {
    const slides = this.state.slides;
    return slides.length > 0 ? slides[slides.length - 1] : null;
  }

  _cleanSlides() {
  	this.setState({
      slides: [],
      transition: this.transitions.CLOSE
    });
  }

  _willToggleFewSlides() {
  	return this.state.slides.length > 1 || this.state.transition === this.transitions.POP;
  }

  componentWillReceiveProps(nextProps) {
    const { action, nextSlide } = nextProps;
    const actions = this.actions;

    switch(action) {
      case actions.OPEN_SIDEBAR:
      case actions.SHOW_NEXT_SLIDE:
      	this._pushSlide(nextSlide);
      	break;    
      case actions.CLOSE_SIDEBAR:
        this._cleanSlides();
        break;  
      case actions.SHOW_PREV_SLIDE:
        this._popSlide();
        break;
    }
  }

  render() {
    const slide = this._getLastSlide();

    return (
     	<ReactCSSTransitionGroup
      	component="div"
      	className={`sliding-sidebar ${this._willToggleFewSlides() ? "few-slides" : ""}`}
        transitionName={this.state.transition} 
        transitionEnterTimeout={this.timeout} 
        transitionLeaveTimeout={this.timeout}>
        {slide ? <Slide {...slide} goBack={this._popSlide}>{slide.content}</Slide> : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export {
  SlidingSidebar,
  SlidingSidebarActions
};
