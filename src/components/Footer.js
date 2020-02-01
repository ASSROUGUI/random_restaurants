import React from 'react';
import './Footer.css'
import {Dimmer,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
  
        <div className='Container' >
  
     


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



