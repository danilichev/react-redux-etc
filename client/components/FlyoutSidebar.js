import React from 'react';

const FlyoutSidebar = (props) => (
	<div className="flyout-sidebar">
		<div className="flyout-sidebar-header">
			{props.sidebarName}
		</div>
		<div className="flyout-sidebar-content">
			{props.children}
		</div>
	</div>
); 

export default FlyoutSidebar;