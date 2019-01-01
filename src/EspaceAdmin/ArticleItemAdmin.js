import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {MDBBtn} from "mdbreact";
import axios from "axios";
import ConsultArticle from './Consulterarticle'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import './EspaceAdmin.css'

class ArticleItemAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }
 
  render() {
    return (
      <div>
      <div className="productItem-container">
            <div className="article-name">{this.props.article.title}</div>
          {/*  */} <Link to={`/ConsulterArticle/${this.props.article._id}`}>   
          
          <MDBBtn outline className="ButtonConsult" >Consult Article</MDBBtn>
          {/*  */}</Link>  
          {/* <button style={{ marginLeft: "7px" }} onClick={this.onRemoveProduct}>
            Remove
          </button> */}
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
)(ArticleItemAdmin);
