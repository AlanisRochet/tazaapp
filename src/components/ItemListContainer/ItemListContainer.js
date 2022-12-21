import React, {useEffect, useState} from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

const productos =[
  {id:'1', name: 'Taza Stich', categoria:'taza', stock:'7', precio:'$1.950', img: 'https://http2.mlstatic.com/D_NQ_NP_602015-MLA44634393032_012021-O.jpg', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila '},
  {id:'2', name: 'Taza Oink', categoria:'taza', stock:'4', precio:'$1.950', img: 'https://http2.mlstatic.com/D_NQ_NP_678472-MLA50695319909_072022-W.jpg', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'3', name: 'Taza Forky', categoria:'taza', stock:'5', precio:'$1.950', img: 'https://http2.mlstatic.com/D_NQ_NP_794530-MLA47428150229_092021-O.jpg', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'4', name: 'Taza Duo Stich', categoria:'taza-duo', stock:'3', precio:'$3.500', img: 'https://i.ebayimg.com/thumbs/images/g/q0EAAOSwPvVhS3fo/s-l300.jpg', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'5', name: 'Taza Duo Panda', categoria:'taza-duo', stock:'5', precio:'$3.500', img: 'https://i.pinimg.com/originals/cd/5e/ae/cd5eaefb3f406e6887e54012d21053cb.jpg',detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'6', name: 'Taza Duo Oink', categoria:'taza-duo', stock:'2', precio:'$3.500', img: 'https://rlv.zcache.es/set_de_tazas_de_cafe_dibujo_animado_rosado_alegre_del_cerdo-r2d25a3b90a2b47a5b92bd920406573bc_za2dq_307.jpg?rlvnet=1', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'7', name: 'Taza Duo La Dama y El Vagabundo', categoria:'taza-duo', stock:'5', precio:'$3.500', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-l2Qv-f_RwiGYXbv2JtMPg7WzPRIK7JGtrl_FUdC3ch44jbjLXeliI6zpd0Fq9JE6Ac4&usqp=CAU', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'8', name: 'Taza Duo Mario Bross', categoria:'taza-duo', stock:'1', precio:'$3.500', img: 'https://http2.mlstatic.com/D_NQ_NP_815512-MLA49194919959_022022-W.jpg',detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'9', name: 'Taza Mario Bross', categoria:'taza', stock:'4', precio:'$1.950', img: 'https://http2.mlstatic.com/D_NQ_NP_815448-MLM43602022350_092020-V.webp', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'10', name: 'Taza Bob Esponja', categoria:'taza', stock:'5', precio:'$1.950', img: 'https://d22fxaf9t8d39k.cloudfront.net/ece6d74b00c803b003f98a0335900e1a8fe565680fe2fa73086e9e727a2bf66b54145.jpeg',detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'11', name: 'Taza Batman', categoria:'taza', stock:'5', precio:'$1.950', img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/086/813/products/image-3ecdce7b84f239ee2016258092776130-480-0.webp', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'12', name: 'Taza Spiderman 3D', categoria:'taza3d', stock:'3', precio:'$3.200', img: 'https://http2.mlstatic.com/D_NQ_NP_934929-MLA48532215488_122021-O.webp', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'13', name: 'Taza Hamm 3D', categoria:'taza3d', stock:'2', precio:'$3.200', img: 'https://d22fxaf9t8d39k.cloudfront.net/f747fab0405055257509d3908b5490cfdbac962b171f57ad1208863a5c4a78e13798.png', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'14', name: 'Taza Forky 3D', categoria:'taza3d', stock:'7', precio:'$3.200', img: 'https://http2.mlstatic.com/D_NQ_NP_615370-MLA45343941508_032021-O.jpg', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'15', name: 'Taza Darth Vader 3D', categoria:'taza3d', stock:'5', precio:'$3.200', img: 'https://http2.mlstatic.com/D_NQ_NP_972090-MLA49533771449_032022-O.webp', detalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'},
  {id:'16', name: 'Taza Chip 3D', categoria:'taza3d', stock:'4', precio:'$3.200', img: 'https://http2.mlstatic.com/D_NQ_NP_898010-MLA50808441094_072022-O.jpg', ddetalle:'Material: Ceramica /Capacidad 330cc/Apto para microondas y Lavavajila'}
];

export const ItemListContainer = ({texto})=>{
  const [data,setData] = useState([]);

  const{categoriaId}=useParams();

  useEffect(() =>{
    const getData =new Promise(resolve=>{
      setTimeout (()=>{
        resolve(productos)
      }, 1000)
    });
    if(categoriaId){
      getData.then(res => setData(res.filter(productos=>productos.categoria===categoriaId)));
    }else{
      getData.then(res => setData(res));
    }
  },[categoriaId])

  return(
    <>
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer;
