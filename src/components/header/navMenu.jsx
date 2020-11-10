import React, { Component } from 'react';

class NavMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navMenuContainer headerItems">
                <a className ="navElements" id="myWorkNav">//MY WORK</a>
                <a className ="navElements" id="aboutNav">//ABOUT</a>
            </div>
        );
    }
}
 
export default NavMenu;