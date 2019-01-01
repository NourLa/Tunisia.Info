import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow,MDBCol,MDBBtn } from 'mdbreact';
import govs from './Govs';
import { Icon } from 'semantic-ui-react';
import './GovsList.css';



class GovsList extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      count:5
    }
  }
  handleClick=()=>{
    this.setState({count:this.state.count+6});    
  }
  render()
  {
    const { classes,listgov,govList } = this.props;
console.log(listgov)
  return (
    <div>
    {/* <h1 className='mainTitle'>Attractions by governorate</h1>  */}
    <div className='govss'>
      
      {govs.map((image,index) => 
        {isLoggedIn ? (
          console.log('abc')
        ) : (
          console.log('abc')
        )})}
    { }
         <Link className='big' to={`/tourism/govdetails`}>
         <MDBContainer  key={index} className='govContainer' onClick={()=>axios.get('/tourismg/'+image.name.toLowerCase())      
       .then(res=>govList(res.data))
      .catch((err)=>alert(err))} >


<MDBCol  >
         <MDBRow>
         <img src={image.img} alt="thumbnail" className="img-thumbnail" />
         </MDBRow>
         <MDBRow style={{padding: "5% 3%"}}>
            <span className="cate-text">
              <span className="cate-text-first">{image.name[0]}</span> 
              <span className="cate-text-remain">{image.name.slice(1)}</span></span>
            <p className="paragraph-section">
            <Icon name='quote left' />
              <div className="blockquote" />
              {image.caption}
        </p>
         
              <MDBBtn className='btng' outline color="warning">Read More</MDBBtn>
</MDBRow> </MDBCol>

</MDBContainer> 
        </Link>
        
        
      //))}
      <Button onClick={this.handleClick} variant="contained" color="secondary">Show More</Button>
    </div></div>
    
  /*);
}
}
 */)}}

const mapStateToProps=(state)=>{
  return {
    listgov:state.govReducer      }
}


const mapDispatchToProps = dispatch => {
  return {
    govList: glinks => {
      dispatch({
        type: "CALL_GOV_LIST",
        glinks
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GovsList);

