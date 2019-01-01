import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './CatItemsList.css'



class CatItemsList extends Component/*(props)*/ {
  //classes  = this.props;
  /*componentDidMount(){
    axios.get('/tourismg/'+image.name.toLowerCase())
  }*/
  render(){
    console.log(this.props.listcats)
  return (
    <div className="GovItems container">
    <h1 className='mainTitle'>Governorate attractions list</h1>
    {this.props.listcats.map((el,i)=>(
      <Link to={`/tourism/catdetails/${el._id}`}>
      <Card className='card' key={i}>
      <CardActionArea>
        <CardMedia
          className='media'
          image={el.images[0]}
          title={el.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {el.name}
          </Typography>
          <Typography component="p">
            {el.shortDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card> </Link>
    ))}
    
    </div>
  );
}}
const mapStateToProps=(state)=>{
      return {
        listcats:state.catReducer      }
}

/*MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default connect(mapStateToProps)(CatItemsList);
