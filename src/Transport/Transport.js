import React, { Component } from 'react';
import { MDBContainer, MDBRow,MDBCol,MDBBtn } from 'mdbreact';
import { Icon } from 'semantic-ui-react'
import TransportIcon from './TransportIcon.js'
import CarRent from './CarRent';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Footer/Footer'
import TransportServices from './TransportServices.js'
import InternationalLocalTransport from './InternationalLocalTransport.js'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

class Transport extends Component {
    
    render() { 
        return ( <div className="Tunisia-HomeTransport">
              <NavBar />


{/* Section2 */}
<div className="Section2">
    {/*   
      <Example />
        <Swiper/>  */}


  <br />
  <div className="DetailsSection" style={{height:"140px"}} >
  < h3 className="textExploreTransport" >
  Tunisia Transport
   </ h3>
  {/* Details of tunisia */}
 {/*<ul className="divers">
  <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='map marker alternate' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          A country in North Africa </span>
      </div></li>
    <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='spy' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          population: 11,300,000
        </span>
      </div>
    </li>
    <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='language' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          Official language:  Arabic </span>
      </div></li>
    <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='map' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          Capital: Tunis </span>
      </div></li>
      
    </ul>*/}
  </div>

  {/* GridView */}
  <div className="section3-homeTransport" >
    <div className="Container" >
      {/* <div className="widget-title">
        <h3> <Icon name='gem' /> Sections :</h3>
      </div> */}

      <MDBContainer  >


<MDBRow  classname="row RowTransport" style={{ marginBottom: "2%",width:"122%", backgroundColor: "white", padding: "1% 2%", border: "1.5px solid teal", borderRadius: "1%", marginLeft:"-11%" }} >
       <MDBCol>
       <img src="https://www.inmotionlog.com/wp-content/uploads/2018/04/12044713_m.jpg" alt="thumbnail" className="img-thumbnail" style={{ width: "100%", height: "400px" }} />
       </MDBCol>
       <MDBCol style={{padding: "5% 3%"}}>
          <span className="cate-text">
            <span className="cate-text-first">A</span>
            <span className="cate-text-remain">viation</span></span>
          <p className="paragraph-section"><Icon name='quote left' />
            <div className="blockquote" />
            The Tunisian Civil Aviation and Airports Authority (OACA) is a Tunisian public sector organization responsible for the management, operation, maintenance and development of international airports, as well as regional and local control of air navigation and its services in Tunisia.      </p>
       
            <MDBBtn outline color="warning">Read More</MDBBtn>
</MDBCol> </MDBRow>
{/* <hr style={{ marginBottom: "2%", backgroundColor: "transparent", boderTop: "none", borderBottom: "2px dashed white" }} /> */}

<MDBRow classname="row RowTransport" style={{ marginBottom: "2%",width:"122%", backgroundColor: "white", padding: "1% 2%", border: "1.5px solid teal", marginLeft:"-11%" }} >
        <MDBCol style={{ padding:" 4% 3%"}}>
          <span className="cate-text1">
            <span className="cate-text1-first">P</span>
            <span className="cate-text-remain">orts and Harbours</span></span>
          <p className="paragraph-section">
            <Icon name='quote left' /> <div className="blockquote" />
            Tunis is the most significant port in Tunisia with other significant ports on the Mediterranean Sea including Bizerte, Gabès, La Goulette, Sfax, Sousse and Zarzis. Tunisia's merchant marine consisted of 14 ships as at 2002        </p> 
        <MDBBtn outline color="warning"className="Button Read Me2">Read More</MDBBtn>
        </MDBCol> <MDBCol>
          <img src="https://i.pinimg.com/564x/51/b9/cb/51b9cba92034fe2ccc0cadc43a1587b7.jpg" alt="thumbnail" className="img-thumbnail" style={{ width: "100%",height: "400px" }} />
         </MDBCol>
</MDBRow>
        {/* <hr style={{ backgroundColor: "transparent", boderTop: "none", borderBottom: "2px dashed white" }} /> */}

        <MDBRow classname="RowTransport" style={{ marginBottom: "2%",width:"122%", backgroundColor: "white", padding: "1% 2%", border: "1.5px solid teal", marginLeft:"-11%" }} >
       <MDBCol>
       <img src="https://i.pinimg.com/564x/a0/e6/0b/a0e60bb0ea76441af71fb44bb8343865.jpg" alt="thumbnail" className="img-thumbnail" style={{ width: "100%", height: "400px" }} />
       </MDBCol>
       <MDBCol style={{padding: "5% 3%"}}>
          <span className="cate-text">
            <span className="cate-text-first">R</span>
            <span className="cate-text-remain">ailways
</span></span>
          <p className="paragraph-section"><Icon name='quote left' />
            <div className="blockquote" />
            Tunisia inherited much of its rail transport system from the French and the Tunisian Government has developed infrastructure further. The railways are operated by the Société Nationale de Chemins de Fer Tunisiens (SNCFT), the Tunisian national railway.
            
      </p>
       
            <MDBBtn outline color="warning">Read More</MDBBtn>
</MDBCol> </MDBRow>
{/* <hr style={{ marginBottom: "2%", backgroundColor: "transparent", boderTop: "none", borderBottom: "2px dashed white" }} /> */}

<MDBRow  classname="RowTransport" style={{ marginBottom: "2%",width:"122%", backgroundColor: "white", padding: "1% 2%", border: "1.5px solid teal",  marginLeft:"-11%" }} >
        <MDBCol style={{ padding:" 4% 3%"}}>
          <span className="cate-text1">
            <span className="cate-text1-first">H</span>
            <span className="cate-text-remain">ighways</span></span>
          <p className="paragraph-section">
            <Icon name='quote left' /> <div className="blockquote" />
            As of 2004, there were 18,997 km of highway including 12,310 of paved road and 6,387 of unpaved road. The major cities are all linked by road through the interior.        </p> 
        <MDBBtn outline color="warning"className="Button Read Me2">Read More</MDBBtn>
        </MDBCol> 
        <MDBCol>
          <img src="https://i.pinimg.com/564x/0d/7d/9d/0d7d9d4859b43a7f0db1ca659707e494.jpg" alt="thumbnail" className="img-thumbnail" style={{ width: "100%",height: "400px" }} />
         </MDBCol>
</MDBRow>
{/*<MDBRow style={{ marginBottom: "2%",width:"122%", backgroundColor: "white", padding: "1% 2%", border: "1.5px solid teal", borderRadius: "1%", marginLeft:"-11%" }} >
       <MDBCol>
       <img src="https://i.pinimg.com/564x/2f/e6/8a/2fe68abc8867a6992c9b7222ea0bf296.jpg" alt="thumbnail" className="img-thumbnail" style={{ width: "100%", height: "400px" }} />
       </MDBCol>
       <MDBCol style={{padding: "5% 3%"}}>
          <span className="cate-text">
            <span className="cate-text-first">H</span>
            <span className="cate-text-remain">istory Of Tunisia</span></span>
          <p className="paragraph-section"><Icon name='quote left' />
            <div className="blockquote" />
            Tunisia’s history is actually a rich and storied one:  from the ruins of Carthage, whose ruler Hannibal dared to challenge Rome, to the glories of medieval Islam and into the forward-facing modern period.
      </p>
       
            <MDBBtn outline color="warning">Read More</MDBBtn>
    </MDBCol> </MDBRow>*/}
{/* <hr style={{ marginBottom: "2%", backgroundColor: "transparent", boderTop: "none", borderBottom: "2px dashed white" }} /> */}


      
      </MDBContainer></div>
      
    {/* <Pictures />  */}
    {/* lastArticles */}

    {/* < div className="TopArticles">
      {/* <div className="widget-title"><h3> <Icon name=' heart' /> Articles : Top 5</h3></div> */}
      {/* <div className="shadow-box-example1 z-depth-1" > */}
        {/* <AdvancedGridList />
        
        </div>*/}
        {/* </div>  */}
        <div className="" >
    {/*   
      <Example />
        <Swiper/>  */}


  </div>
  <br />
  <div className="DetailsSectionTransport">
  < h3 className="textExploreTransport" >
  Tunisia Transport Station
   </ h3>
   <TransportIcon/>
  {/* Details of tunisia */}
 {/*<ul className="divers">
  <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='map marker alternate' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          A country in North Africa </span>
      </div></li>
    <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='spy' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          population: 11,300,000
        </span>
      </div>
    </li>
    <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='language' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          Official language:  Arabic </span>
      </div></li>
    <li className="divers-img">
      <div className="iconeimg1">
        <Icon name='map' color='white' size='huge' />
        <span className="tours-type-icons__item__content">
          <br />
          Capital: Tunis </span>
      </div></li>
      
    </ul>*/}
  </div>
  </div><CarRent/>
</div>
           {/*<NavBar/>
            <TopArticles/>

            <InternationalLocalTransport/>
<TransportIcon/>

    
           < TransportImage/>*/}
           <Footer />
           <ScrollUpButton />
        </div> );
    }
}
 
export default Transport ;