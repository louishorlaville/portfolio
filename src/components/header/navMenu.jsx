import React, { Component } from 'react';

class NavMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navMenuContainer">
                <a className ="navElement" id="myWorkNav">//MY WORK</a>
                <a className ="navElement" id="aboutNav">/ABOUT</a>
            </div>
        );
    }
}
 
export default NavMenu;