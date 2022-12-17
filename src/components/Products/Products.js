import React, { useState } from 'react';
import Card from '../Card/Card'

const Products = () =>{
    const[products, setProducts] = useState ([
        {id:'1', name: 'taza 1', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'2', name: 'taza 2', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'3', name: 'taza 3', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'4', name: 'taza 4', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'5', name: 'taza 5', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'6', name: 'taza 6', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'7', name: 'taza 7', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'8', name: 'taza 8', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'9', name: 'taza 9', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'10', name: 'taza 10', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'11', name: 'taza 11', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'12', name: 'taza 12', categoria:'taza', stock:'5', precio:'1950',img: '../img/taza-stich.png'},
        {id:'13', name: 'taza 13', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'14', name: 'taza 14', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'15', name: 'taza 15', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'},
        {id:'16', name: 'taza 16', categoria:'taza', stock:'5', precio:'1950', img: '../img/taza-stich.png'}
    ]);
    return(
    <div>
        {products.map((products)=>{
            return (
                <div>
                    <Card  img= {products.img} name={products.name} precio={products.precio}/>
                </div>
            )
        })}
    </div>
    );
}
export default Products;