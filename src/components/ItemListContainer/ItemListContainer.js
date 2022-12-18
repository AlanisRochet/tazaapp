import React, {useEffect, useState} from "react";
import Contador from '../Contador/Contador'
import ItemList from '../ItemList/ItemList'

const productos =[
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
];

export const ItemListContainer = ({texto})=>{
  const [data,setData] = useState([]);
  useEffect(() =>{
    const getData =new Promise(resolve=>{
      setTimeout (()=>{
        resolve(productos)
      }, 3000)
    });
      getData.then(res => setData(res))

  }, [])

  const onAdd =(quantity)=>{
    console.log ('Compraste ${quantity}unidades');
  }
  return(
    <>
    <Contador initial={1} stock={5} onAdd={onAdd}/>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer;
