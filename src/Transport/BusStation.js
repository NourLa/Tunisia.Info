import React, { Component } from 'react';
import ReactBingmaps from 'components/ReactBingmaps';
import NavbarPage from '../Components/NavBar/NavBar';




class BusStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : true,
      bingmapKey: "AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD", //Don't use this key in your environment.
      infoboxes : [
        {
          "location":[13.0827, 80.2707], "option":{ title: 'Chennai', description: '...' }, "addHandler": {"type" : "click", callback: this.callBackMethod}
        }
      ],
      pushPins : [
        {
          "location":[13.0827, 80.2707], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ],
      regularPolygons:[
        {
          "center":[13.0827, 80.2707],
          "radius":5,
          "points":36,
          "option": {fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2}
        }
      ],
      
      infoboxesWithPushPins: [
        {//35.8284534,10.5480138,
          "location":[36.7795493,10.1654055], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Station Bus tunis', description: '' },
          "pushPinOption":{ title: 'Station Bus tunis', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[35.725787,10.6943542], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Station STS Monastir          ', description: '' },
          "pushPinOption":{ title: 'Station STS Monastir ', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[35.4986025,11.0446021], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Gare routière de Mahdia', description: '' },
          "pushPinOption":{ title: 'Gare routière de Mahdia ', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[34.7407877,10.7291929], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Terminus de Bus El Karia          ', description: '' },
          "pushPinOption":{ title: 'Terminus de Bus El Karia          ', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[33.8822698,10.0840762], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Station Bus Gabes', description: '' },
          "pushPinOption":{ title: 'Station Bus Gabes', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[33.6099703,10.5119955], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Gare routiere de Médenine', description: '' },
          "pushPinOption":{ title: 'Gare routiere de Médenine', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[33.701236,10.364806,9], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Gare Bus Houmt Souk', description: '' },
          "pushPinOption":{ title: 'Gare Bus Houmt Souk', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[32.9313631,10.4430996], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Station Bus SRTM à Tataouine', description: '' },
          "pushPinOption":{ title: 'Station Bus SRTM à Tataouine', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[33.4969794,8.4666244,9], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Gare routière de Kébili', description: '' },
          "pushPinOption":{ title: 'Gare routière de Kébili', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[33.8722317,7.8863688], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'station bus nefta', description: '' },
          "pushPinOption":{ title: 'station bus nefta', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
          "location":[34.4160906,8.7869379], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Station de bus SRTG Gafsa', description: '' },
          "pushPinOption":{ title: 'Station de bus SRTG Gafsa', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[35.1775954,8.8447824], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'Station des Bus Kasserine', description: '' },
            "pushPinOption":{ title: 'Station des Bus Kasserine', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[35.117823,8.4834959], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'Station des Bus SidiBouzid', description: '' },
            "pushPinOption":{ title: 'Station des Bus SidiBouzid', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[35.6795595,10.0877183], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'Gare routière Kairouan', description: '' },
            "pushPinOption":{ title: 'Gare routière Kairouan', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[36.1776292,8.6548766], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'Gare Routière Kef Touiref', description: '' },
            "pushPinOption":{ title: 'Gare Routière Kef Touiref', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[36.4955146,8.7695295], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'Station des Autobus Jendouba', description: '' },
            "pushPinOption":{ title: 'Station des Autobus Jendouba', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[37.2701968,9.6420553], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'Station Tarek Ibn Zied Bizerte', description: '' },
            "pushPinOption":{ title: 'Station Tarek Ibn Zied Bizerte', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[36.4515686,10.727458], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'bus Station Nabeul‎', description: '' },
            "pushPinOption":{ title: 'bus Station Nabeul‎', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {//35.7644863,10.7730801
            "location":[35.8283661,10.6367354], 
            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
            "infoboxOption": { title: 'Bus station bab bhar', description: '' },
            "pushPinOption":{ title: 'Bus station bab bhar', description: 'Pushpin' },
            "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
            "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ],
      boundary: {
        "location":['station de train sousse'],
        "option":{
          entityType: 'PopulatedPlace'
        },
        "polygonStyle" :{
          fillColor: 'rgba(161,224,255,0.4)',
          strokeColor: '#a495b2',
          strokeThickness: 2
        }
      },
      searchInput: "",
      getLocationHandledData: "",
      polyline: {
        "location": [[13.0827, 80.2707],[13.0827, 80.1907]],
        "option": { strokeColor: 'blue', strokeThickness: 10, strokeDashArray: [1, 2, 5, 10] }
      },
      directions: {
        "renderOptions": {"itineraryContainer": "itineraryContainer" },
        "requestOptions": {"routeMode": "driving", "maxRoutes": 2},
        "wayPoints": [
              {
                address: 'Chennai, Tamilnadu'
              },
              {
                address: 'Salem, Tamilnadu'
              }
            ]
      }
    }
  }
  changeState(){
    this.setState({
      infoboxes : [
        {
          "location":[13.0827, 80.2707], "option":{ title: 'Chennai', description: 'Tamilnadu' }, "addHandler": {"type" : "click", callback: this.callBackMethod}
        }
      ],
      pushPins : [
        {
          "location":[13.0827, 80.2707], "option":{ color: 'yellow' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
        },
        {
          "location":[13.0727, 80.2707], "option":{ color: 'green' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ],
      regularPolygons:[
        {
          "center":[13.0827, 80.2707],
          "radius":5,
          "points":6,
          "option": {fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2}
        }
      ],
      infoboxesWithPushPins: [
        {
          "location":[13.0827, 80.2707], 
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Chennai', description: 'Infobox' },
          "pushPinOption":{ title: 'Chennai', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ],
      boundary: {
        "search" : "636303",
        "polygonStyle" :{
          fillColor: 'rgba(161,224,255,0.4)',
          strokeColor: '#a495b2',
          strokeThickness: 2
        },
        "option":{
          entityType: 'PopulatedPlace'
        }
      },
      polyline: {
        "location": [[13.0827, 80.2707],[13.0527, 80.2707]],
        "option": { strokeColor: 'red', strokeThickness: 10, strokeDashArray: [1, 2, 5, 10] }
      },
      directions: {
        "inputPanel": "inputPanel",
        "renderOptions": {"itineraryContainer": "itineraryContainer" },
        "requestOptions": {"routeMode": "driving", "maxRoutes": 2},
        "wayPoints": [
              {
                address: 'Chennai, Tamilnadu'
              },
              {
                address: 'Salem, Tamilnadu'
              },
              {
                address: 'Coimbatore, Tamilnadu'
              }
            ]
      }
    })
  }
  handleSubmit(event){
    if(this.state.searchInput !== null && this.state.searchInput !== ""){
      this.setState({
        boundary: {
          "search" : this.state.searchInput,
          "polygonStyle" :{
            fillColor: 'rgba(161,224,255,0.4)',
            strokeColor: '#a495b2',
            strokeThickness: 2
          },
          "option":{
            entityType: 'PopulatedPlace'
          }
        }
      })
    }
    event.preventDefault();
  }
  GetLocationHandled(location){
    this.setState({
      getLocationHandledData: JSON.stringify(location)
    });
  }
  GetEventHandled(callbackData){
    console.log(callbackData);
  }
  render() {
    return (
      <div className="pageMap">
      <NavbarPage />

       {/* <Search/>*/}
    {/*<h1><u>Example React-Bingmaps</u></h1> */}
      <div >
      <h1 className="BusStationMapTitle">Tunisia Bus Station</h1>
         {/* <button onClick={()=>{this.setState({isVisible:!this.state.isVisible})}}>
            {this.state.isVisible ? "Hide" : "Show"}
          </button>
          <a target="_blank" href="https://github.com/iniamudhan/react-bingmaps/blob/dev/src/App.js">source</a>*/}
      </div> 
        {this.state.isVisible && (<div className="pageMap">
         {/* <div className = "map-one"> 
          <u>Bingmaps with Center set and zoom = 5</u>
            <ReactBingmaps 
              id = "one"
              bingmapKey = {this.state.bingmapKey} 
              boundary = {this.state.boundary}
              infoboxesWithPushPins={this.state.infoboxesWithPushPins}
              center = {[33.8095022, 10.0664254]}
              
              zoom = {6}
              className = "customClass"
            > 
          </ReactBingmaps> 
        </div> */ }
        {/*  <div className = "map-two">
          <u>Bingmaps with Pushpin</u>
           <ReactBingmaps
              id = "two" 
              className = "customClass"
              bingmapKey = {this.state.bingmapKey}
              center = {[13.0827, 80.2707]}
              mapTypeId = {"aerial"}
              pushPins = { this.state.pushPins }
            > 
           </ReactBingmaps>
          </div> */ }
         {/* <div className = "map-one">
          <u>Bingmaps with Infobox</u>
            <ReactBingmaps 
              id = "three"
              center = {[13.0827, 80.2707]}
              className = "customClass"
              bingmapKey = {this.state.bingmapKey} 
              infoboxes = {this.state.infoboxes }
            > 
           </ReactBingmaps>
          </div>*/ }
          {/*<div className = "map-two">
          <u>Bingmaps with Infobox and Pushpin</u>
            <ReactBingmaps 
              id = "four"
              center = {[13.0827, 80.2707]}
              className = "customClass"
              bingmapKey = {this.state.bingmapKey} 
              infoboxesWithPushPins = {this.state.infoboxesWithPushPins}
            > 
           </ReactBingmaps>
          </div> */ }
        {/*  <div className = "map-one">
          <u>Bingmaps with Regular Polygons</u>
           <ReactBingmaps
              id = "five" 
              center = {[13.0827, 80.2707]}
              className = "customClass"
              bingmapKey = {this.state.bingmapKey}
              regularPolygons = {this.state.regularPolygons}
            > 
          </ReactBingmaps>
          </div> */ }
         { /*<div className = "map-two">
          <u>Bingmaps with Spatial Data Service (Boundary)</u>
            <span style={{'display':'inline-block'}}>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="search place, pin, city"
                  onChange={(event)=>{this.setState({searchInput:event.target.value})}} 
                  value={this.state.searchInput}>
                </input>
                <input type="submit" value="Search" />
              </form>
        </span>
           <div>
            <u>Bingmaps with Get Location - <span>{this.state.getLocationHandledData}</span></u>
          </div>
           <ReactBingmaps
              className = "customClass"
              id = "six" 
              center = {[33.7667155,8.9428772]}
              bingmapKey = {this.state.bingmapKey}
              getLocation = {
                {addHandler: "click", callback:this.GetLocationHandled.bind(this)}
              }
              boundary = {this.state.boundary}
              directions = {this.state.directions}

              infoboxesWithPushPins={this.state.infoboxesWithPushPins}
              

              zoom = {6}
              
            > 
            </ReactBingmaps>
            </div>*/ }
         {/* <div className = "map-one">
          <u>Bingmaps with Get Location - <span>{this.state.getLocationHandledData}</span></u>
            <ReactBingmaps
              id = "seven" 
              className = "customClass"
              center = {[13.0827, 80.2707]}
              bingmapKey = {this.state.bingmapKey}
              getLocation = {
                {addHandler: "click", callback:this.GetLocationHandled.bind(this)}
              }
            > 
            </ReactBingmaps> 
            </div>*/}
         {/* <div className = "map-two">
          <u>Bingmaps with EventHandlers - callback data is consoled</u>
            <ReactBingmaps
              className = "customClass"
              id = "eight" 
              center = {[13.0827, 80.2707]}
              bingmapKey = {this.state.bingmapKey}
              mapHandlers = {
                [
                  {addHandler: "click", callback:this.GetEventHandled.bind(this)},
                  {addHandler: "viewchangeend", callback:this.GetEventHandled.bind(this)}
                ]
              }
            > 
            </ReactBingmaps> 
            </div>*/}
         {/* <div className = "map-one">
          <u>Bingmaps with Polyline</u>
           <ReactBingmaps
              id = "nine" 
              className = "customClass"
              center = {[13.0827, 80.2707]}
              bingmapKey = {this.state.bingmapKey}
              polyline = {this.state.polyline}
            > 
          </ReactBingmaps> 
          </div>*/}
          {/*<div className = "map-two">
          <u>Bingmaps with mapOptions - 'maxZoom': 12, 'minZoom': 5 </u>
            <ReactBingmaps
              className = "customClass"
              id = "ten" 
              center = {[13.0827, 80.2707]}
              bingmapKey = {this.state.bingmapKey}
              mapOptions = { {'maxZoom': 12, 'minZoom': 5} }
            > 
           </ReactBingmaps> 
        </div>*/}
          <div className = "map-three">
          <span style={{}}>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input className="TransportStationSearch" type="text" placeholder="search place, pin, city"
                  onChange={(event)=>{this.setState({searchInput:event.target.value})}} 
                  value={this.state.searchInput}>
                </input>
                <input  type="submit" value="Search" 
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "teal !important",
                  borderColor: "teal !important",
                }}
                />
              </form>
        </span>
        <button className="BusStationMapDistance" onClick={this.changeState.bind(this)}>Distance Measuring</button>

          <u>location<span>{this.state.getLocationHandledData}</span></u>

            <ReactBingmaps
              className = "customClass"
              id = "eleven" 
              center = {[13.0827, 80.2707]}
              bingmapKey = {this.state.bingmapKey}
              boundary = {this.state.boundary}
              directions = {this.state.directions}
              getLocation = {
                {addHandler: "click", callback:this.GetLocationHandled.bind(this)}
              }
              infoboxesWithPushPins={this.state.infoboxesWithPushPins}
              
              
            > 
            </ReactBingmaps>
            <div className="mapDirection">
              <div className="input-panel" id='inputPanel'></div>
              <div className="itinerary-container" id='itineraryContainer'></div>
            </div>
          </div>
        </div>)}
        <br />
       {/* <h3>For new feature to be added, open new issue <a href="https://github.com/iniamudhan/react-bingmaps/issues/new">here</a>. Thanks</h3>
        <h4>Support and donate for React-Bingmaps.</h4> 
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="RVCBMXBZ36B5S" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
      </form>*/}

      </div>
    );
  }
}

export default BusStation;
