import React from 'react';
import TransportServiceslist from './TransportServicesList';
import  './TransportServicesItems.css';


const newstab=[
    
    {
    id:'1',
    source:'server',
    description:'kkkkkkkkkkkkkkk'
    
    },{
    id:'2',
    source:'truck',
    description:'kkkkkkkkkkkkkkkkkk'

    },
    {
    id:'3',
    source:'shipping fast',
    description:'kkkkkkkkkkkkkk'

    },
    
]

const TransportServices = (props) => {
    return (
        <div className="TunisiaServicesPresentation">
      

        <div className="TunisiaStationServices " >
            <TransportServiceslist news={newstab} />
        </div>
       
        </div>
            );
};
export default TransportServices ;