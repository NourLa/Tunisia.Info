import React from 'react';
import  TransportIconitem from './TransportIconItem'

const TransportIconlist=(props)=>{
    return(
        props.news.map((el,i)=>{ return <TransportIconitem item ={el}  key={i} />

        })
    )
}
export default  TransportIconlist;