import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Icon, TextArea } from 'semantic-ui-react';
import {  MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react';
import PrintArticle from '../Articles/PrintArticle'
import NavbarPage from '../NavBar/NavBar';
import EditModal from './EditModal';


class ArticleItem extends React.Component {

  render() {
    let data=this.props.article
    console.log(data)
    return (
    <div className="ArticleDetails-Tunisia">
    <NavbarPage />
    <div className="section2-addArticle">
    {data.children.map((r,i) =>( 
      <Grid celled>
        <Grid.Row className="SommuryRow">
          <Grid.Column width={16}>
            <div className="DetailsTitlenArticle">
              {/* <div className="labeltitleArticle">
        <label>Title</label>
        <Link to={`/EditArticleUserAConfirm/${this.props._id}/${this.state.title}`}>
      <a href="/" >[ Edit ]</a>
      </Link ></div>  */}

              <h2
                className="MDBInputTitleDetails"
              >{r.title}</h2>

            </div>      </Grid.Column>
        </Grid.Row>

        <Grid.Row className="SommuryRow">
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
                  value={r.chapitre1}
                  name="title"

                />
                </List.Item>
                <List.Item as='a' style={{ display: "flex" }}> <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  value={r.chapitre2}
                  name="chapitre2"
                /></List.Item>
                <List.Item as='a' style={{ display: "flex" }}>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    value={r.chapitre3}
                    name="chapitre3"
                  />

                </List.Item>
                <List.Item as='a' style={{ display: "flex" }}> </List.Item><input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  value={r.chapitre4}
                  name="chapitre4"
                />
              </List>
            </div>
          </Grid.Column>
          <Grid.Column width={10} >
            <div className="DetailsIntroductionArticle">
              <div className="labeltitleArticle">
                 <label>Introduction</label>
             <EditModal f={r}/>
          
                </div>
              <TextArea autoHeight style={{ width: "104%", marginLeft: "-2%", borderRadius: "2%", padding: " 2%", border: "none", fontSize: "18px", height: "213px", backgroundColor: "white" }}
                className="label-introductionArticle" name="introduction"
                value={r.introduction}
                rows="10" />
            </div>
          </Grid.Column>
          <Grid.Column width={3} >
            <div className="OperationsArticle">
          <PrintArticle li1={r} /> 
          {/* <button onClick={print()}>print</button> */}

         {/* let li1={r.title} */}
          {/* {
            console.log({r.title})
        }
            <MDBBtn outline color="warning"className="ButtonExportPDF">Export Format PDF</MDBBtn> */}
            </div>
          </Grid.Column>
          

          <Grid.Column width={16}>
            <div className="divchapitre">
              <div className="labeltitleArticle">
                <label>{r.chapitre1}</label>
                <Link to={`/EditArticleUserAConfirm/${r.chapitre1contenu}`}>
                  <a href="/" >[ Edit ]</a>
                </Link ></div>
              <TextArea autoHeight
                style={{ width: "100%", fontSize: "18px", height: "213px", padding: "2% 2%", border: "none", backgroundColor: "white" }}
                id="outlined-name"
                margin="normal"
                variant="outlined"
                value={r.chapitre1contenu}
                rows="8"
              /> </div>


            <div className="divchapitre">
              <div className="labeltitleArticle">
                <label>{r.chapitre2}</label>
                <Link to={`/EditArticleUserAConfirm/${r.chapitre2contenu}`}>
                  <a href="/" >[ Edit ]</a>
                 </Link ></div>
              <div style={{ display: "flex" }}>
                <TextArea autoHeight
                  style={{ width: "80%", fontSize: "18px", padding: "2% 2%", height: "213px", border: "none", backgroundColor: "white" }}
                  id="outlined-name"
                  multiline="5"
                  margin="normal"
                  variant="outlined"
                  value={r.chapitre2contenu}
                  rows="8"
                />
                <Image src="http://lonelyplanetimages.imgix.net/a/g/hi/t/96b6657bdea025c8d72d59658bba360f-tunisia.jpg?h=768&sharp=10&vib=20" style={{ width: "20%", height: "219px", padding: "1%" }} />
              </div>
            </div>
            <div className="divchapitre">
              <div className="labeltitleArticle">
                <label>{r.chapitre3}</label>
                <Link to={`/EditArticleUserAConfirm/${r.chapitre3contenu}`}>
                  <a href="/" >[ Edit ]</a>
                </Link ></div>
              <TextArea autoHeight
                style={{ width: "100%", fontSize: "18px", padding: "2% 2%", border: "none", height: "213px", backgroundColor: "white" }}
                id="outlined-name"
                margin="normal"
                variant="outlined"
                value={r.chapitre3contenu}
                rows="8"
              /></div>
            <div className="divchapitre">
              <div className="labeltitleArticle">
                <label>{r.chapitre4}</label>
                <Link to={`/EditArticleUserAConfirm/${r.chapitre4contenu}`}>
                  <a href="/" >[ Edit ]</a>
                </Link ></div>
              <TextArea autoHeight
                style={{ width: "100%", padding: "2% 2%", fontSize: "18px", height: "213px", border: "none", backgroundColor: "white" }}
                id="outlined-name"
                margin="normal"
                variant="outlined"
                value={r.chapitre4contenu}
                multiline="15"
                rows="8"
              />
            </div>


          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="SommuryRow">
          <Grid.Column width={3}>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Coat_of_arms_of_Tunisia.svg/150px-Coat_of_arms_of_Tunisia.svg.png' />

          </Grid.Column>
          <Grid.Column width={13}>
            <div className="divchapitre">
              <div className="DetailsbibnArticle">
                <div className="labeltitleArticle">
                  <label>Bibliography</label>
                  <Link to={`/EditArticleUserAConfirm/${r.biblio}`}>
                    <a href="/" >[ Edit ]</a>
                  </Link ></div>
                <TextArea autoHeight style={{ width: "104%", marginLeft: "-2%", borderRadius: "2%", padding: " 2%", border: "none", fontSize: "18px", height: "213px", backgroundColor: "white" }}
                  id="outlined-name"
                  margin="normal"
                  variant="outlined"
                  value={r.biblio}
                  multiline="5"
                  rows="5"
                />
              </div> 
                 </div>
                 <div>
              <TextArea value={r.user} className="uernameadd" name= "username" onChange={this.onChange}></TextArea>

           </div>
          </Grid.Column>

        </Grid.Row>



      </Grid>
   
    ))}
        </div>
  </div>


  );
}
}
    

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
  
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleItem);
