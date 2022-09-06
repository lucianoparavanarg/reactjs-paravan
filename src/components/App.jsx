import './App.css';
import NavBar from './NavBar/NavBar';
import { BiCart } from 'react-icons/bi';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetail } from './ItemDetail/ItemDetail';
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
