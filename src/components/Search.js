
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,Polyline,InfoWindow } from 'google-maps-react';
import DataList from './DB'
import {Alert,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
import {  Link } from "react-router-dom";
import {  Card} from 'react-bootstrap';
import Footer from './Footer'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'

export class Search extends React.Component {
  state = { 
    place:null,
      scene: {},
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {},
        persons: [] ,
        currentIndex: 0,
        name:DataList[0].name,
        lat:DataList[0].lat,
        lon:DataList[0].lon,
        link:DataList[0].link,
        cat:DataList[0].cat,
        price:DataList[0].price,
        rate:DataList[0].rate,
        image:DataList[0].image,
        phoneNumber:DataList[0].phoneNumber,
        open:DataList[0].open,
        rating: DataList[0].rating,
        map:DataList[0].map,
   userLocation:
    { 
      lat:33,
      lon:33
    }
    , 
   loading: true };

   onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: this.state.lat, lng: this.state.lon },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
     randomRestaurant() {
      const randomNumber = Math.floor(Math.random() * DataList.length);
      return DataList[randomNumber];
      
    }
    handleClick = () => {
      const generateRandomRestaurant = this.randomRestaurant();

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          name: generateRandomRestaurant.name,
          lat: generateRandomRestaurant.lat,
          lon: generateRandomRestaurant.lon,
          link:  generateRandomRestaurant.link,
          cat:  generateRandomRestaurant.cat,
          price:generateRandomRestaurant.price,
          rate:generateRandomRestaurant.rate,
          image:generateRandomRestaurant.image,
          phoneNumber:generateRandomRestaurant.phoneNumber,
          open:generateRandomRestaurant.open,
          rating:generateRandomRestaurant.rating,
          map:generateRandomRestaurant.map,
          loading: false
        });
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
    
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return 'Loading....';
    }

    return(
        <div>
    
        <Header />
       {/* <List
       {...this.state} 
       handleClick={this.handleClick}
       />  */}

       <div className="background" style={{ marginTop:'22px'  }}>   
     
<div  className="background2" style={{ }}>

<Card.Body className="background2" style={{ width: '86rem'  ,height:'52rem' }}>
<Card.Title><Alert >
  <Alert.Heading  style={{  backgroundImage: `url(${this.state.image})`,
  backgroundPosition: 'center',

  backgroundRepeat: 'no-repeat'}} >
  {/* <ImageBackground source={this} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground> */}
    {/* <img src={this.state.image} alt=""/> */}
    <a  target='_blank' href={this.state.link} style={{  color: '#0b9496'}}> 
    {this.state.name}</a>  
    <p style={{  color: 'grey'}}> </p> 
<div>  <p style={{  color: 'grey'}}>{this.state.cat}  </p>  </div>
<div>  <p  style={{  color: '#F0B27A'}}>  phoneNumber: {this.state.phoneNumber}    -    open: {this.state.open}</p></div> 
 <p  style={{  color: '#A4C0E4 '}}>  price: $${this.state.price}$$     -     Rating:{this.state.rating}/10  </p>  
    {/* <p>{this.state.userLocation.lat} --- {this.state.userLocation.lon}</p> */}
  </Alert.Heading>
  {/* <p style={{  color: 'grey'}}>{this.state.lat} ----{this.state.lon}  </p>   */}
 
  <hr />
  <Map style={{ width: '46rem'  ,height:'20rem' }}
        className={'map'}
          google={this.props.google}
          zoom={9}
          initialCenter={{lat:this.state.lat, lng:this.state.lon}}
          onChange={(e) => { this.setState({ place: e }) }}
        >
        <Marker style={{ color: 'blue' ,backgroundColor:'blue'   }} position={{lat:this.state.lat, lng:this.state.lon}}
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
        {/* <a target='_blank' href='http://google.com'>{this.props.name}</a> */}
           
          </div>
        </InfoWindow>
        
      </Map> 
      
  <p className="mb-0"> </p>
  </Alert></Card.Title>
<Card.Text style={{boxSizing: 'border-box',marginLeft:'322px' ,height:'22rem' ,marginTop:'193px'}}>
<Alert style={{marginRight:'2113px' }} >
<a style={{marginRight:'2113px'}} href ={this.state.map} >
      <button style={{borderColor:'white',marginRight:'-2113px' ,backgroundColor:'white' ,color:'#343a40'}} type="button" className="btn btn-info">Google Maps فتح في</button>
      </a>

{/* <button><Link to="/" params={this.props.git_url}></Link>Redirect to repo: {repo.git_url}</button> */}
</Alert>
</Card.Text>

<button style={{marginTop:'-231px', marginLeft:'244px', fontFamily:'cocon_next_arabicregular'}} onClick={this.handleClick}  id='h' 
className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> اقتراح آخر 
  {loading && <span>
    <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
<Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>   
    <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
{!loading && <span>''</span>}
</span>}
   </button> 
   <div className='Containers'  style={{ marginTop:'-351px', height:' 100%',
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

<Footer  />
</div>
</Card.Body>

</div>  

<div className="backgrounds"> 
<div id="index-banner" className="parallax-container">
<div className="section no-pad-bot">
<div className="container">
<br/> <br/> 
{ this.state.loading}


<div className="row center">
  
</div>
<br/> <br/>
   
</div> 
</div> 


</div> 


</div>
</div>
       


        </div>
    )
    
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD6xENXUcCHSoR6vLLYVuNBkt2gjm8dyWI'
})(Search);








