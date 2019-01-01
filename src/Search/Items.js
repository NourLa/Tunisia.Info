import React from 'react';
const Newsitem=({item})=>{
    return(<div className='newsitem-app'>
        <h2>{item.title}</h2>

        <p>{item.article}</p>
    </div>)
}
export default Newsitem;