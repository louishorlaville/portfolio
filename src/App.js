import React, { Component } from "react";
import {Route} from "react-router-dom"

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import ContentHome from "./components/pages/contentHome.jsx";
import ContentProjectList from "./components/pages/contentProjectList.jsx"
import ContentProjectProfile from "./components/pages/contentProjectProfile.jsx"
import ContentMyWork from "./components/pages/contentMyWork.jsx"
import ContentContact from "./components/pages/contentContact.jsx"
import Cookies from 'universal-cookie';

import "./css/style.css"
const cookies = new Cookies();
class App extends Component{
  state={
    langData:"",
    scroll:true
  }

  callBackFunctionLang =(childData)=>{
    this.setState({langData:childData});
  }


  render(){
    {console.log()}
    return (
      <div className="pageContainer">
        <Header parentCallback={this.callBackFunctionLang} />
        <Route exact path="/" component={ContentHome} />
        <Route path="/projects" component={ContentProjectList}/>
        <Route path="/projectProfile" component={ContentProjectProfile} />
        <Route path="/contact" component={ContentContact} />
        <Route path="/myWork"  component={ContentMyWork}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
