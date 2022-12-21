import React from 'react';
import { Link } from 'react-router-dom';

const Item=({info}) =>{
 
    return(

      <Link to={`/detalle/${info.id}`}>
            <h4>{info.name}</h4>
            <img src={info.img}/>
            <p>{info.precio}</p>
      </Link>
    )
}

export default Item;