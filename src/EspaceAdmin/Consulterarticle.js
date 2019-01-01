import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { List, Icon,TextArea } from 'semantic-ui-react';
import { MDBInput,MDBBtn } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import { withAlert } from "react-alert";
import { Link } from "react-router-dom";


import './EspaceAdmin.css';


class ConsultArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      introduction:"",
      chapitre1:"",
      chapitre2:"",
      chapitre3:"",
      chapitre4:"",
      pictures:"",
      chapitre1contenu:"",
      chapitre2contenu:"",
      chapitre3contenu :"",
      chapitre4contenu:"",
      biblio:""
    
    };
  }
  onConfirmArticle = () => {
  console.log(this.state)
    axios
      .post("/ValidateArticle", this.state)
      .then(() => this.props.onAddArticleHomeReducerAction(this.state))
                          
      .catch(err => alert(err));
      axios
      .delete(`/ValidateArticle/${this.props._id}`)
      .then(() =>
        this.props.onRemoveArticleReducerAction(this.props._id),
      )
      .catch(err => alert(err));
      
  };
  onRemoveArticle = () => {
    axios
        .delete(`/ValidateArticle/${this.props._id}`)
        .then(() =>
          this.props.onRemoveArticleReducerAction(this.props._id)
        )
        .catch(err => alert(err));
    };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.setState({ 
      ...this.props.ArticleList.filter(e => e._id === this.props._id)[0]
    });
  }
  render() 
 { 
     return (
<div className="consult-article">
<div className="add-Aticle-container" style={{height:"1600px!important", width:"100%!important"}}>
        <form  className="Form-Add"  >
           <MDBInput type="textarea" className="For-AddLAbel" 
   style={{ backgroundColor: "white", width: "126%", height: "88px",border: "2px solid teal", padding: "1%", marginLeft: "10%"}}
         name="title"  value={this.state.title}
           onChange={this.onChange}
           />
       
<div className ="section2-addArticle"> 
<div style={{display:"flex"}} >
          <div className="shadow-box-sommaire z-depth-1"  >
            <span className="cate-text">
            <span className="cate-text-first">S</span><span className="cate-text-remain">ummary</span></span>

            <List ordered >
              <List.Item as='a' style={{ display: "flex" }}> <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Chapter 1"
                name="chapitre1"
                value={this.state.chapitre1}
                onChange={this.onChange}
              />
              </List.Item>
              <List.Item as='a'style={{ display: "flex" }}> <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Chapter 2"
                name="chapitre2"
                onChange={this.onChange}
                value={this.state.chapitre2}
              /></List.Item>
              <List.Item as='a'style={{ display: "flex" }}>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Chapter 3"
                  name="chapitre3"
                  value={this.state.chapitre3}
                  onChange={this.onChange}
                />
                
              </List.Item>
              <List.Item as='a'style={{ display: "flex" }}> </List.Item><input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Chapter 4"
                name="chapitre4"
                value={this.state.chapitre4}
                onChange={this.onChange}
              />
            </List></div>
            
          <div className="shadow-box-topîcintro z-depth-1"  >
          <TextArea placeholder='Introduction' className="label-introduction" name= "introduction" onChange={this.onChange}/>
          </div></div>
          </div>
            <div className="shadow-box-core z-depth-1"  >
          <div style={{ display: "flex", height: "246px" }}>
            <TextField
              style={{ width: "45%", height: "87%", margin: "4% 2%", backgroundColor:"white" }}
              id="outlined-name"
              label="Chapter 1"
              value={this.state.chapitre1contenu}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
              multiline="15"
              name="chapitre1contenu"
            />
            
            <TextField
 style={{ width: "45%", height: "87%", margin: "4% 2%", backgroundColor:"white" }}
              id="outlined-name"
              label="Chapter 2"
              onChange={this.onChange}
              multiline="15"
              margin="normal"
              value={this.state.chapitre2contenu}
              variant="outlined"
              name="chapitre2contenu"
            /></div>
             <div style={{ display: "flex", height: "321px" }}>
              <TextField
              style={{ width: "45%", height: "66%", margin: "4% 2%",backgroundColor:"white" }}
              id="outlined-name"
              multiline="15"
              label="Chapter 3"
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
              value={this.state.chapitre3contenu}
              name="chapitre3contenu"
            />
             <TextField
              style={{ width: "45%", height: "66%", margin: "4% 2%",backgroundColor:"white" }}
              id="outlined-name"
              label="Chapter 4"
              value={this.state.chapitre4contenu}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
              name="chapitre4contenu"
              multiline="15"
            />
          </div>
          < div style={{display:"flex"}}>
          <div className="shadow-box-upload z-depth-1"  >
  
{/*   
          <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                name="pictures"
            /> */}

            </div>
          
             <div className="shadow-box-topîcBib z-depth-1"  >
          <TextArea placeholder='Bibliography' className="label-introduction" name= "biblio" onChange={this.onChange}/>
          </div> </div>
          <TextArea placeholder='Your name' className="uernameadd" name= "username" onChange={this.onChange}></TextArea>

          <div className="Button-consult">
 <Link to={`/EspaceAdmin`}> <MDBBtn outline className="ButtonConfimer" type ="submit" onClick={() => this.onConfirmArticle()} >Confirm  <Icon name='add' size='large' /> </MDBBtn>  </Link>
 <Link to={`/EspaceAdmin`}> <MDBBtn outline className="ButtonAnnuler"type ="submit" onClick={() =>{ this.onRemoveArticle()}}>Cancel  <Icon name='cancel' size='large' /></MDBBtn>
</Link> </div>
</div>
</form>

     


         
            
 
        
     </div> 
    
        <ScrollUpButton />
    </div> 
    );
  }
}

const mapStateToProps = state => {
  return {
    ArticleList: state.ArticleReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onAddArticleHomeReducerAction: Articles => {
        dispatch({
          type: "ADD_PRODUCT",
          newProduct: Articles
        });
      },
    onRemoveArticleReducerAction: id => {
        dispatch({
          type: "REMOVE_PRODUCT",
          _id:id
        });
      }
    };
  };
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(withAlert(ConsultArticle));
