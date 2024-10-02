import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageServices from './PageServices';
import Home from './Home';
import Contactanos from './Contactanos';
import Nosotros from './Nosotros';
import AppLogin from './LoginAdmin/AppLogin';
import HomeLogin from './LoginAdmin/HomeLogin';


function App() {
  const [count, setCount] = useState(0);

  return (
    /*<Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<PageServices />} />
        <Route path='/contactanos' element={<Contactanos />} />
      </Routes>
  </Router>}*/
  <AppLogin/>
  );
}

export default App;
