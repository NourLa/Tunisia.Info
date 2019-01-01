import React from 'react';
import TransportImagelist from './TransportImageList';
const newstab=[{
    id:'1',
    source:'https://inmotionlog.com/wp-content/uploads/2018/05/cropped-25004909_m.jpg',
    title:'AIR FREIGHT  ',
    article: "We partner with the world’s premier air carriers, to deliver the space allocation, competitive price, on-time performance and range of products you need.",
    },
    
    {
    id:'2',
    source:'https://i.pinimg.com/564x/a3/0c/8e/a30c8e65ea8e4eda89ed1dd0dddaa8cd.jpg',
    title:'OCEAN FREIGHT ',
    article:'Our ocean freight experts around the world ensure that your cargo not only gets to its destination on-time, it gets the right treatment every step of the way.',
    
    }]

const TransportImage = (props) => {
    return (
        
        <div className="About-Tunisia-Transport">
        <h1>About  Tunisia Transports</h1>
        <p><span>
        Shipa Freight is a new online platform powered by Agility that makes it easy to get air and ocean freight quotes, book, pay and track your shipments online. With our global network of logistics experts and industry-leading technology, we ensure that your goods arrive safely and reliably every time. Agility offers air, ocean, road freight forwarding, warehousing, distribution, and specialized services in project logistics, chemical logistics and fairs and events in over 100 countries worldwide.
            </span></p>
           

        <div className="tooblar-style">
            <TransportImagelist news={newstab} />
        </div>
       
        </div>
            );
};
export default TransportImage;