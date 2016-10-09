import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slide from './Slide';
import './SlidingSidebar.less'

class SlidingSidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			slides: []
		}

		this.openSidebar = this.openSidebar.bind(this);
		this.closeSidebar = this.closeSidebar.bind(this);
		this.getCurrentSlide = this.getCurrentSlide.bind(this);
		this.setNextSlide = this.setNextSlide.bind(this);
		this.setPrevSlide = this.setPrevSlide.bind(this);
	}

	openSidebar(slide) {
		const { title, content } = slide;

		this.setState({
			slides: [{
				_id: 0,
				title,
				content
			}]
		});
	}

	closeSidebar() {
		this.setState({slides: []});
	}

	getCurrentSlide() {
		const slides = this.state.slides;
		return slides.length > 0 ? slides[slides.length - 1] : null;
	}

	setNextSlide(slide) {
		const { title, content } = slide;
		const slides = this.state.slides;
		const nextSlide = { 
			_id: slides.length,
			title, 
			content 
		};

		this.setState({
			slides: slides.concat(nextSlide)
		});
	}

	setPrevSlide() {}

	render() {
		const slide = this.getCurrentSlide();

		return (
			<div className="flyout-sidebar">
				<ReactCSSTransitionGroup 
          transitionName="sidebar-toggling" 
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
