import React from 'react'
import { useEffect, useState } from "react"

function Listado2() {
    const [datos , setDatos]=useState([]);
    const [url, setUrl] = useState('');
    const [posicion , setPosicion]=useState(0);
    const listadoDatos=(url,posicion)=>{
        setUrl(url);
        setPosicion(posicion);
    }

    // nombreProvincia	"Ibores"
    // votosPA	21414
    // votosPB	3453464
    // votosPC	543634
    // votosPD	45346
    // Representantes	10
    useEffect(() => {
        fetch(url)
            .then(response => response.json()).then((x) => setDatos(x));
    }, [url]);
  return (
    <>    
        <>
        
            <button className='btn btn-danger'  
             onClick={() => listadoDatos('http://localhost/ServiciosChat/listadoProvincias.php', 1)}>
                    Listado de Provincias</button>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>nombreProvincia</th>
                                    <th>votosPA</th>
                                    <th>votosPB</th>
                                    <th>votosPC</th>
                                    <th>votosPD</th>
                                    <th>Representantes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (posicion===1)&& 
                                    (
                                        datos.map((provincia, index) => {
                                        return <tr key={index}>
                                            <td>{provincia.nombreProvincia}</td>
                                            <td>{provincia.votosPA}</td>
                                            <td>{provincia.votosPB}</td>
                                            <td>{provincia.votosPC}</td>
                                            <td>{provincia.votosPD}</td>
                                            <td>{provincia.Representantes}</td>
                                        </tr>
                                    })
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>    </>
  )
}

export default Listado2

