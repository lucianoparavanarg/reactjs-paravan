import './App.css';
//import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
