
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';

import PageServices from './PageServices';
import AppLogin from './LoginAdmin/AppLogin';

import Home from './Home';
import Contactanos from './Contactanos';
import Nosotros from './Nosotros'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <Routes>
        <Route path='/Inicio' element={<Home />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Servicios' element={<PageServices />} />
        <Route path='/Contactanos' element={<Contactanos />} />
        <Route path='/LoginAdmin/AppLogin' element={<AppLogin />} />
      </Routes>
    </Router>
  );
}
export default App;
