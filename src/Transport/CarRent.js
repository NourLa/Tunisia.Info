import React, { Component } from 'react';
import { MDBContainer, MDBRow,MDBCol, MDBBtn } from 'mdbreact'


class CarRent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
<div>
 <div className="TitleTop4">
 Car Rental Agency 
 </div>
<MDBContainer>

 <MDBRow> 
 {TopArticle.map(item =>    <MDBCol size="5" className="ColumnTop">
    <img className="textColumnTopImg"  src={item.img} alt="thumbnail" />
    <div className="textColumnTop">
				<div className="dateColumnTop">
				    <h5>{item.name}</h5>
				</div>
			    <h3>{item.title}</h3>
				<label className="TitleColumnTop"></label>
			    <p>{item.topic}</p>
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
    {id: 1,img:'https://i.pinimg.com/564x/65/58/ac/6558ac3e61558278815022e93b07b892.jpg',
    title:'Rent A Car', topic:'On your next jaunt out of town, plan ahead and book a rental car with a brand you can trust',
     name:'Budget'  },
    {id: 2,img:' https://i.pinimg.com/564x/1f/c7/81/1fc7818e914595553a1ff6d9febe0094.jpg',
    title:'Rent A Car',  topic:'Drive away with more money in your pockets and more time on your itinerary.',
    name:'Alamo' },
    {id: 3,img:' https://i.pinimg.com/564x/b5/d3/17/b5d317623022de47a21fc04ca59e7320.jpg', 
    title:'Rent A Car',  topic:' Whether your travels take you by plane or you are prepping for a road trip, you will find a Hertz rental car location nearby. ',
    name:'Hertz' },
    {id: 4,img:'https://i.pinimg.com/564x/55/77/f7/5577f780543808d30b5d5d42c1722481.jpg',
    name:'Payless',
    title:'Rent A Car',   topic:'You will get the best travel deals and offers you want not find anywhere else,Powered by Payless.',
    },

];
export default CarRent;