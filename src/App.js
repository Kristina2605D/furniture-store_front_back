import { Routes, Route } from 'react-router-dom';
import './App.css';
import Feauters from './pages/Feauters';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CardProvider from './CartContext';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <CardProvider>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/feauters' element={< Feauters />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/login' element={< Login />}></Route>

        </Routes>
      </div>
    </CardProvider>
  );
}

export default App;
