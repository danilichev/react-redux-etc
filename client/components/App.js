
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlyoutSidebar from './FlyoutSidebar.js';
import loremIpsum from '../data/lorem-ipsum.js';

import './App.less';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		}

		this.addItem = this.addItem.bind(this);
	}  

	addItem() {
		const newItems = this.state.items.concat('Sidebar'); 
		this.setState({
			items: newItems
		})
	}

  render() {
  	const items = this.state.items.map((item, i) => (
  		<FlyoutSidebar key={i} sidebarName={item}>{loremIpsum}</FlyoutSidebar>
  	));

    return (
    	<div>
    		<button onClick={this.addItem}>Add item</button>
    		<ReactCSSTransitionGroup
      		transitionName="example"
      		transitionEnterTimeout={500}
      		transitionLeaveTimeout={500}
      	>
      		{items}	
      	</ReactCSSTransitionGroup>
    	</div>
    );
  }
}

export default App;