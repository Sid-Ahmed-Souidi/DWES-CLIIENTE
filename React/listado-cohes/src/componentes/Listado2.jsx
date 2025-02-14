import React from 'react'

function Listado2({coches}) {
  return (
    <><div>LISTADO DE COCHES CON COLOR GRAY Y PRECIO MENOR A 20000 ORDENADOR ASCENDENTE POR PRECIO</div>  
    <button className='btn btn-danger'>Listado1</button>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <table className="table table-bordered table-striped" style={{ backgroundColor: 'gray', border: '2px solid #dark' }}>
            <thead>
              <tr style={{ backgroundColor: 'black', color: 'white' }}>
                <th>color</th>
                <th>marca</th>
                <th>modelo</th>
                <th>consumo</th>
                <th>precio</th>
                <th>kms</th>
                <th>tipoMotor</th>
              </tr>
            </thead>
            <tbody> 
              {coches.filter(item => item.color === 'Gray' && item.precio  <  20000).sort((a, b) => a.precio - b.precio)
              .map((coche, index) => {
                return <tr key={index}>
                  <td>{coche.color}</td>
                  <td>{coche.marca}</td>
                  <td>{coche.modelo}</td>
                  <td>{coche.consumo}</td>
                  <td>{coche.precio}</td>
                  <td>{coche.kms}</td>
                  <td>{coche.tipoMotor}</td>
                </tr>
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </> 
     )
}

export default Listado2