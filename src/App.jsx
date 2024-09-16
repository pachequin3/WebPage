
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageServices from './PageServices';

import Home from './Home';
import Contactanos from './Contactanos';
import Nosotros from './Nosotros'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
  

  <Home/>
    </Router>
  );
}
export default App;
