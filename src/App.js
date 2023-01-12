import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from'./components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/CartWidget/CartWidget'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartProvider from './context/CartContext';


function App() {
  
    let tituloApp = 'TAZA TAZA';
    let subtitApp = '¡llevate una a casa!';
  return (
    <>
    <BrowserRouter>
      <Titulo titulo={tituloApp} subtitulo={subtitApp}/>
      <CartProvider>
      <NavBar/>
      <Routes>
        < Route path='/' element={<ItemListContainer/>}/>
        < Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        < Route path='/cart' element={<Cart/>}/>
        < Route path='/detalle/:detalleId' element={<ItemDetailConteiner/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

