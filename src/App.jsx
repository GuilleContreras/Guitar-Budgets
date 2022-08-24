import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App" bgcolor="black">
      <NavBar />
      <ItemListContainer greeting="Hola, somos Guitar budgets" color="blue" />
      <Header />
      
    </div>
  );
}

export default App;
