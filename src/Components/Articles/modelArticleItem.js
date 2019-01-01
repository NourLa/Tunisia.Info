import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {MDBBtn} from "mdbreact";


class ModelArticleItem extends React.Component {
 
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
          
    {data.children.map((r,i) =>( 
      <p>{r.title}
      
      {/* console.log( this.props.article) */}
      <Link to={`/ArticleDetails/${r._id}`}>
          <MDBBtn outline className="ButtonConsult">Consult Article</MDBBtn>
          </Link></p> 
      )) 
      }
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
)(ModelArticleItem);
