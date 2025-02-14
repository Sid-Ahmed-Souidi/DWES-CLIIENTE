import { useEffect, useState } from "react"

function Listado1() {
    const [mensajes, setMensajes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        fetch('http://localhost/ServiciosChat/listadoMensajes.php')
            .then(response => response.json()).then((x) => setMensajes(x));
    }, []);
    return (
        <><div>Listado1</div><button className='btn btn-danger'>Listado1</button>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Usuario</th>
                                    <th>Fecha</th>
                                    <th>Mensaje</th>
                                    <th>Activo</th>
                                    <th>Destinatario</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    mensajes.map((mensaje, index) => {
                                        return <tr key={index}>
                                            <td>{mensaje.id}</td>
                                            <td>{mensaje.usuario}</td>
                                            <td>{mensaje.fecha}</td>
                                            <td>{mensaje.mensaje}</td>
                                            <td>{mensaje.activo}</td>
                                            <td>{mensaje.destinatario}</td>
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