import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
import homeData from '../../data/home.json';

const cookies = new Cookies();

class NavMenu extends Component {
    state = { 
        
    };

    render() { 
        return ( 
            <div className="navMenuContainer headerItems">
                <Link className ="navElements" id="myWorkNav" to={{pathname:"/portfolio/myWork"}}>//{homeData[cookies.get("lang")].nav[0].toUpperCase()}</Link>
                <Link className ="navElements" id="contactNav" to={{pathname:"/portfolio/contact"}}>//{homeData[cookies.get("lang")].nav[1].toUpperCase()}</Link>              
            </div> 
        )        
    };
    
}
 
export default NavMenu;