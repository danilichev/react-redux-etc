import React from 'react';
import Slide from './Slide';
import './SlidingSidebar.less'

class SlidingSidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			slides: []
		}

		this.openSidebar = this.openSidebar.bind(this);
		this.getCurrentSlide = this.getCurrentSlide.bind(this);
	}

	openSidebar(title, content) {
		this.setState({
			slides: [{
				title,
				content
			}]
		});
	}

	getCurrentSlide() {
		const slides = this.state.slides;
		return slides.length > 0 ? slides[slides.length - 1] : null;
	}

	render() {
		const slide = this.getCurrentSlide();

		console.log({slide});

		return (
			<div className="flyout-sidebar">
				{slide ? <Slide title={slide.title}>{slide.content}</Slide> : null}
			</div>
		);
	}
}

export default SlidingSidebar;