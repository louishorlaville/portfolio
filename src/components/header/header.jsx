import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Logo from './logo.jsx';
import NavMenu from './navMenu.jsx';
import TimeHeader from './timeHeader.jsx';
import BurgerMenuContent from './burgerMenu.jsx';

import '../../css/style.css';

const cookies = new Cookies();

class Header extends Component {
    state={
        langData:"",
        burgerState:0
    };

    UNSAFE_componentWillMount=()=>{
        console.log(cookies.get("lang"));
        if(!cookies.get("lang")){
            cookies.set("lang","en");
        }
    }

    callBackFunction =(childData)=>{
        this.setState({langData:childData});
        this.props.parentCallback(childData);
    }

    toggleBurger = (e) =>{
        let currentState = this.state.burgerState;
        if(currentState===0 &&  e.target.classList.contains("burgerMenuBar")){
            e.target.parentElement.parentElement.classList.add("burgerActive");
            document.body.style.overflowY = "hidden"
            this.setState({burgerState:1});
        }
        else{
            e.target.parentElement.parentElement.classList.remove("burgerActive");
            document.body.style.overflowY = "auto"
            this.setState({burgerState:0});
        }
    }

    closeBurger=(e)=>{
        console.log(e);
        e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("burgerActive");
        this.setState({burgerState:0});
    }

    render() { 
        return ( 
            <div className="headerContainer">
                <Logo/>
                <div className="headerRightSide">
                    <NavMenu />
                    <TimeHeader parentCallback={this.callBackFunction}/>
                </div>
                <div className="burgerMenuContainer" onClick={((e)=>this.toggleBurger(e))}>
                    <div className="burgerMenuBox">
                        <div className="burgerMenuBar">&#10240;</div>
                        <div className="burgerMenuBar">&#10240;</div>
                        <div className="burgerMenuBar">&#10240;</div>
                    </div>
                    <BurgerMenuContent callBackClose={(e)=>this.closeBurger(e)} callBackLang={this.callBackFunction}/>
                </div>
                
            </div>
        );
    }
}
 
export default Header;