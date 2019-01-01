import React,{Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Articles.css';
import ArticleTabs from './ArticleTabs'

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() { 
        return (   <div className="Tunisia-Articles">
         <NavBar />

 {/* Section2 */}
 <div className="Section2-Article">  
  <ArticleTabs />   
 {/* <Article1 /> */}

 </div>
 
</div>
         );
    }
}
 
export default Article;