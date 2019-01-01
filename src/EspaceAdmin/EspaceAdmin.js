import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import ArticleItemAdmin from "./ArticleItemAdmin";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import axios from "axios";
import './EspaceAdmin.css';
import MessagesList from './MessagesList';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";
import { withAlert } from "react-alert";
import { Route, Redirect } from 'react-router';

 
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}
class EspaceAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {  activeIndex: 0,
      logged: this.props.isLogged
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  componentDidMount() {
    this.setState({logged:this.props.isLogged})
    console.log('from didMount '+this.state.logged)
    axios.get("/EspaceAdmin")
    .then(res =>
    {  if (res.data.length !== 0)
    this.props.alert.error("Oh look, an article to confirm !")
      this.props.initArticlesList(res.data)
      console.log(res.data)
    }
);
  }
  renderRedirect = () => {
    if (this.state.logged!==true) {
      console.log('from redirect '+this.state.logged)//
      return <Redirect to='/login' />
    }
  }
  render() {
    const { activeIndex } = this.state                                                                         
    return (
      <div className="Articles-list-Admin">
 <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
        List Of Added Articles :
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
       
          {this.props.ArticleList.map((e,i) => (
       <AlertProvider  template={AlertTemplate}  {...options}>
        <ArticleItemAdmin key={i} article={e} />
      </AlertProvider > 
       ))}
          
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          List Of updated Articles :
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
      
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' /> Received messages:
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <MessagesList/>
        </Accordion.Content>
      </Accordion>
      {this.renderRedirect()}
        </div>
   
    );
  }
}

const mapStateToProps = state => {
  return {
    ArticleList: state.ArticleReducer,
    isLogged: state.LoginReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initArticlesList: Articles => {
      dispatch({
        type: "UPDATE_ARTICLE_LIST1",
        Articles
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAlert (EspaceAdmin));
