import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import {addDoc, collection,getFirestore} from 'firebase/firestore'

const Cart =()=>{
    const{Cart,totalPrice}= useCartContext();

    const orden={
        buyer:{
            name:'Alanis',
            email:'alanis@gmail.com',
            phone:'154444-4444',
            address:'asdfgh'
        },
        items: Cart.map(product=>({id:product.id, title:product.name, price:product.precio, quiantity: product.quantity})),
        total:totalPrice(),
    }
    const handleClick=()=>{
        const db = getFirestore();
        const ordenCollection= collection (db, 'orden');
        addDoc(ordenCollection,orden)
        .then(({id})=> console.log(id))
    }

    if(Cart.length===0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to ='/'>Hacer Compras</Link>
            </>
        );
    }
    return(
        <>
        {
            Cart.map(product=><ItemCart key={product.id} product={product} />)
        }
        <p>
            total: ${totalPrice()}
        </p>
        <button onClick={handleClick}>comprar</button>
        </>
    )
}
export default Cart;