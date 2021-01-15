import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
import homeData from '../../data/home.json';

const cookies = new Cookies();

class BurgerMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="burgerMenuNavContainer">
                <div className="burgerContent">
                    <div className="linkBurgerContainer">
                        <Link className="navBurgerItem" to="/myWork">{homeData[cookies.get("lang")].nav[0].toUpperCase()}</Link>
                    </div>
                    <div className="linkBurgerContainer">
                        <Link className="navBurgerItem" to="/contact">{homeData[cookies.get("lang")].nav[1].toUpperCase()}</Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BurgerMenu;