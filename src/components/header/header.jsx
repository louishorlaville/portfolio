import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Logo from './logo.jsx';
import NavMenu from './navMenu.jsx';
import TimeHeader from './timeHeader.jsx';
import BurgerMenuContent from './burgerMenu.jsx';

const cookies = new Cookies();

class Header extends Component {
    state={
        langData:"",
        burgerState:0
    };

    UNSAFE_componentWillMount=()=>{
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
        if(e.target.classList.contains("burgerMenuBar")){
            if(currentState===0){
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
        else if(e.target.classList.contains("burgerMenuBox")){
            if(currentState===0){
                e.target.parentElement.classList.add("burgerActive");
                document.body.style.overflowY = "hidden"
                this.setState({burgerState:1});
            }
            else{
                e.target.parentElement.classList.remove("burgerActive");
                document.body.style.overflowY = "auto"
                this.setState({burgerState:0});
            }
        }
    }

    closeBurger=(e)=>{
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("burgerActive");
        document.body.style.overflowY = "auto";
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
                    <BurgerMenuContent state={this.state.burgerState} callBackClose={(e)=>this.closeBurger(e)} callBackLang={this.callBackFunction}/>
                </div>
                
            </div>
        );
    }
}
 
export default Header;