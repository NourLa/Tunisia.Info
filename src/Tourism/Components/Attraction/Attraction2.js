import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Attraction.css'

class Attraction extends Component {
  //name,category,type,images[3],gov,adr,shortDesc,longDesc.
  constructor(props)
    {
        super(props)
        this.state={
            name:"",
            category:'',
            type:'',
            gov:'',
            adr:'',
            longDesc:'',
            tel:'',
            email:'',
        }
    }
  basla=[];
  componentDidMount=()=>{
    this.setState({
      ...this.props.listcats.filter(el=>el._id===this.props._id)[0]//.images    
  })
   this.basla=this.props.listcats.filter(el=>el._id===this.props._id)[0].images;
   console.log('I am '+this.basla)
  }
  render() { 
    return ( 
      <div className="AttractionContainer container">
        <h1 className='attractionMainTitle'>The {this.state.name} {this.state.type}</h1>
        <img className='mainImage' src={this.basla[2]} alt='Hotel image'/>
        <p className='desc'>{this.state.longDesc}</p>
        <h3 className='secTitle'>Contact the {this.state.type}</h3>
        <h4 className='contLabel'>Address:</h4>
        <h5 className='contVal'>{this.state.adr},{this.state.gov}</h5>
        <h4 className='contLabel'>Phone Number:</h4>
        <h5 className='contVal'>{this.state.tel}</h5>
        <h4 className='contLabel'>Email address:</h4>
        <h5 className='contVal'>{this.state.email}</h5>
        <h4 className='contLabel'>More Pictures:</h4>
        <div className='images'>
        {this.basla.map((el,i)=>(
          
            <img src={el} alt={i}/>
          
        ))}</div>
      </div>
     );
  }
}

const mapStateToProps=(state)=>{
  return {
    listcats:state.catReducer      }
}

export default connect(mapStateToProps)(Attraction);




