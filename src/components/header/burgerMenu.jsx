import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
import homeData from '../../data/home.json';

const cookies = new Cookies();

class BurgerMenu extends Component {
    state = { 
        burgerState:this.props.state
     }

    handleCloseBurger=(e)=>{
        this.props.callBackClose(e);
    }

    componentDidMount() {
        
    }

    languageSwitchHandler=(e)=>{
        /*Check if active language is the same as user clicked*/
        e.target.classList.add("selectedLang");
        if(e.target.id!=cookies.get("lang")){
            if(e.target.id==="fr"){
                cookies.set("lang","fr");
                e.target.parentElement.children[0].classList.remove("selectedLang");
            }
            else{
                cookies.set("lang","en");
                e.target.parentElement.children[1].classList.remove("selectedLang");
            }
            this.sendData();
        }

    }
    sendData = () =>{
        this.props.callBackLang(cookies.get("lang"));
    }

    render() { 
        return ( 
            <div className="burgerMenuNavContainer">
                <div className="burgerContent">
                    <div className="burgerNavContainer">
                        <div className="linkBurgerContainer">
                            <Link onClick={(e)=>this.handleCloseBurger(e)} className="navBurgerItem" to="/myWork">{homeData[cookies.get("lang")].nav[0].toUpperCase()}</Link>
                        </div>
                        <div className="linkBurgerContainer">
                            <Link onClick={(e)=>this.handleCloseBurger(e)} className="navBurgerItem" to="/contact">{homeData[cookies.get("lang")].nav[1].toUpperCase()}</Link>
                        </div>
                    </div>
                </div>
                <div className="burgerLangContainer">
                    <div className="timeItem" id="timeLanguage">
                        <span className={(cookies.get("lang")=="en")?"languageItem selectedLang":"languageItem"} id="en" onClick={((e)=>this.languageSwitchHandler(e))}>English </span> 
                        // 
                        <span className={(cookies.get("lang")=="fr")?"languageItem selectedLang":"languageItem"} id="fr" onClick={((e)=>this.languageSwitchHandler(e))}> Français</span>
                        <div className={(cookies.get("lang")=="fr")?"frSelected":"enSelected"} id="selectedLanguageBackground">&#10240;</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BurgerMenu;