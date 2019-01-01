import React from 'react';
import  TransportServicesitem from './TransportServicesItem'

const TransportServiceslist=(props)=>{
    return(
        props.news.map((el,i)=>{ return <TransportServicesitem item ={el}  key={i} />

        })
    )
}
export default  TransportServiceslist;