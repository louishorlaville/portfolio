import React, { Component } from "react";
import {Route} from "react-router-dom"

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import ContentHome from "./components/pages/contentHome.jsx";
import ContentProjectList from "./components/pages/contentProjectList.jsx"
import ContentProjectProfile from "./components/pages/contentProjectProfile.jsx"

class App extends Component{
  state={
    langData:""
  }

  callBackFunction =(childData)=>{
    this.setState({langData:childData});
    console.log(childData);
  }

  render(){
    return (
      <div className="pageContainer">
        <Header parentCallback={this.callBackFunction} />
        <Route exact path="/" render={(props)=>(<ContentHome {...props} langData={this.state.langData}/>)}/>
        <Route path="/projects" render={(props)=>(<ContentProjectList {...props} langData={this.state.langData}/>)}/>
        <Route path="/projectProfile" component={ContentProjectProfile}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
