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
 	TIMEOUT: 400,
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

    this.actionTypes = SlidingSidebarActions;
    this.timeout = SlidingSidebarConfig.TIMEOUT;
    this.transitions = SlidingSidebarConfig.transitions;

    this.state = {
    	isOpen: false,
    	slides: [],
    	transition: ''
    };

    this._pushSlide = this._pushSlide.bind(this);
    this._popSlide =this._popSlide.bind(this);
    this._getLastSlide = this._getLastSlide.bind(this);
    this._cleanSlides = this._cleanSlides.bind(this);
  }

  _pushSlide(slide) {
    const slides = this.state.slides;
    const newSlide = Object.assign(slide, { key: slides.length });

    this.setState({
    	isOpen: true,
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

  componentWillReceiveProps(nextProps) {
    const { action, nextSlide } = nextProps;
    const actions = this.actionTypes;

    switch(action) {
      case actions.OPEN_SIDEBAR:
      	!this.state.isOpen && this._pushSlide(nextSlide);    
      case actions.CLOSE_SIDEBAR:
        this.state.isOpen && this._cleanSlides();
        break;
      case actions.SHOW_NEXT_SLIDE:
        this._pushSlide(nextSlide);
        break;  
      case actions.SHOW_PREV_SLIDE:
        this._popSlide();
        break;
    }
  }

  componentDidUpdate(prevProps, prevState) {
  	console.log({prevState});

  	if (prevState.transition.CLOSE) {
  		this.setTimeout(() => this.setState({ isOpen: false}), this.timeout);
  	}
  }

  render() {
    const slide = this._getLastSlide();

    return (
      <div className={`sliding-sidebar ${this.state.isOpen ? 'open' : ''}`}>
        <ReactCSSTransitionGroup
        	component="div"
        	className="slider-wrapper"
          transitionName={this.state.transition} 
          transitionEnterTimeout={this.timeout} 
          transitionLeaveTimeout={this.timeout}>
          {slide ? <Slide {...slide} goBack={this._popSlide}>{slide.content}</Slide> : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export {
  SlidingSidebar,
  SlidingSidebarActions
};
