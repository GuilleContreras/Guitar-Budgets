import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './components/Cart/CartContainer';

function App() {

  return (
    <div className="App" bgcolor="black">
      <>
        <BrowserRouter>
        

          <Routes>
            <Route path="/"  element={<ItemListContainer/>} />
            <Route path="/producto/:idProducto"  element={<ItemListContainer/>} />
            <Route path="/productos"  element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria"  element={<ItemListContainer/>} />
            <Route path="/detalle/:idProducto"  element={<ItemDetailContainer/>} />
            <Route path="/cart"  element={<CartContainer/>} />
          </Routes>
        </BrowserRouter>
      </>
    

      {/* <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
