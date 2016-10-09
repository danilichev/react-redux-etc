import React from 'react';
import './Slide.less';

const Slide = (props) => (
	<div className="slide">
		<div 
      className="slide-header"
      onClick={props.goBack}>
			{props.title}
		</div>
		<div className="slide-content">
			{props.children}
		</div>
	</div>
);

export default Slide;