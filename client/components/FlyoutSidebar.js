import React from 'react';

const FlyoutSidebar = (props) => {
	Object.assign(props, {isOpen: flase});

	const className = `flyout-sidebar ${props.isOpen ? "open" : "closed"}`;

	return (
		<div className={className}>
			<div className="flyout-sidebar-header">
				{props.sidebarName}
			</div>
			<div className="flyout-sidebar-content">
				Content
			</div>
		</div>
	);
};

export default FlyoutSidebar;