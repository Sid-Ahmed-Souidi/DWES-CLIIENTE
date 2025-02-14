import React from 'react'

function Listado1({coches}) {

  return (
      <><div>LISTADO DE COCHES CON COLOR BLUE Y PRECIO MENOR A 10000</div>
      <button className='btn btn-danger'>Listado1</button>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <table className="table table-bordered table-striped" style={{ backgroundColor: '#b3d9ff', border: '2px solid #1e90ff' }}>
              <thead>
                <tr style={{ backgroundColor: '#1e90ff', color: 'white' }}>
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
                {coches.filter(item => item.color === 'Blue' && item.precio >10000).map((coche, index) => {
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

export default Listado1