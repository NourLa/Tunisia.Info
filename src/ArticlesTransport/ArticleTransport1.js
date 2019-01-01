import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Icon, TextArea } from 'semantic-ui-react';
import { MDBInput, MDBBtn } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react'
import NavbarPage from '../NavBar/NavBar';


class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.setState({
      ...this.props.ArticleList.filter(e => e._id === this.props._id)[0]
    });
  }
  render() {
    console.log(this.props);
    return (<div className="ArticleDetails-Tunisia">
      <NavbarPage />


      <div className="section2-addArticle">


        {/* <div className="shadow-box-upload z-depth-1"  >
  
  
          <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                name="pictures"
            />

            </div> */}

        <Grid celled>
          <Grid.Row className="SommuryRow">
            <Grid.Column width={16}>
              <div className="DetailsTitlenArticle">
                {/* <div className="labeltitleArticle">
          <label>Title</label>
          <Link to={`/EditArticle/${this.props._id}/${this.state.title}`}>
        <a href="/" >[ Edit ]</a>
        </Link ></div>  */}

                <h2
                  className="MDBInputTitleDetails"
                >{this.state.title}</h2>

              </div>      </Grid.Column>
          </Grid.Row>

          <Grid.Row className="SommuryRow">
            <Grid.Column width={3} >
              <div className="OperationsArticle"></div>
            </Grid.Column>
            <Grid.Column width={10} >
              <div className="DetailsIntroductionArticle">
                <div className="labeltitleArticle">
                  <label>Introduction</label>
                  <Link to={`/EditArticle/${this.props._id}/${this.state.introduction}`}>
                    <a href="/" >[ Edit ]</a>
                  </Link ></div>
                <TextArea autoHeight style={{ width: "104%", marginLeft: "-2%", borderRadius: "2%", padding: " 2%", border: "none", fontSize: "18px", height: "213px", backgroundColor: "white" }}
                  className="label-introductionArticle" name="introduction"
                  value={this.state.introduction}
                  rows="10" />
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="SummaryDetailsArticle">
                <span className="cate-text">
                  <span className="cate-text-first">S</span>
                  <span className="cate-text-remain">ummary</span></span>

                <List ordered >
                  <List.Item as='a' style={{ display: "flex" }}> <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    value={this.state.chapitre1}
                    name="title"

                  />
                  </List.Item>
                  <List.Item as='a' style={{ display: "flex" }}> <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    value={this.state.chapitre2}
                    name="chapitre2"
                  /></List.Item>
                  <List.Item as='a' style={{ display: "flex" }}>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      value={this.state.chapitre3}
                      name="chapitre3"
                    />

                  </List.Item>
                  <List.Item as='a' style={{ display: "flex" }}> </List.Item><input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    value={this.state.chapitre4}
                    name="chapitre4"
                  />
                </List>
              </div>
            </Grid.Column>

            <Grid.Column width={16}>
              <div className="divchapitre">
                <div className="labeltitleArticle">
                  <label>{this.state.chapitre1}</label>
                  <Link to={`/EditArticle/${this.props._id}/${this.state.chapitre1contenu}`}>
                    <a href="/" >[ Edit ]</a>
                  </Link ></div>
                <TextArea autoHeight
                  style={{ width: "100%", fontSize: "18px", height: "213px", padding: "2% 2%", border: "none", backgroundColor: "white" }}
                  id="outlined-name"
                  margin="normal"
                  variant="outlined"
                  value={this.state.chapitre1contenu}
                  rows="8"
                /> </div>


              <div className="divchapitre">
                <div className="labeltitleArticle">
                  <label>{this.state.chapitre2}</label>
                  <Link to={`/EditArticle/${this.props._id}/${this.state.chapitre2contenu}`}>
                    <a href="/" >[ Edit ]</a>
                  </Link ></div>
                <div style={{ display: "flex" }}>
                  <TextArea autoHeight
                    style={{ width: "80%", fontSize: "18px", padding: "2% 2%", height: "213px", border: "none", backgroundColor: "white" }}
                    id="outlined-name"
                    multiline="5"
                    margin="normal"
                    variant="outlined"
                    value={this.state.chapitre2contenu}
                    rows="8"
                  />
                  <Image src="http://lonelyplanetimages.imgix.net/a/g/hi/t/96b6657bdea025c8d72d59658bba360f-tunisia.jpg?h=768&sharp=10&vib=20" style={{ width: "20%", height: "219px", padding: "1%" }} />
                </div>
              </div>
              <div className="divchapitre">
                <div className="labeltitleArticle">
                  <label>{this.state.chapitre3}</label>
                  <Link to={`/EditArticle/${this.props._id}/${this.state.chapitre3contenu}`}>
                    <a href="/" >[ Edit ]</a>
                  </Link ></div>
                <TextArea autoHeight
                  style={{ width: "100%", fontSize: "18px", padding: "2% 2%", border: "none", height: "213px", backgroundColor: "white" }}
                  id="outlined-name"
                  margin="normal"
                  variant="outlined"
                  value={this.state.chapitre3contenu}
                  rows="8"
                /></div>
              <div className="divchapitre">
                <div className="labeltitleArticle">
                  <label>{this.state.chapitre4}</label>
                  <Link to={`/EditArticle/${this.props._id}/${this.state.chapitre4contenu}`}>
                    <a href="/" >[ Edit ]</a>
                  </Link ></div>
                <TextArea autoHeight
                  style={{ width: "100%", padding: "2% 2%", fontSize: "18px", height: "213px", border: "none", backgroundColor: "white" }}
                  id="outlined-name"
                  margin="normal"
                  variant="outlined"
                  value={this.state.chapitre4contenu}
                  multiline="15"
                  rows="8"
                />
              </div>


            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="SommuryRow">
            <Grid.Column width={3}>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

            </Grid.Column>
            <Grid.Column width={13}>
              <div className="divchapitre">
                <div className="DetailsbibnArticle">
                  <div className="labeltitleArticle">
                    <label>Bibliography</label>
                    <Link to={`/EditArticle/${this.props._id}/${this.state.biblio}`}>
                      <a href="/" >[ Edit ]</a>
                    </Link ></div>
                  <TextArea autoHeight style={{ width: "104%", marginLeft: "-2%", borderRadius: "2%", padding: " 2%", border: "none", fontSize: "18px", height: "213px", backgroundColor: "white" }}
                    id="outlined-name"
                    margin="normal"
                    variant="outlined"
                    value={this.state.biblio}
                    multiline="5"
                    rows="5"
                  />
                </div> </div>
            </Grid.Column>

          </Grid.Row>



        </Grid>
        {/* <div className="shadow-box-topîc z-depth-1"  >
          <TextArea placeholder='Bibliography' className="label-introduction" name= "biblio" onChange={this.onChange}/>
          </div> */}</div>
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
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(ArticleDetails);