import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { List, Icon, TextArea } from 'semantic-ui-react';
import {axios} from 'axios';
import { connect } from "react-redux";

class EditModal extends Component {
 

  
    constructor(props) {
        const f = props.f;
        super(props);
        this.state = {
          modal: false,
          introduction: f.introduction
        };
      } 
   
      onEditArticlesUser = () => { console.log( this.state)
    
        axios.post('/EditArticleUser', this.state)
          .then(() => this.props.onAddArticleUserReducerAction(this.state),)
          .catch(err => alert(err));
      };

      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
     
    render() { 
        return (
            <Container>
            <Button className="Edit" onClick={this.toggle}>[ Edit ]</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>[Edit Introduction]</ModalHeader>
              <ModalBody>
              <TextArea  
                    className="label-introductionArticle" name="introduction"
                    value={this.state.introduction}
                  
                    onChange={this.onChange}
                    rows="10" />
               </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                <Button color="primary" onClick={this.onEditArticlesUser}>Save changes</Button>
              </ModalFooter>
            </Modal>
          </Container>
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
)( EditModal);