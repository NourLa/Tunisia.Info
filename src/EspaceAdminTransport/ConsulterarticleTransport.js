import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { List, Icon,TextArea } from 'semantic-ui-react';
import { MDBInput,MDBBtn } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';
import { withAlert } from "react-alert";

import './EspaceAdminTransport.css';


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
    axios
      .post("/ValidateArticleTransport", this.state)
      .then(() => this.props.onAddArticleHomeReducerAction(this.state))
                                                    
      .catch(err => alert(err));
  };
  onRemoveArticle = () => {
    axios
        .delete(`/ValidateArticleTransport/${this.props._id}`)
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
  render() {
    console.log(this.props);
 
     return (
<div className="consult-article">
        <h3 class="AddArticleTitle">Article Details</h3>
        <form  classclassName="Form-Add">
        <div className="shadow-box-titlearticle z-depth-1"  >   
           <MDBInput type="textarea" label="Title" rows="1" 
           name="title" 
           onChange={this.onChange}
           value={this.state.title}
           />
          </div>
         
<div className ="section2-addArticle"> 
          <div className="shadow-box-sommaire z-depth-1"  >
            <span className="cate-text" >
            <span className="cate-text-first">S</span><span className="cate-text-remain">ummary</span></span>

            <List ordered >
              <List.Item as='a' style={{ display: "flex" }}> <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Chapter 1"
                name="chapitre1"
                onChange={this.onChange}
                value={this.state.chapitre1}
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
                  onChange={this.onChange}
                  value={this.state.chapitre3}
                />
                
              </List.Item>
              <List.Item as='a'style={{ display: "flex" }}> </List.Item><input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Chapter 4"
                name="chapitre4"
                onChange={this.onChange}
                value={this.state.chapitre4}
              />
            </List></div>
            
          <div className="shadow-box-topîc z-depth-1"  >
          <TextArea placeholder='Introduction' className="label-introduction" 
          name= "introduction" onChange={this.onChange}
          value={this.state.introduction}
          />
          </div></div>
            <div className="shadow-box-core z-depth-1"  >
          <div style={{ display: "flex", height: "246px" }}>
            <TextField
              style={{ width: "45%", height: "87%", margin: "4% 2%", backgroundColor:"white" }}
              id="outlined-name"
              label="Chapter 1"
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
              multiline="15"
              name="chapitre1contenu"
              value={this.state.chapitre1contenu}
            />
            <TextField
 style={{ width: "45%", height: "87%", margin: "4% 2%", backgroundColor:"white" }}
              id="outlined-name"
              label="Chapter 2"
              onChange={this.onChange}
              multiline="15"
              margin="normal"
              variant="outlined"
              name="chapitre2contenu"
              value={this.state.chapitre2contenu}
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
              name="chapitre3contenu"
              value={this.state.chapitre3contenu}
            />
             <TextField
              style={{ width: "45%", height: "66%", margin: "4% 2%",backgroundColor:"white" }}
              id="outlined-name"
              label="Chapter 4"
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
              name="chapitre4contenu"
              multiline="15"
              value={this.state.chapitre4contenu}
            />
          </div>
          < div style={{display:"flex"}}>
          <div className="shadow-box-upload z-depth-1"  >
       {/* <img   value={this.state.pictures} alt=""/> */}
       {/* <input name= "pictures" onChange={this.onChange}
               value={this.state.pictures} 
               /> */}
               <img src={`data:image/png;base64,${this.state.pictures}`} alt=""/>
            </div>
             <div className="shadow-box-topîc z-depth-1"  >          
              <TextArea placeholder='Bibliography' className="label-introduction"
               name= "biblio" onChange={this.onChange}
               value={this.state.biblio}
               />
          </div> </div>
</div> 
<MDBBtn outline className="ButtonConfimer" type ="submit" onClick={() =>{this.props.alert.success("Article published with success!");this.onConfirmArticle(); this.onRemoveArticle()}}>Confirm  <Icon name='add' size='large' /> </MDBBtn>
<MDBBtn outline className="ButtonAnnuler"type ="submit" onClick={() =>{ this.onRemoveArticle()}}>Cancel  <Icon name='cancel' size='large' /></MDBBtn>
</form>
     
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
