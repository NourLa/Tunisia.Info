import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow,MDBCol,MDBBtn } from 'mdbreact';
import Button from '@material-ui/core/Button';
import types from './Types'
import './CategoriesList.css';

// class GovsList extends React.Component {
//   /*constructor(props)
//   {
//     super(props)
//   }*/
//   render()
//   {
//     const { classes,listcat,catList } = this.props;
// console.log(catList)
//   return (
    
//     <div className='govs'>
//       {/* <h1 className='mainTitle'>Attractions by governorate</h1> */}
//       {/* <ShowMore> */} 
//       {types.map((image,index) => (
//         <Link className='big' to={`/tourism/govdetails`}>
//         {/* <div className='bigin' key={index}> */}
//         <MDBContainer  key={index} className='govContainer' onClick={()=>axios.get('/tourismg/'+image.name.toLowerCase())      
//        .then(res=>catList(res.data))
//       .catch((err)=>alert(err))} >


// <MDBCol  >
//          <MDBRow>
//          <img src={image.img} alt="thumbnail" className="img-thumbnail" />
//          </MDBRow>
//          <MDBRow style={{padding: "5% 3%"}}>
//             <span className="cate-text">
//               <span className="cate-text-first">{image.name[0]}</span> 
//               <span className="cate-text-remain">{image.name.slice(1)}</span></span>
//             <p className="paragraph-section">{/*<Icon name='quote left' />*/}
//               <div className="blockquote" />
//               {image.caption}
//         </p>
         
//               <MDBBtn className='btng' outline color="warning">Read More</MDBBtn>
// </MDBRow> </MDBCol>

// </MDBContainer> 
//         {/* </div> */}</Link>
        
        
//       ))}
//     </div>
    
//   );
// }
// }


// const mapStateToProps=(state)=>{
//   return {
//     listgov:state.govReducer      }
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     govList: glinks => {
//       dispatch({
//         type: "CALL_GOV_LIST",
//         glinks
//       });
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(GovsList);


class CategoriesList extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      count:6
    }
  }
  

  render(){
    const { classes,listcat,catList } = this.props;
    return(
      <div>
        {/* <h1 className='mainTitle'> by cathegory</h1>  */}
        <div className='govss'>
          
          {types.map((image,index) => (
            (index<=this.state.count) ? (
              
              <Link className='big' to={`/tourism/catdetails`}>
              <MDBContainer  key={index} className='govContainer' onClick={()=>axios.get('/tourismc/'+image.name.toLowerCase())      
              .then(res=>catList(res.data))
              .catch((err)=>alert(err))} >


              <MDBCol  >
              <MDBRow className='govimage'>
              <img src={image.img} alt="thumbnail" className="img-thumbnail" />
              </MDBRow>
              <MDBRow style={{padding: "5% 3%"}}>
                  <span className="cate-text">
                    <span className="cate-text-first">{image.name[0]}</span> 
                    <span className="cate-text-remain">{image.name.slice(1)}</span></span>
                  <p className="paragraph-section">
                    <div className="blockquote" />
                    {image.caption}
              </p>
         
              <MDBBtn className='btng' outline color="warning">Read More</MDBBtn>
              </MDBRow> </MDBCol>

              </MDBContainer> 
              </Link>
              ) : (console.log('ýes'))
                
                ))
          }
          {/* <Button onClick={this.handleClick} variant="contained" color="secondary">Show More</Button> */}
        </div>

      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    listcat:state.catReducer      }
}


const mapDispatchToProps = dispatch => {
  return {
    catList: clinks => {
      dispatch({
        type: "CALL_CAT_LIST",
        clinks
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);