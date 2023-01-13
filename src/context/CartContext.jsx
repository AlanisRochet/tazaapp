import React,{useState, useContext} from 'react';
const CartContext = React.createContext([]);

export const useCartContext =()=> useContext(CartContext);

const CartProvider=({children})=>{
const [Cart, setCart] = useState([]);

const addProduct=(item, quantity)=>{
    let newCart;
    let product=Cart.find(product=>product.id===item.id);
    if(product){
        product.quantity+= quantity;
        newCart=[...Cart];
    }else{
        product={...item,quantity:quantity}
        newCart=[...Cart,product];
    }
    setCart(newCart)
}

const totalPrice=()=>{
    return Cart.reduce((prev, act)=> prev +act.quantity*act.precio,0);

}

const totalProducts =()=> Cart.reduce((acumulador,productoActual)=>acumulador+ productoActual.quantity,0);


const clearCart=() => setCart([]);

const isInCart=(id) =>Cart.find(product =>product.id===id) ? true :false;

const removeProduct =(id)=> setCart(Cart.filter(product =>product.id !==id));


    return(
        <CartContext.Provider value ={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            Cart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;