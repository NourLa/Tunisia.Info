import React from 'react';
import {  Icon } from 'semantic-ui-react'
import  './TransportServicesItems.css';






const TransportServicesitem=({item})=>{
    return(
        
    <div className='transportServicesBloc'>
       <a  >
          <Icon circular color='teal'  name={item.source}/>
        </a>
        
        <p>{item.description}</p>
     
    </div>
   )
}
export default TransportServicesitem;