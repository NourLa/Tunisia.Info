import React,{Component} from 'react';
import './ArticlesTransport.css';
import ArticleTabs from './ArticleTabsTransport'



class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() { 
        return (   <div className="Tunisia-Articles">

 {/* Section2 */}
 <div className="Section2">  
  <ArticleTabs />   
 {/* <Article1 /> */}

 </div>
 
</div>
         );
    }
}
 
export default Article;