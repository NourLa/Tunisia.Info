import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";
import Home from "../Components/Home/Home";
import ArticleList from '../Components/Articles/ArticleList';
import EspaceAdmin from '../EspaceAdmin/EspaceAdmin';
import ArticleDetails from '../Components/Articles/Article1'
import EditArticleUserAConfirm from '../Components/EspaceUser/EditArticle'
import ConsultArticle from '../EspaceAdmin/Consulterarticle'
import Transport from '../Transport/Transport'
import BusStation  from '../Transport/BusStation.js'
import Airport from '../Transport/Airport.js'
import TrainStation from '../Transport/TrainStation.js'
import ContainerTabs from '../Tourism/Components/ContainerTabs/ContainerTabs'
import GovItemsList from '../Tourism/Components/GovItemsList/GovItemsList'
import CatItemsList from '../Tourism/Components/CatItemsList/CatItemsList'
import Attraction from '../Tourism/Components/Attraction/Attraction'
import Attraction2 from '../Tourism/Components/Attraction/Attraction2'
import LoginAdmin from '../EspaceAdmin/LoginAdmin';



const options = {
    position: 'bottom center',
    timeout: 10000,
    offset: '30px',
    transition: 'scale'
  }


class Routes extends Component {
   
    render() { 
        return ( <div>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/Articles"  component={ArticleList}/>
        {/* <Route exact path="/Articles/add-article" component={AddArticle} /> */}
        <Route exact path="/EspaceAdmin"component={() =>
          <AlertProvider  template={AlertTemplate}  {...options}>
        <EspaceAdmin />
         </AlertProvider >
         } />
        {/* <Route exact path="/" render={() => <ArticleItemAdmin />} /> */}
        <Route
          exact
          path="/ArticleDetails/:id"
          render={props => (
            <ArticleDetails
              _id={props.match.params.id}
              data={this.props.data}
            />
          )}
        />
       <Route
          exact
          path="/EditArticleUserAConfirm/:variable"
          render={props => (
            <EditArticleUserAConfirm
            variable={props.match.params.variable}
            //  data={this.props.data}
            />
          )}
        /> 
        <Route
          exact
          path="/ConsulterArticle/:id"
          component={props => <ConsultArticle _id={props.match.params.id}
          data={this.props.data} />}
        />
   <Route
          exact
          path="/login"
          component={props => <LoginAdmin />}
        /> 
          <Route exact path="/Transport/Home" component={Transport} />
          <Route exact path="/transport/map/1" render={ (props)=><BusStation  id={props.match.params.id} />}/>
          <Route exact path="/transport/map/2" render={ (props)=><Airport  id={props.match.params.id} />}/>
          <Route exact path="/transport/map/3" render={ (props)=><TrainStation id={props.match.params.id} />}/>
          <Route exact path="/tourism" component={ContainerTabs}/>
        <Route exact path="/tourism/govdetails" component={GovItemsList}/>
        <Route exact path='/tourism/govdetails/:_id' render={props=><Attraction _id={props.match.params._id}/>}/>
        <Route exact path="/tourism/catdetails" component={CatItemsList}/>
        <Route exact path='/tourism/catdetails/:_id' render={props=><Attraction2 _id={props.match.params._id}/>}/>

         
        {/*<Route exact path="/User" component={AddArticle}/>*/}
          { /*<Route exact path="/ArticlesTransport"  component={ArticleList}/>
           <Route exact path="/EspaceAdminTransport"component={() =>
          <AlertProvider  template={AlertTemplate}  {...options}>
        <EspaceAdmin />
         </AlertProvider >
         } />*/}
        {/* <Route exact path="/" render={() => <ArticleItemAdmin />} /> */}
        {/*<Route
          exact
          path="/ArticleDetailsTransport/:id"
          render={props => (
            <ArticleItem
              _id={props.match.params.id}
              data={this.props.data}
            />
          )}
          />
     
        <Route
          exact
          path="/ConsulterArticle/:id"
          render={props => <ConsultArticle _id={props.match.params.id} />}
        />
        <Route exact path="/search" component={Search} />*/}


        </div> );
    }
}
 
export default Routes ;