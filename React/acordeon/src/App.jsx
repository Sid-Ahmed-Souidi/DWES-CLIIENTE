import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';

import './App.css';

import Acordeon from './Acordeon';
import LoginForm from './LoginForm';

// import Listado2 from './componentes/Listado2';
// import Listado3 from './componentes/Listado3';
// import Listado4 from './componentes/Listado4';
// import Listado5 from './componentes/Listado5';

function App() {



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
                <Link className="nav-link" to="/LoginForm">Proyecto2</Link>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Acordeon/>} />
          <Route path="/LoginForm" element={<LoginForm/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
