import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './components/Cart/CartContainer';
import CartItem from './components/Cart/CartItem';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <div className="App" bgcolor="black">
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/producto/:idProducto" element={<ItemListContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
              <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>

    </div>
  );
}

export default App;
