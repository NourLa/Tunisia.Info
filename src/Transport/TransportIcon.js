import React from 'react';
import TransportIconlist from './TransportIconList';

const newstab=[{
    id:'1',
    source:'bus',
    },
    
    {
    id:'2',
    source:'plane',
    
    },{
    id:'3',
    source:'train',
    },
    
]
/*{
    id:'4',
    source:'ship',
    },*/
const TransportIcon = (props) => {

    return (
        <div className="TunisiaStationPresentation">
       

        <div className="TunisiaStationIcon" >
            <TransportIconlist news={newstab} />
        </div>
       
        </div>
            );
};
export default TransportIcon;