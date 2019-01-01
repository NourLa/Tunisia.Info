import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow,MDBCol,MDBBtn } from 'mdbreact';
import govs from './Govs';
import { Icon } from 'semantic-ui-react';
import './GovsList.css';


// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// });

// function AlignItemsList(props) {
//   const { classes } = props;
//   return (
//     <div className='govs'>
//     <h1>Search attractions by governorate</h1><hr/>
//     <List className={classes.root}>
//       {govs.map((el)=>
//         <ListItem button alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src={el.img} />
//         </ListItemAvatar>
//         <ListItemText
//           primary={el.name}  
//           secondary={
//             <React.Fragment>
//               {el.caption}
//             </React.Fragment>
//           }        
//         />
//       </ListItem> 
//       )}            
//     </List>
//     </div>
//   );
// }

// AlignItemsList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AlignItemsList);

class GovsList extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      count:5
    }
  }
  handleClick=()=>{
    if(this.state.count<24) this.setState({count:this.state.count+3});    
  }

  render(){
    const { classes,listgov,govList } = this.props;
    return(
      <div>
        {/* <h1 className='mainTitle'>Attractions by governorate</h1>  */}
        <div className='govss'>
          
          {govs.map((image,index) => (
            (index<=this.state.count) ? (
              
              <Link className='big' to={`/tourism/govdetails`}>
              <MDBContainer  key={index} className='govContainer' onClick={()=>axios.get('/tourismg/'+image.name.toLowerCase())      
              .then(res=>govList(res.data))
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
                  <Icon name='quote left' />
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
          <Button size='large' className='showmore' onClick={this.handleClick} variant="contained" color="secondary">Show More</Button>
        </div>

      </div>
    )
  }
}

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