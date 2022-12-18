import React from 'react';
import Contador from '../Contador/Contador';
const Item=({info}) =>{
    return(
        <div>
            <h1>{info.name}</h1>
            <p>{info.precio}</p>
            <Contador initial={1} stock={5}/>
        </div>
    )
}

export default Item;