import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {MDBBtn} from "mdbreact";



class ArticleItem extends React.Component {
 
  render() {
    return (
      <div className="Published_Article">
            <div className="article-title">{this.props.article.title}</div>
          <Link to={`/ArticleDetails/${this.props.article._id}`}>
          <MDBBtn outline className="ButtonConsult">Consult Article</MDBBtn>
          </Link>
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
