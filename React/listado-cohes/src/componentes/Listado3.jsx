import React from 'react'

function Listado3({coches}) {
  return (
    <><div>EL COCHE MAS CARO </div>  
    <button className='btn btn-danger'>Listado1</button>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <table className="table table-bordered table-striped" style={{ backgroundColor: 'yellow', border: '2px solid #dark' }}>
            <thead>
              <tr style={{ backgroundColor: 'red', color: 'white' }}>
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
              {
              coches.sort((a, b) => b.precio - a.precio).map((coche, index) => {
                return  (index === 0) &&  
                <tr key={index}>
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
    </>   )
}

export default Listado3