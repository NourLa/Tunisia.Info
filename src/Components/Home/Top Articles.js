import React, { Component } from 'react';
import { MDBContainer, MDBRow,MDBCol, MDBBtn } from 'mdbreact';
import './Home.css';
import Rating from './Rating'

class TopArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
<div className="Section4-Home">
 <div className="TitleTop4">
The Latest Articles
 </div>
<MDBContainer>

 <MDBRow className="MDBtoparticleHome"> 
 {TopArticle.map(item =>    <MDBCol size="5" className="ColumnTop">
   <div >
       <img className="textColumnTopImgHome"  src={item.img} alt="thumbnail" />
      <div className="textColumnTopImg-Rating"> <Rating rating ={item.rating}/></div>
  </div>  
   <div className="textColumnTop">
				<div className="dateColumnTop">
				    <h5>{item.date}</h5>
				</div>
			    <h3>{item.title}</h3>
				<label className="TitleColumnTop"></label>
			    <p className="TitleColumnTopParagrap">{item.topic}</p>
                <MDBBtn outline color="warning"className="Button Read Me4">Read More</MDBBtn>
			</div>
    </MDBCol>
    
    

     )}  </MDBRow><div className="w-100" />   


</MDBContainer>

</div>

          );
    }
}
 
const TopArticle = [
    {id: 1,img:'https://scontent.ftun7-1.fna.fbcdn.net/v/t51.2885-15/41470945_105132023752370_3981890564958109175_n.jpg?_nc_cat=108&_nc_ht=scontent.ftun7-1.fna&oh=53cb51d76b416848497e2baa26cd15e8&oe=5C8D3E54', title:'Carpet Weaver In Kairouan',
     topic:'The originality of the colors, designs and the unique know-how of Tunisian carpets make them truly outstanding', date:'24 Dec', rating:4  },
    {id: 2,img:'https://www.histclo.com/imagef/date/2007/10/p2-1535b.jpg',title:'History',  topic :'Tunisian history is a succession of invasions by a colorful series of rulers. It begins with settlement of coastal areas by Phoenician traders.', date:'19 Sep',  rating:3 },
    {id: 3,img:'https://i.pinimg.com/564x/b3/4e/fa/b34efa3bdeaab398383eb256ca1aee8e.jpg', title:'Kairouan', topic:'In 670AD, Muslims invading the Byzantine kingdom founded the city of Kairouan, which became the Arab capital of Tunisia .', date:'22 Dec',  rating:2},
    {id: 4,img:'https://scontent.ftun7-1.fna.fbcdn.net/v/t51.2885-15/33353355_1865474016838652_4375599349862760448_n.jpg?_nc_cat=100&_nc_ht=scontent.ftun7-1.fna&oh=03f52cc1bbfebf39b6da9cb8fd1690de&oe=5C9AA1E1', title:'Dougga', topic :'Dougga is one place in Tunisia you must visit. This amazing Roman city is complete ! It was never overbuilt like many others.', date:'25 Sep',  rating:5 },

];
export default TopArticles;