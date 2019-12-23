import React from 'react';
import {Dimmer,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
     <div className='am'>

     <p style={{ backgroundColor: '#0b9496 ' ,color: 'white'  }} >
     <Container className='Container'>
  <Row>
  <Col xs={6} md={2}>
<a href='' style={{ backgroundColor: '#0b9496 ' ,color: 'white' }}>

<img  className='d' style={{ width: '1erm' ,height:'auto', border: '1px solid red;'}} src="https://lh3.googleusercontent.com/37jL2YRS8UJJRLh2sni8O37X1iFkZEeM3SMa3d-xr0xl4n2XedR3Y6thjsIDIwoZffY=s360-rw" />


 </a>

 </Col>
 <Col xs={6} md={3}>
 <a href='' style={{ backgroundColor: '#0b9496 ' ,color: 'white' }}>

<h4 >Win Nakel ?</h4>
</a>
 </Col>
 </Row>
 </Container> 
</p>


  


     </div>   
    );
}

export default Header;