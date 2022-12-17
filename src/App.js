import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from'./components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Titulo from './components/Titulo/Titulo'
import Products from './components/Products/Products';



function App() {
  
    let tituloApp = 'TAZA TAZA';
    let subtitApp = '¡llevate una a casa!';
  return (
    <div>
      <div>
        <Titulo titulo={tituloApp} subtitulo={subtitApp}/>
      </div>
      <NavBar/>
     <Products/>
    </div>
  );
}

export default App;

