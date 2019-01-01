import React from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import { List, Icon,TextArea } from 'semantic-ui-react';
import { MDBInput,MDBBtn } from 'mdbreact'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';
 import '../ArticlesTransport/ArticlesTransport.css';

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    
  }
  onDrop=(picture)=> {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}
  onAddProduct = () => {
    axios
      .post("/Add-ArticleTransport", this.state)
      .then(() => this.props.onAddArticleUserReducerAction(this.state),
        
      )
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 

  render() {
    console.log(this.state)
    return (
      <div className="add-Aticle-container">
      
          <h3 class="AddArticleTitle">Article Model</h3>
        <form  classclassName="Form-Add" method="post">
        <div className="shadow-box-titlearticle z-depth-1"  >   
           <MDBInput type="textarea" label="Title" rows="1" 
           name="title" 
           value="title"
           onChange={this.onChange}
           />
          </div>
         
<div className ="section2-addArticle"> 
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
              /></List.Item>
              <List.Item as='a'style={{ display: "flex" }}>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Chapter 3"
                  name="chapitre3"
                  onChange={this.onChange}
                />
                
              </List.Item>
              <List.Item as='a'style={{ display: "flex" }}> </List.Item><input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Chapter 4"
                name="chapitre4"
                onChange={this.onChange}
              />
            </List></div>
            
          <div className="shadow-box-topîc z-depth-1"  >
          <TextArea placeholder='Introduction' className="label-introduction" name= "introduction" onChange={this.onChange}/>
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
            />
          </div>
          < div style={{display:"flex"}}>
          <div className="shadow-box-upload z-depth-1"  >
  
  
          <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                name="pictures"
            />

            </div>
          
             <div className="shadow-box-topîc z-depth-1"  >
          <TextArea placeholder='Bibliography' className="label-introduction" name= "biblio" onChange={this.onChange}/>
          </div> </div>
         <div className="Send-Button"> 
           
          <MDBBtn outline color="warning"className="Button Submit Add"     type="submit"  
          onClick={this.onAddProduct() }>Submit   <Icon name='send' size='large' /></MDBBtn>

            
 
        
     </div> </div>
 
        </form>
  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispacthToProps = dispatch => {
  return {
    onAddArticleUserReducerAction: Articles => {
      dispatch({
        type: "ADD_PRODUCT",
        newProduct: Articles
      });
    }
  };
};



export default connect(
  mapStateToProps,
  mapDispacthToProps
)(withAlert( AddArticle));