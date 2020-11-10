import React, { Component } from 'react';
import Logo from './logo.jsx';
import NavMenu from './navMenu.jsx';
import TimeHeader from './timeHeader.jsx';

class Header extends Component {
    render() { 
        return ( 
            <div className="headerContainer">
                <Logo/>
                <NavMenu/>
                <TimeHeader/>
            </div>
        );
    }
}
 
export default Header;