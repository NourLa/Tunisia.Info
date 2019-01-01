import React, { Component } from 'react';
import { connect } from "react-redux";
import { MDBInput, MDBBtn } from 'mdbreact';
import {axios} from 'axios';



class ArticleItem1 extends Component {
   constructor(props) {
     super(props);
     this.state = {  name: ''  }
   } 
 
   onEditArticlesUser = () => {console.log( this.props)
            axios.post("/EditArticleUser",this.state.name )
              .then(() => this.props.onAddArticleUserReducerAction(this.state.name),
              )
              .catch(err => alert(err));
          } ;
        onChange = e => {
            this.setState({
             name: e.target.value
            });  
          };
    
  render() {
    
    let data=this.props.article
    console.log(data)
    return (
   
      <div>
    
      <div className="Published_Article">
   
            <div className="article-title">
         <h3>{data.group}</h3> 
        <hr/>
          <div className="title-button-article">
          
    {/* {data.children.map((r,i) =>( ))} */}
       <MDBInput type="textarea"  

                  onChange={this.onChange}
                  value={this.state.name}
                  /> ,
        <MDBBtn outline color="warning"className="Button Submit Add" 
                  onClick={this.onEditArticlesUser}> Edit</MDBBtn>
       
      
    
      </div></div>
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
)(ArticleItem1);

