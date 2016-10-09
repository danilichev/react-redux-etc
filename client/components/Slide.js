import React from 'react';

const Slide = (props) => (
	<div className="slide">
		<div className="slide-header">
			{props.slideName}
		</div>
		<div className="slide-content">
			{props.children}
		</div>
	</div>
); 

export default Slide;