
import Contador from '../Contador/Contador';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export const ItemDetail =({data})=>{
       const [goToCart, setGoToCart] = useState(false);
  const onAdd =(quantity)=>{
    setGoToCart(true);
  }
    return(
        <div>
            <h1>{data.name}</h1>
            <img src={data.img}/>
            <p>{data.precio}</p>
            <p>{data.stock}</p>
            <p>{data.detalle}</p>
            {
                goToCart
                ?<Link to ='/cart'> Terminar Compra</Link>
                : <Contador initial={1} stock={5} onAdd={onAdd}/>
            }
        </div>
    )
}
export default ItemDetail;