import React, { Component } from 'react';
import homeData from "../../data/home.json"
import ContactEmail from "../contact/contactEmail.jsx";
import ContactLinks from "../contact/contactLinks.jsx";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class ContentContact extends Component {
    state = {  }

    componentDidMount(){
        console.log(window.scrollY);
        if(window.scrollY<=0){
            cookies.set("scroll",false);
        }
        else{
            cookies.set("scroll",true);
        }
        
    }
    render() { 
        return (
            <div className="contentContainer">
                <div className="contactContainer">
                    <div className="contactTitleContainer">
                        <div className="contactTitle">//{homeData[cookies.get("lang")].nav[1].toUpperCase()}</div>
                    </div>
                    <ContactEmail/>
                    <ContactLinks/>
                </div>
            </div>
        );
    }
}
 
export default ContentContact;