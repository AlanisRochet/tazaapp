import React from 'react';
import Contador from '../Contador/Contador';

const Card = (props) =>{
    
    return(
        <div>
            <img scr={props.img}/>
            <h1>{props.name}</h1>
            <p>{props.precio}</p>
            <Contador initial={1} stock={5}/>
            
        </div>
    )
}
export default Card;