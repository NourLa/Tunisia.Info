import React from 'react';
import  TransportImageitem from './TransportImageItem'

const TransportImagelist=(props)=>{
    return(
        props.news.map((el,i)=>{ return <TransportImageitem item ={el}  key={i} />

        })
    )
}
export default  TransportImagelist;