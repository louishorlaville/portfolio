import React from "react";
import {Route} from "react-router-dom"

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import ContentHome from "./components/pages/contentHome.jsx";
import ContentProjectList from "./components/pages/contentProjectList.jsx"

function App() {
  return (
    <div className="pageContainer">
      <Header/>
      <Route exact path="/" component={ContentHome}/>
      <Route path="/projects" component={ContentProjectList}/>
      <Footer/>
    </div>
  );
}

export default App;
