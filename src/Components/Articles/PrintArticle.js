import React,{Component} from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import Prints from './PrintArticleList'
const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
   };


const print = (p) => {
 const string = renderToString(<Prints h={p}/>);
 const pdf = new jsPDF();
 var elementHandler = {
    '#Nour': function (element, renderer) {
      return true;
    }
  };
 pdf.fromHTML(string,
    15,
    15,
    {
        'width': 180,
    //   'color': 'red','elementHandlers': elementHandler
    });
    
 pdf.save('pdf')
}
 
class PrintArticle extends Component {
   render() {   let p=this.props.li1
    console.log(p)
               return ( <div>
           
           <button onClick={() =>print (p)}>print</button>

       </div> );
   }
}

export default PrintArticle;