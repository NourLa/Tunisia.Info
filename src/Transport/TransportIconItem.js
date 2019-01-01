import React from 'react';
import {  Icon} from 'semantic-ui-react'
import {Popup} from 'semantic-ui-react';
import './TransportIconItem.css';
import { Link} from 'react-router-dom'

 

const TransportIconitem=({item})=>{
    return(   
    <div className='transportIconBloc'>
             <Popup
             trigger={  <Link to={`/transport/map/${item.id}`} >
          <Icon circular inverted color='teal' name={item.source}/>
    
    </Link>  }
      content='Please Click On To See More ...'
      on='hover'
    />
     
    </div>
   )
}
export default TransportIconitem;