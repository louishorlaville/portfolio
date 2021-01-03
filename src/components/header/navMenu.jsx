import React, { Component } from 'react';

class NavMenu extends Component {
    state = { 
        over1:false,
        over2:false
    };

    

    render() { 
        return ( 
            <div className="navMenuContainer headerItems">
                <a className ="navElements" id="myWorkNav" href="#">//MY WORK</a>
                <a className ="navElements" id="aboutNav" href="#">//ABOUT</a>               
            </div> 
        )        
    };
    
}
 
export default NavMenu;