
import React from 'react';  
import FlyoutSidebar from './FlyoutSidebar';
import loremIpsum from '../data/lorem-ipsum.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFlyoutOpen: false
		}

		this.openFlyout = this.openFlyout.bind(this);
	}  

	openFlyout() {
		this.refs.flyout.changeOpenState();
	}

  render() {
    return (
    	<div>
    		<button onClick={this.openFlyout}>Open Flyout</button>
    		<FlyoutSidebar ref="flyout" isOpen={this.state.isFlyoutOpen} sidebarName="firstSidebar">
    			{loremIpsum}
    		</FlyoutSidebar>
    	</div>
    );
  }
}

export default App;