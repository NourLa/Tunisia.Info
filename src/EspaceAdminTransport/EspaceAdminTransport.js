import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import ArticleItemAdmin from "./ArticleItemAdmintransport";
import { connect } from "react-redux";
import axios from "axios";
import './EspaceAdminTransport.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";
import { withAlert } from "react-alert";


const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}
class EspaceAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {  activeIndex: 0 }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  componentDidMount() {
    axios.get("/EspaceAdminTransport")
    .then(res =>
    {  if (res.data !== '')
    this.props.alert.error("Oh look, an article to confirm !")
      this.props.initArticlesList(res.data)}
);
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
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
            select a breed of dog that they find to be compatible with their own lifestyle and
            desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private
            owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
            owner allows you to assess the pedigree and upbringing of your dog before choosing to
            take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
            who may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
        </div>
   
    );
  }
}

const mapStateToProps = state => {
  return {
    ArticleList: state.ArticleReducer
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
)(withAlert (EspaceAdmin));
