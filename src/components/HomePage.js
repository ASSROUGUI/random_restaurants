import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import {  Card} from 'react-bootstrap';
import Footer from './Footer'
import Header from './Header'
import {Dimmer,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';

// import Data from './Data'
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import Data from'./Data'
import './HomePage.css'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  word:'اقترح',
        loading: false,
      };

    }
    change(){
      this.setState({

       loading: this.state.loading =true,
        word:this.state.word=
        
        <div>
        <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />   <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />   <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
        </div>
     
      
      })}

     
      n(){
        setTimeout(() => { 
          this.setState({loading: true})
        },2000)
    } 
    fetchData = () => {
      this.setState({ loading: true });
  
      //Faking API call here
      setTimeout(() => {
        this.setState({ 
          loading: false ,
        
          word:this.state.word=
        
          <div>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          </div>});
      }, 100);
    };
    
    render() {
      const { data, loading } = this.state;
        return (

             <div className="background">   

               <Card   className="background2" style={{ width: '33rem'  ,height:'43rem' }}>
  
              
  
  <Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <br/> <br/> <br/>
    <Card.Text>
     <img src='data:image/png;base64,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'/>

    </Card.Text>
    <br/>   <br/>  <br/>  <br/>
    <Link to= '/Search'  onClick={this.fetchData}  id='h' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> {this.state.word} 
                 {loading && <span>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />


{!loading && <span>''</span>}
  </span>}
                 
                  </Link> 


  <div className='Container' style={{  display: 'flex' ,marginTop:'33px'}} >
  
  <div class="row" style={{  display: 'flex'  }}  >
<div class="column">
<a href="https://play.google.com/store/apps/details?id=com.wainnakel.android">
<img 
src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN7atac2-4z8u_OMUGHnpJZRA-1XYmwm-TzANqeJC4Yg6iBV-y'
/> </a>
</div>
<div  class="column"  style={{ flex: '48.33%', padding:' 5px'}} >
<a href="https://apps.apple.com/sa/app/wyn-nakl/id718380069">
<img  
src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsG3IVDuRBvFBZSR5k94FevQEddQ5CcRC5X3ADiio3NKp_byae'
/> </a>
</div>
</div>
</div>

<Footer />
  </Card.Body>
 
</Card>  
        <div className="backgrounds"> 
       <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
           <div className="container">
             <br/> <br/> 
    { this.state.loading}
    
           
<div className="row center">
                 {/* < Link to= './Data'  id='h'> Data  </Link>  */}


                 {/* <Link to= '/List' id='h' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> Start Now  </Link>  */}
                 {/* < Link to= './Map'  id='h'> Map  </Link>  */}

              {/* <Data /> */}
              {/* <List /> */}
               </div>
{/* <button className="button" onClick={this.fetchData} disabled={loading}>{loading && <span><p>loading</p></span>} {!loading && <span>Fetch Data from Server</span>} </button> */}
             <br/> <br/>
                  
           </div> 
        </div> 
    

    </div> 
  

      </div>
      </div>
        );
    }
}

export default HomePage;




//     <div id="banner">
//     <div class="inline-block">
// <img className='image1'
// src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN7atac2-4z8u_OMUGHnpJZRA-1XYmwm-TzANqeJC4Yg6iBV-y'
// />     

// <img className='image2'
// src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsG3IVDuRBvFBZSR5k94FevQEddQ5CcRC5X3ADiio3NKp_byae'
// />  

// </div></div>