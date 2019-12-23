import React from 'react';
import './Footer.css'
import {Dimmer,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <div className='Container' >
  
        {/* <div class="row">
  <div class="column">
  <a href="https://play.google.com/store/apps/details?id=com.wainnakel.android">
    <img 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN7atac2-4z8u_OMUGHnpJZRA-1XYmwm-TzANqeJC4Yg6iBV-y'
 /> </a>
  </div>
  <div class="column">
  <a href="https://apps.apple.com/sa/app/wyn-nakl/id718380069">
  <img  
  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsG3IVDuRBvFBZSR5k94FevQEddQ5CcRC5X3ADiio3NKp_byae'
 /> </a>
  </div> */}


<br/> 
<div className='footer'>
<a href='https://twitter.com/WainNakel'><i  id='x' class="fa fa-twitter" style={{ color:'grey' }}></i></a> {''}
  <a href='https://twitter.com/WainNakel'style={{ color:'grey' }}  > @WainNakel</a> | 2018 © جميع الحقوق محفوظة    |   <a style={{ color:'grey' }} href='http://wainnakel.com/privacy/'  > Privacy Policy </a>
 
 <br />   <br />
  <p > poweredByFoursquare  </p>
</div>

        </div>
    );
}

export default Footer;




//         <Container className='Container'>
//   <Row>
//     <Col xs={6} md={8}>

//     <a href="https://play.google.com/store/apps/details?id=com.wainnakel.android">
//       <Image className='image1'
// src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN7atac2-4z8u_OMUGHnpJZRA-1XYmwm-TzANqeJC4Yg6iBV-y'

//    />
//    </a>


//    <a href="https://apps.apple.com/sa/app/wyn-nakl/id718380069">

// <Image   className='image2'    
// src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsG3IVDuRBvFBZSR5k94FevQEddQ5CcRC5X3ADiio3NKp_byae'

//  />
//  </a>
//     </Col>
//     <Col xs={2} md={8}>


//     </Col>
 
  {/* </Row>
</Container> */}