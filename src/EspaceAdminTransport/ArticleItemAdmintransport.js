import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {MDBBtn} from "mdbreact";
import './EspaceAdminTransport.css'

class ArticleItemAdmin extends React.Component {
 
  render() {
    return (
      <div className="productItem-container">
            <div className="article-name">{this.props.article.title}</div>
          <Link to={`/ConsulterArticle/${this.props.article._id}`}>
          <MDBBtn outline className="ButtonConsult">Consult Article</MDBBtn>
          </Link>
          {/* <button style={{ marginLeft: "7px" }} onClick={this.onRemoveProduct}>
            Remove
          </button> */}
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
)(ArticleItemAdmin);
