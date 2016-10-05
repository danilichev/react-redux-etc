import React from 'react';

class FlyoutSidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: props.isOpen,
			boo: "Boo!"
		};

		this.changeOpenState = this.changeOpenState.bind(this);
		this.getClassName = this.getClassName.bind(this);
	}	

	changeOpenState() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	getClassName() {
		return `flyout-sidebar ${this.state.isOpen ? "open" : "closed"}`;
	}

	render() {
		return (
			<div className={this.getClassName()}>
				<div 
					className="flyout-sidebar-header"
					onClick={this.changeOpenState}>
					{this.props.sidebarName}
				</div>
				<div className="flyout-sidebar-content">
					{this.props.children}
				</div>
			</div>
		);
	}
};

export default FlyoutSidebar;