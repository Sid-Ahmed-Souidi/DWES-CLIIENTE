import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listado1 from './Componentes/Listado1'
import Listado2 from './Componentes/Listado2'
function App() {




  return (
    <>    
    {/* <div className="container">
      <div className="row d-flex justify-content-center flex-row">
        <button className='btn btn-danger' onClick={handClickMensajes}>Listado de Mensajes</button>
        <button className='btn btn-primary ' onClick={handClickProvincias}>Listado de Provincias</button>

      </div>
    </div> */}
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
        <Listado1></Listado1>

        </div>
        <div className="col-lg-4">

        </div>
        <div className="col-lg-4">
        <Listado2></Listado2>

        </div>
      </div>
    </div>

    </>
  )
}

export default App
