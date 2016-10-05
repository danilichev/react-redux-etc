
import React from 'react';  
import FlyoutSidebar from './FlyoutSidebar';

export default class App extends React.Component {  
  render() {
    return <FlyoutSidebar isOpen={true} sidebarName="firstSidebar" />;
  }
}