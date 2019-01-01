import React from 'react';
import ButtonBases from './LocalTransport.js'
import ButtonBasess from './InternationalTransport.js'

import './InternationalLocalTransport.css'


const InternationalLocalTransport= (props) => {
    return (
        <div className="LocalTransportStation">
        <div className="image">
        <img src=' https://www.inmotionlog.com/wp-content/uploads/2018/03/MAP.png'/>
        <h1 className="text">Tunisia Transport Info</h1>

        </div>
        
        <div className="AboutLocalTransports">
        <h1>About  Tunisia   Transports</h1>
        <span className="InterLocalTransportText">
        Tunisia has a number of international airports to service its sizable tourist trade. Tunis is the center of the transport system as the largest city having the largest port and a light transit system.
            </span>
           
        </div>

        <div className="LocalTransport">
            <ButtonBases />
            
            <ButtonBasess/>
        </div>
       
        </div>
            );
};
export default InternationalLocalTransport;