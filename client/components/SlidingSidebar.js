import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from './Slide';
import './SlidingSidebar.less'

class SlidingSidebar extends React.Component {
	constructor(props) {
		super(props);

		this.TOGGLE_SIDEBAR = 'toggle-sidebar';
		this.TOGGLE_SLIDE_NEXT = 'toggle-slide-next';
		this.TOGGLE_SLIDE_PREV = 'toggle-slide-prev';

		this.state = {
			transition: this.TOGGLE_SIDEBAR,
			slides: []
		}

		this._setSlide = this._setSlide.bind(this);
		this.openSidebar = this.openSidebar.bind(this);
		this.closeSidebar = this.closeSidebar.bind(this);
		this.getLastSlide = this.getLastSlide.bind(this);
		this.setNextSlide = this.setNextSlide.bind(this);
		this.setPrevSlide = this.setPrevSlide.bind(this);
	}

	_setSlide(slide, transition) {
		const slides = this.state.slides;
		const nextSlide = { 
			_id: slides.length,
			title: slide.title, 
			content: slide.content
		};

		this.setState({
			transition,
			slides: slides.concat(nextSlide)
		});
	}

	openSidebar(slide) {
		this._setSlide(slide, this.TOGGLE_SIDEBAR);
	}

	closeSidebar() {
		const transition = this.TOGGLE_SIDEBAR;
		this.setState({
			slides: [],
			transition
		});
	}

	getLastSlide() {
		const slides = this.state.slides;
		return slides.length > 0 ? slides[slides.length - 1] : null;
	}

	setNextSlide(slide) {
		this._setSlide(slide, this.TOGGLE_SLIDE_NEXT);
	}

	setPrevSlide() {}

	render() {
		const slide = this.getLastSlide();

		return (
			<div className="flyout-sidebar">
				<ReactCSSTransitionGroup 
          transitionName={this.state.transition} 
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={500}>
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
