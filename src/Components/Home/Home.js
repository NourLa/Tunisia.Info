import React, { Component } from 'react';
import { MDBContainer, MDBRow,MDBCol,MDBBtn } from 'mdbreact';
import { Icon } from 'semantic-ui-react'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import './Home.css';
import NavBar from '../NavBar/NavBar';
import CarouselPage from './HomeCarousel';
import TopArticles from './Top Articles';
import Contactus from './ContactUs/Contactus';
import Footer from '../../Footer/Footer'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div className="Tunisia-Home"> 
  <div class="grid-container">
     <div> <NavBar /></div>
      {/* Section2 */}
      <div className="Section2">
      <div class="grid-container">
        <div className="shadow-box-example z-depth-1" >
          {/*   
            <Example />
              <Swiper/>  */}

          <CarouselPage />

        </div>
        <br />
        <div className="DetailsSectionHome">
        < h3 className="textExplore" >
          Tunisia : Informations
         </ h3>
        {/* Details of tunisia */}
        <ul className="divers">
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
            
        </ul></div>

        {/* GridView */}
        <div className="section3-home" >
          <div className="Container" >
            {/* <div className="widget-title">
              <h3> <Icon name='gem' /> Sections :</h3>
            </div> */}

            <MDBContainer  >


    <MDBRow className="MDBRowDetailsHome" >
             <MDBCol>
             <img src="https://i.pinimg.com/564x/95/39/e9/9539e92eb6a13f549f9747ab0f75afe3.jpg" alt="thumbnail" className="img-thumbnail" style={{ width: "100%", height: "400px" }} />
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
  </MDBCol> </MDBRow>
    {/* <hr style={{ marginBottom: "2%", backgroundColor: "transparent", boderTop: "none", borderBottom: "2px dashed white" }} /> */}

    <MDBRow className="MDBRowDetailsHome" >
              <MDBCol style={{ padding:" 4% 3%"}}>
                <span className="cate-text1">
                  <span className="cate-text1-first">T</span>
                  <span className="cate-text-remain"> ourism In Tunisia</span></span>
                <p className="paragraph-section">
                  <Icon name='quote left' /> <div className="blockquote" />
                  Tunisia has many wonderful tourist resorts.With a balmy, sand-fringed Mediterranean coast, scented with jasmine and sea breezes, and where the fish on your plate is always fresh, Tunisia is prime territory for a straightforward sun-sand-and-sea holiday. But beyond the beaches, it’s a thrilling, underrated destination where distinct cultures and incredible extremes of landscape – forested coastlines, Saharan sand seas in the south – can be explored in just a few days.
              </p> 
              <MDBBtn outline color="warning"className="Button Read Me2">Read More</MDBBtn>
              </MDBCol> <MDBCol>
                <img src="https://i.pinimg.com/564x/c6/76/6a/c6766a314e416d569400856db10d5113.jpg" alt="thumbnail" className="img-thumbnail" style={{ width: "100%",height: "400px" }} />
               </MDBCol>
  </MDBRow>
              {/* <hr style={{ backgroundColor: "transparent", boderTop: "none", borderBottom: "2px dashed white" }} /> */}

   <MDBRow className="MDBRowDetailsHome" >
   <MDBCol>
                <img src={require('../TotalPictures/transport.jpg')} alt="thumbnail" className="img-thumbnail" style={{ width: "100%", height: "400px"}} />
                
             </MDBCol>
              <MDBCol style={{padding: "5% 3%"}}>
                <span className="cate-text2">
                  <span className="cate-text2-first">T</span>
                  <span className="cate-text-remain"> ranport In Tunisia</span></span>
                <p className="paragraph-section">
                  <Icon name='quote left' />
                  <div className="blockquote" />
                  When moving abroad, traveling will probably be part of your every day life. As a modern and developed country, Tunisia hosts a wide transport network which will allow you travel anywhere across the country, especially in the capital city. Take the time to inquire on the different means of transport available and choose the one which best suits your needs.
        </p>
        <MDBBtn outline color="warning" className="Button Read Me3" >Read More</MDBBtn>
        </MDBCol> </MDBRow>
            
            </MDBContainer></div>
            
          {/* <Pictures />  */}
          {/* lastArticles */}
    
          {/* < div className="TopArticles">
            {/* <div className="widget-title"><h3> <Icon name=' heart' /> Articles : Top 5</h3></div> */}
            {/* <div className="shadow-box-example1 z-depth-1" > */}
              {/* <AdvancedGridList />
              
              </div>*/}
              {/* </div>  */}
           
        </div>
       
      <div>  <TopArticles /></div>
      <div> <Contactus /></div> 
        <ScrollUpButton />
        <Footer />
     </div> </div></div></div>
   
    );
  }
}

export default Home;