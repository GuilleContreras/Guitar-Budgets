import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarouselHeader from './components/Header/NavBarHeader';



function App() {

  return (
    <div className="App" bgcolor="black">
      <>
        <BrowserRouter>
        <NavBar />
        <CarouselHeader />
          <Routes>
            <Route path="/"  element={<ItemListContainer/>} />
            <Route path="/producto/:idProducto"  element={<ItemListContainer/>} />
            <Route path="/categoria/:idCategoria"  element={<ItemListContainer/>} />
            <Route path="/detalle/:idProducto"  element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
