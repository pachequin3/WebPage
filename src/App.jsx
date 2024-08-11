import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageServices from './PageServices';

import Home from './Home';
import Contactanos from './Contactanos';
import Header from './Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      
      <Routes>
        <Route path='/Inicio' element={<Home />} />
        <Route path='/Nosotros' element={<Home />} />
        <Route path='/Servicios' element={<PageServices />} />
        <Route path='/Contactanos' element={<Contactanos />} />
      </Routes>
    </Router>
  );
}

export default App;
