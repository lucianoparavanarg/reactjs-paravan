import './App.css';
import NavBar from './NavBar/NavBar';
import { BiCart } from 'react-icons/bi';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
