import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavMenu extends Component {
    state = { 
        over1:false,
        over2:false
    };

    render() { 
        return ( 
            <div className="navMenuContainer headerItems">
                <Link className ="navElements" id="myWorkNav" to="/">//MY WORK</Link>
                <Link className ="navElements" id="aboutNav" to="/">//ABOUT</Link>              
            </div> 
        )        
    };
    
}
 
export default NavMenu;