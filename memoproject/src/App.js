import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from 'react-sidebar'


class App extends Component {

  constructor(){
    super();
    this.state = {sidebarOpen : false, sidebarDocked: false}
    
  }

  onSetSidebarOpen(open){
    this.setState({sidebarOpen: open});
  }

 /* componentWillMount(){
    var mql = window.matchMedia('(min-width: 800px)');
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount(){
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged(){
    this.state({sidebarDocked: this.state.mql.matches});
  }*/

  render() {
     var sidebarContent = <b>Sidebar content</b>;
    return (
        <div>
        <Sidebar sidebar={sidebarContent}
                open={this.state.sidebarOpen}
                /*docked={this.state.sidebarDocked}*/
                onSetOpen={this.onSetSidebarOpen}>
          <b>Main content</b>
        </Sidebar>
      </div>
    );
  }
}

export default App;