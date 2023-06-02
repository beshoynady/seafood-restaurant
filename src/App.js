import Header from '../src/component/header/Header.jsx'
import Home from './component/home/Home.jsx';
import './App.css';
import Offers from './component/offers/Offers.jsx';
import Menu from './component/menu/Menu.jsx';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Offers/>
      <Menu/>
    </div>
  );
}

export default App;
