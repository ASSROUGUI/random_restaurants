
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,Polyline,InfoWindow } from 'google-maps-react';
import {Alert,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
import {  Link } from "react-router-dom";
import {  Card} from 'react-bootstrap';
import Footer from './Footer'
import './Footer.css'
// import'./Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Search extends Component {
  constructor() {
    super();
    this.state = {
 showingInfoWindow: false,
 randomRestaurant: [] ,
  loading: true }};



  componentDidMount(props) {
    
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
       
        // console.log(latitude)
        // console.log(longitude)
        this.setState({

          loading: false,
          latitude:latitude,
          longitude:longitude,
          
        });
        
        const apii=`https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.latitude},${this.state.longitude}&get_param=value`
        fetch(apii)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                randomRestaurant: result,
                 latRandomRestaurant:result.lat,
                 lonRandomRestaurant:result.lon
             
              });
    
      
              console.log(result)
              console.log('latitude:'+this.state.latitude)
              console.log('longitude:'+this.state.longitude)
            },
   
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
  
        // console.log(userLocation)
        console.log(latitude)
        console.log(longitude)
      },
      () => {
        this.setState({ loading: false });
      }
    );
// const {longitude,latitude}=this.state;

  
  
  }
 
    handleClick = () => {
      const randomRestaurant=this.state;
      this.componentDidMount()

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
      
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  
  render() {
    const { loading,randomRestaurant,latRandomRestaurant, lonRandomRestaurant,userLocation } = this.state;
    const { google } = this.props;
    console.log("latRandomRestaurant"+latRandomRestaurant)
    console.log('lonRandomRestaurant'+lonRandomRestaurant)

    if (loading) {
      return 'Loading....';
    }

    return(
        <div>
    
        {/* <Header /> */}
        <div className='am'>

<p style={{ backgroundColor: '#0b9496 ' ,color: 'white' ,
marginTop:'-1px' }} >
<Container className='Container'>
<Row>
<Col xs={6} md={2}>
<a href='' style={{ backgroundColor: '#0b9496 ' ,color: 'white' ,display: 'flex',
  justifyContent: 'center'}}>

<img  className='d' style={{ width: '1erm' ,height:'auto', marginLeft:'2px'}} src="https://lh3.googleusercontent.com/37jL2YRS8UJJRLh2sni8O37X1iFkZEeM3SMa3d-xr0xl4n2XedR3Y6thjsIDIwoZffY=s360-rw" />


</a>

</Col>
<Col xs={6} md={3}>
<a href='' style={{ backgroundColor: '#0b9496 ' ,color: 'white',display: 'flex',
  justifyContent: 'center' ,marginLeft:'-82px'}}>

<h4 >Win Nakel ?</h4>
</a>
</Col>
</Row>
</Container> 
</p>
</div>  

    

  <Alert.Heading 
   style={{  backgroundImage: `url(${randomRestaurant.image})`,
  backgroundPosition: 'center',display: 'flex',
  marginLeft: '225px',
height:'102px',
width:'102px',
  backgroundRepeat: 'no-repeat'}} 
  >
  <p> 
     <a  target='_blank' href={randomRestaurant.link} style={{  color: '#0b9496',display: 'flex',
  justifyContent: 'center',font:'bold',marginLeft:'-212px'}}> 
    {randomRestaurant.name}</a>  
   </p>
   
<div ><p style={{  color: 'grey',display: 'flex',marginLeft:'-12',fontSize:'16px'
  }}>{randomRestaurant.cat}  </p> </div>
   <p style={{fontSize:'12px'}}> {randomRestaurant.rating}/10  </p>  
 </Alert.Heading>


  <div className="main-container">
  <Map style={{ height: '50%',
  width: '100%',
  Zindex: '-1',
  marginLeft: '1px',
    marginTop: '2px',
    display: 'block',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    display: 'flex',
  justifyContent: 'center',
  }}
        className={'map'}
          google={this.props.google}
          zoom={17}
          initialCenter={{ lat:latRandomRestaurant, lng:lonRandomRestaurant}}
        center={{ lat:latRandomRestaurant, lng:lonRandomRestaurant}}

          onChange={(e) => { this.setState({ place: e }) }}
        >
       
        <Marker style={{ color: 'blue' ,backgroundColor:'blue' ,display: 'flex',
  justifyContent: 'center'  }} 
        position={{ lat:latRandomRestaurant, lng:lonRandomRestaurant}}
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
         />
          {/* <Marker style={{ color: 'blue' ,backgroundColor:'blue'}} position={userLocation}
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
          /> */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose} >
        <div>

           
          </div>
        </InfoWindow>
        
      </Map> 
     
</div>

  {/* </Alert></Card.Title> */}
{/* <Card.Text style={{boxSizing: 'border-box',marginLeft:'322px' ,height:'22rem' ,marginTop:'193px'}}>
<Alert  >
<a style={{marginLeft:'-213px'}} 
href="http://maps.google.com/?q=+latRandomRestaurant+,+this.state.lonRandomRestaurant"


target="blank_"
 >
 <a href="http://maps.google.com/?q=24.590353851508,46.594550774201" target="blank_">r</a>
      <button style={{borderColor:'white',marginRight:'-2113px' ,backgroundColor:'white' ,color:'#343a40'}} type="button" className="btn btn-info">Google Maps فتح في</button>
      </a>

</Alert>
</Card.Text> */}
 <Card.Text style={{boxSizing: 'border-box'}}>
<Alert > 
<button style={{ fontFamily:'cocon_next_arabicregular',
marginTop:'382px',

  }} onClick={this.handleClick}  id='h' 
className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> اقتراح آخر 
  {loading && <span>
    <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
<Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>   
    <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
{!loading && <span>''</span>}
</span>}
   </button>
   </Alert>
</Card.Text>

   {/* <div className='Containers'  style={{ marginTop:'-351px', height:' 100%',
   marginLeft:'-224px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'}} >
  
  <div className="row"  >
<div className="column12"   style={{padding:' 5px',}} >
<a href="https://play.google.com/store/apps/details?id=com.wainnakel.android">
<img style={{ width: '5rem'  ,height:'2rem',  marginLeft:'10px',marginTop:'21px'}} 
src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN7atac2-4z8u_OMUGHnpJZRA-1XYmwm-TzANqeJC4Yg6iBV-y'
/> </a>
</div>
<div  className="column3"  style={{marginLeft:'10px', padding:' 5px' ,marginTop:'21px'}} >
<a href="https://apps.apple.com/sa/app/wyn-nakl/id718380069">
<img style={{ width: '5rem'  ,height:'2rem'  }} 
src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsG3IVDuRBvFBZSR5k94FevQEddQ5CcRC5X3ADiio3NKp_byae'
/> </a>
</div>

</div>

<Footer  /> */}
{/* </div> */}
{/* </Card.Body> */}

</div>  





    )
    
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD6xENXUcCHSoR6vLLYVuNBkt2gjm8dyWI'
})(Search);





