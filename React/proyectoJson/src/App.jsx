import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';

import './App.css';

import Proyecto1 from './Proyecto1';
import Proyecto2 from './Proyecto2';
import Proyecto3 from './Proyecto3';

// import Listado2 from './componentes/Listado2';
// import Listado3 from './componentes/Listado3';
// import Listado4 from './componentes/Listado4';
// import Listado5 from './componentes/Listado5';

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("listadoAlturas.json")
      .then(response => response.json())
      .then((x) => setDatos(x))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  console.log(datos);

  return (
    <>



      <Router>
        <div className="container">
          <div className="navbar navbar-expand-lg fixed-top d-flex justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Proyecto1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Proyecto2">Proyecto2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Proyecto3">Proyecto3</Link>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Proyecto1/>} />
          <Route path="/Proyecto2" element={<Proyecto2/>} />
          <Route path="/Proyecto3" element={<Proyecto3/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
