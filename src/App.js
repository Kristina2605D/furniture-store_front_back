import { Routes, Route } from 'react-router-dom';
import './App.css';
import Feauters from './pages/Feauters';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
       <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route  path='/about' element={< About />}></Route>
          <Route  path='/feauters' element={< Feauters />}></Route>
          <Route  path='/contact' element={< Contact />}></Route>
          
          
        </Routes>
    
    </div>
  );
}

export default App;
