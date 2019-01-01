import React,{Component} from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import { Grid, Image } from 'semantic-ui-react';
import { List, Icon, TextArea } from 'semantic-ui-react';
import {  MDBBtn } from 'mdbreact';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { red } from "@material-ui/core/colors";
const styles = {
 fontFamily: 'sans-serif',
 textAlign: 'center',
 Nour: {
  color: 'red',
}
};
//  let data=this.props.articlePrint

class Prints  extends Component {
    
    render() { 
        let m= this.props.h
        console.log(m)
        return (
          
         <div className="Nour" id="Nour">   
              
             <Grid celled>
              <Grid.Row className="SommuryRow">
                <Grid.Column width={16}>
                  <div className="DetailsTitlenArticle">
      
                  <h2 style={{marginLeft:"20%"}}>{m.title}</h2>
      
                  </div>      </Grid.Column>
           </Grid.Row>
        
          
              <Grid.Column width={3}>
                  <div className="SummaryDetailsArticle">
                 <h2>  <span className="cate-text">
                      <span className="cate-text-first">S</span>
                      <span className="cate-text-remain">ummary</span></span>
      </h2> 
        <ul>
            <li>{m.chapitre1}</li>
            <li>{m.chapitre2}</li>
            <li>{m.chapitre3}</li>
            <li>{m.chapitre4}</li>
        </ul>
                     
                 </div> 
                </Grid.Column>
                <ul>
            <li style={{width:"30%", height:"600px"}}>{m.chapitre1contenu}</li>
            <li>{m.chapitre2contenu}</li>
            <li>{m.chapitre3contenu}</li>
            <li>{m.chapitre4contenu}</li>
        </ul>
                {/* <Grid.Column width={10} >
                  <div className="DetailsIntroductionArticle">
                    <div className="labeltitleArticle">
                       <label>Introduction</label>
               
                  
                      </div>
                    <TextArea autoHeight style={{ width: "104%", marginLeft: "-2%", borderRadius: "2%", padding: " 2%", border: "none", fontSize: "18px", height: "213px", backgroundColor: "white" }}
                      className="label-introductionArticle" name="introduction"
                      value={m.introduction}
                      rows="10" />
                  </div>
                </Grid.Column>
              
                 */}
      
                {/* <Grid.Column width={16}>
                  <div className="divchapitre">
                    <div className="labeltitleArticle">
                      <label>{m.chapitre1}</label>
                     </div>
                    <TextArea autoHeight
                      style={{ width: "100%", fontSize: "18px", height: "213px", padding: "2% 2%", border: "none", backgroundColor: "white" }}
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={m.chapitre1contenu}
                      rows="8"
                    /> </div>
      
      
                   <div className="divchapitre">
                     <div className="labeltitleArticle">
                       <label>{m.chapitre2}</label>
                      </div>
                     <div style={{ display: "flex" }}>
                      <TextArea autoHeight
                        style={{ width: "80%", fontSize: "18px", padding: "2% 2%", height: "213px", border: "none", backgroundColor: "white" }}
                        id="outlined-name"
                        multiline="5"
                        margin="normal"
                        variant="outlined"
                        value={m.chapitre2contenu}
                        rows="8"
                      />
                      <Image src="http://lonelyplanetimages.imgix.net/a/g/hi/t/96b6657bdea025c8d72d59658bba360f-tunisia.jpg?h=768&sharp=10&vib=20" style={{ width: "20%", height: "219px", padding: "1%" }} />
                    </div>
                  </div>
                  <div className="divchapitre">
                    <div className="labeltitleArticle">
                      <label>{m.chapitre3}</label>
                    </div>
                    <TextArea autoHeight
                      style={{ width: "100%", fontSize: "18px", padding: "2% 2%", border: "none", height: "213px", backgroundColor: "white" }}
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={m.chapitre3contenu}
                      rows="8"
                    /></div>
                  <div className="divchapitre">
                    <div className="labeltitleArticle">
                      <label>{m.chapitre4}</label>
                    </div>
                    <TextArea autoHeight
                      style={{ width: "100%", padding: "2% 2%", fontSize: "18px", height: "213px", border: "none", backgroundColor: "white" }}
                      id="outlined-name"
                      margin="normal"
                      variant="outlined"
                      value={m.chapitre4contenu}
                      multiline="15"
                      rows="8"
                    />
                  </div>
      
      
                </Grid.Column>
              </Grid.Row>
      */}
              {/* <Grid.Row className="SommuryRow">
                <Grid.Column width={3}>
                  <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Coat_of_arms_of_Tunisia.svg/150px-Coat_of_arms_of_Tunisia.svg.png' />
      
                </Grid.Column>
                <Grid.Column width={13}>
                  <div className="divchapitre">
                    <div className="DetailsbibnArticle">
                      <div className="labeltitleArticle">
                        <label>Bibliography</label>
                    </div>
                      <TextArea autoHeight style={{ width: "104%", marginLeft: "-2%", borderRadius: "2%", padding: " 2%", border: "none", fontSize: "18px", height: "213px", backgroundColor: "white" }}
                        id="outlined-name"
                        margin="normal"
                        variant="outlined"
                        value={m.biblio}
                        multiline="5"
                        rows="5"
                      />
                    </div> 
                       </div>
                       <div>
                    <TextArea value={m.user} className="uernameadd" name= "username" onChange={this.onChange}></TextArea>
      
                 </div>
                </Grid.Column>
      
              </Grid.Row>
      
       */}
      
            </Grid>
         
       
   
      
         
         
             </div>
         
         );
    }
}

export default Prints


// import React,{Component} from "react";
// import { render } from "react-dom";
// import { renderToString } from "react-dom/server";
// import jsPDF from "jspdf";
// const styles = {
//  fontFamily: 'sans-serif',
//  textAlign: 'center',
// };

// const Prints = (m) => (
//  <div>
//    <ul>
//      <li>{m.introduction}</li>
//      <li>line 2</li>
//      <li>line 3</li>
//    </ul>
//  </div>
// )

// const print = (r) => {
//  const string = renderToString(<Prints m={r}/>);
//  const pdf = new jsPDF();
//  pdf.fromHTML(string);
//  pdf.save('pdf')
// }

// class PrintArticle extends Component {
//    render() {
//     let r=this.props.li1
//     console.log(r)
//                return ( <div>
           
//            <button onClick={(r)}>print</button>

//        </div> );
//    }
// }

// export default PrintArticle;