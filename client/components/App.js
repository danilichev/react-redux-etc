
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlyoutSidebar from './FlyoutSidebar.js';
import loremIpsum from '../data/lorem-ipsum.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
    	<div className="app">
    		<button 
    			className="toggle-sidebar"
    			onClick={() => this.refs.sidebar.toggleSidebar()}
    		>
    			Show/hide Sidebar
    		</button>
    		<FlyoutSidebar ref="sidebar"/>
    	</div>
    );
  }
}

export default App;