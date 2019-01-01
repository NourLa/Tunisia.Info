

import React from 'react';
import { Tab } from 'semantic-ui-react';
import  SortedArticle from './SorterAlphabetTransport';
import AddArticle from '../EspaceUserTransport/AddAgentTransport.js';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";

// optional cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}
const panes = [
  { menuItem: 'List Of Articles', render: () => <Tab.Pane attached={false}>         <SortedArticle />  </Tab.Pane> },
  { menuItem: 'Add An Article', render: () => <Tab.Pane attached={false}><AlertProvider  template={AlertTemplate}  {...options}>
  <AddArticle />
 </AlertProvider ></Tab.Pane> }
]

const ArticleTabs = () => <Tab menu={{ pointing: true }} panes={panes} />

export default ArticleTabs