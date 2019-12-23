import React, { Component } from 'react';
import DataList from './components/DB'
import './App.css';
import Search from './components/Search'; 
import HomePage from './components/HomePage';
import axios from 'axios'
import { Button ,Card} from 'react-bootstrap';

import Footer from './components/Footer'
import { BrowserRouter as Router, Route, HashRouter, Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {



  render() {

    return (
  
     <HashRouter> 
 
   
<div className="b"> 




 <Route exact path="/" component={HomePage}  /> 
 <Route exact path="/Search" component={Search} />  
 <Route exact path="/Map" component={Map} /> 
  {/* <Route exact path="/Data" component={Data} />  */}
  <br/>  <br/>
  
 </div> 


</HashRouter>
 
    );
  }
}

export default App;