// import React, { Component } from 'react';
// import {  Link } from "react-router-dom";
// import {Dimmer,Spinner, Button,Loader ,Card } from 'react-bootstrap';
// import { Map, GoogleApiWrapper, Marker,Polyline } from 'google-maps-react';

// // import Map from './Map'
// import DataList from './DB'
// import List from './List'
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Search.css'
// import Fade1 from './opacity1';

// class Search extends Component {
//   constructor(props) {
//     super(props);}

//     state = {
//       scene: {},
//       persons: [] ,
//       currentIndex: 0,
//       char: "",
//       name:DataList[0].name,
//       lat:DataList[0].lat,
//       lon:DataList[0].lon,
//       link:DataList[0].link,
//     word:'press',
//     userLocation: { lat: 32, lng: 32 },
//      loading: true     

//     }
//     randomRestaurant() {
//       const randomNumber = Math.floor(Math.random() * DataList.length);
//       return DataList[randomNumber];
      
//     }
//     handleClick = () => {
//       const generateRandomRestaurant = this.randomRestaurant();
//       this.setState({
//         name: generateRandomRestaurant.name,
//         lat: generateRandomRestaurant.lat,
//         lon: generateRandomRestaurant.lon,
//         link:  generateRandomRestaurant.link
//       });
  
//     };
//    change(){
// this.setState({
//   word:this.state.word=<Spinner
//   as="span"
//   animation="grow"
//   size="sm"
//   role="status"
//   aria-hidden="true"
// />

// })

//    }

//    componentDidMount(props) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           userLocation: { lat: latitude, lng: longitude },
//           loading: false
//         });
//       },
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }

//   render() {
//     const { loading, userLocation } = this.state;
//     const { google } = this.props;
//     if (loading) {
//       return 'Loading....';
//     }

//     return (
//       <div>
// {/* {this.state.name}
//       <div className="backgrounds"> 
//       <List
//        {...this.state}
//         handleClick={this.handleClick}/> */}
       
//         <Card style={{ width: '48rem' }}>
//            <Card.Body>
//     <Card.Title></Card.Title>
//     <Map
//           google={google}
//           zoom={13}
//           initialCenter={userLocation}>
//           <Marker position={userLocation} /> 



//           <Marker position={{ lat: 26.300782772672, lng: 50.200918614864}} />
//         </Map> 
//     <Card.Text>
//   </Card.Text>
 
//   </Card.Body>
//   <br/>     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>

// </Card>
//        <div id="index-banner" className="parallax-container">
//         <div className="section no-pad-bot">
//         <div className='map-class2'>
//           <div className='map-class'>
//            {/* <Map/ > */}
//          </div>
//           </div>
//              <br/> <br/> 
//              <br/> <br/> 
//              <br/> <br/> 
//        <button onClick={()=>this.change()}>{this.state.word}</button>
     
//        <div className="containerx">
    
     

     
//         </div>

// <br/> <br/>
     
// </div> 
// </div> 

// </div> 

//     );
//   }
// }

// export default Search;




