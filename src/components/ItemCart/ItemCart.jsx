import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart=({product}) =>{
    const {removeProduct}= useCartContext();
    return(
        <div>
            <img src={product.img} alt={product.name}/>
            <div>
                <p>Titulo:{product.name}</p>
                <p>Cantidad:{product.quantity}</p>
                <p>Precio u.:{product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio}</p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
export default ItemCart;