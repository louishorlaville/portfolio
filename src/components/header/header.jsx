import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Logo from './logo.jsx';
import NavMenu from './navMenu.jsx';
import TimeHeader from './timeHeader.jsx';
import '../../css/style.css';

const cookies = new Cookies();

class Header extends Component {
    state={
        langData:""
    };

    componentWillMount(){
        console.log(cookies.get("lang"));
        if(!cookies.get("lang")){
            cookies.set("lang","en");
        }
    }

    callBackFunction =(childData)=>{
        this.setState({langData:childData});
        this.props.parentCallback(childData);
    }

    render() { 
        return ( 
            <div className="headerContainer">
                <Logo/>
                <NavMenu />
                <TimeHeader parentCallback={this.callBackFunction}/>
            </div>
        );
    }
}
 
export default Header;