import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './TransportImageItem.css';


const TransportImageitem=({item})=>{
    return(
        
    <div className='transportImageBloc'>
       
        <Card className="transportImageCard ">
      <Image src={item.source} />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Meta>
        </Card.Meta>
        <Card.Description>{item.article}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          see more
        </a>
      </Card.Content>
    </Card>
    </div>
   )
}
export default TransportImageitem;