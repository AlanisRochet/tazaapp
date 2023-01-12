import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const Cart =()=>{
    const{cart,totalPrice}= useCartContext();
    if(cart.length===0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to ='/'>Hacer Compras</Link>
            </>
        )
    }
    return(
        <div>hay cosas </div>
    )
}
export default Cart;