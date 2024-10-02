import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';

import PageServices from './PageServices';
<<<<<<< HEAD
import AppLogin from './LoginAdmin/AppLogin';

=======
>>>>>>> 32b8038d69da41463c6485a0a14276e9e95f39eb
import Home from './Home';
import Contactanos from './Contactanos';
import Nosotros from './Nosotros';
import AppLogin from './LoginAdmin/AppLogin';
import HomeLogin from './LoginAdmin/HomeLogin';


function App() {
  const [count, setCount] = useState(0);

  return (
<<<<<<< HEAD
    <Router>
    <Routes>
        <Route path='/Inicio' element={<Home />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Servicios' element={<PageServices />} />
        <Route path='/Contactanos' element={<Contactanos />} />
        <Route path='/LoginAdmin/AppLogin' element={<AppLogin />} />
=======
    /*<Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<PageServices />} />
        <Route path='/contactanos' element={<Contactanos />} />
>>>>>>> 32b8038d69da41463c6485a0a14276e9e95f39eb
      </Routes>
  </Router>}*/
  <AppLogin/>
  );
}

export default App;
