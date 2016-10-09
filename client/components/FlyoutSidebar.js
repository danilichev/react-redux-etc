import React from 'react';
import Slide from './Slide';

class FlyoutSidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			slides: []
		}

		this.toggleSidebar = this.toggleSidebar.bind(this);
	}

	toggleSidebar() {
		const slide = <Slide slideName="second slide">very important content</Slide>;
		this.setState({
			slides: [{
				slideName: 'some slide',
				content: slide
			}]
		});
	}

	render() {
		const slides = this.state.slides.map((item, id) => (
			<Slide key={id} slideName={item.slideName}>{item.content}</Slide>
		));

		return (
			<div className="flyout-sidebar">
				{slides}
			</div>
		);
	}
}

export default FlyoutSidebar;