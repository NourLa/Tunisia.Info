import React, { Component } from 'react';
import {MDBBtn,MDBIcon} from 'mdbreact';
import { Button} from 'semantic-ui-react'
import FormsPage from './FormulaireContactUS'

class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
<div className="contactusdetails">
< h3 className="textExplore" style={{backgroundColor: "white"}} >
          CONTACT US
         </ h3>
         < div className="contactinfo-form">
         <div class="contact-inHome">
					<h4>Connect With Us :</h4>
					<p><strong>Phone : +216 50 757 327</strong></p>
					<p><strong>Email : name@example.com</strong></p>
					<p class="addr"> <strong>Adresse : Rue des Orangers, Khezama, Sousse</strong></p>
					<ul class="social-icons2">
                    <Button circular color='facebook' icon='facebook f' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus g' />
					</ul>
				</div>
                <div class="contact-form">
                <FormsPage />
                </div>
                
                </div>
</div>

        );
    }
}
 
export default Contactus;