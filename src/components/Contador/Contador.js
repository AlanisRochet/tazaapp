import React, {useState} from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

export const Contador =({initial, stock, agregar})=>{
    const[count, setCount]= useState (initial);

    const resta =()=>{
        setCount(count - 1);
    }

    const suma =()=>{
        setCount (count + 1);
    }
      

    return(
        <div>
            <button disabled={count <=1} onClick={resta}>-</button>
            <span>{count}</span>
            <button disabled={count >=stock}  onClick={suma}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={()=> agregar(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
  
}
export default Contador;