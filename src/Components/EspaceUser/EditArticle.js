import React, { Component } from 'react';
import {axios} from 'axios';
import { MDBInput, MDBBtn } from 'mdbreact';
import { connect } from "react-redux";
import ArticleItem from "../Articles/ArticleItem"


class EditArticleUserAConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }}
// componentDidMount =() => { 
//   axios.get(`/EditArticleUserAConfirm/${this.state.variable}`)
//   .then(res => this.props.initArticlesList(res.data)
// );
// } 

render() {
           return (
             <div> 
  {
    this.props.ArticlesList.map((e,i) =>(
  <ArticleItem key={i} article={e} />
  // <p>{e.title}</p>
  )) 
  
}   
    
    
   </div>
            ); }
}
         
const mapStateToProps = state => {
return {
  ArticlesList: state.ArticleReducer
};
};

const mapDispatchToProps = dispatch => {
return {
  initArticlesList: Articles => {
    dispatch({
      type: "UPDATE_ARTICLE_LIST",
      Articles
    });
  }
};
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(EditArticleUserAConfirm);


