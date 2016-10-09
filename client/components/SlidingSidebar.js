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
	}

	openSidebar(title, content) {
		this.setState({
			slides: [{
				_id: 1,
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

	render() {
		const slide = this.getCurrentSlide();

		return (
			<div className="flyout-sidebar">
				<ReactCSSTransitionGroup 
          transitionName="example" 
          transitionEnterTimeout={1000} 
          transitionLeaveTimeout={1000}>
          {slide ? <Slide key={slide._id} title={slide.title}>{slide.content}</Slide> : null}
        </ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default SlidingSidebar;