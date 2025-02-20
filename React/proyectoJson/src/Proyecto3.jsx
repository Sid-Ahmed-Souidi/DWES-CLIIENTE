import React, { useState, useEffect } from "react";

const mapas = [
    { provincia: "Provincia1", imagen: "/imagenes/garfil.png" },
    { provincia: "Provincia2", imagen: "/imagenes/leon.png" },
    { provincia: "Provincia3", imagen: "/imagenes/panda.png" }
];

const Proyecto3 = () => {
    const [mapaActual, setMapaActual] = useState(null);
    const [provinciaUsuario, setProvinciaUsuario] = useState("");
    const [puntos, setPuntos] = useState(0);

    useEffect(() => {
        cambiarMapa();
        const intervalo = setInterval(cambiarMapa, 5000);
        return () => clearInterval(intervalo);
    }, []);

    const cambiarMapa = () => {
        const nuevoMapa = mapas[Math.floor(Math.random() * mapas.length)];
        setMapaActual(nuevoMapa);
        setProvinciaUsuario(""); // Resetear input
    };

    const verificarSeleccion = () => {
        if (provinciaUsuario.trim().toLowerCase() === mapaActual.provincia.toLowerCase()) {
            setPuntos(puntos + 1);
            alert("Correcto! Sumas un punto.");
        } else {
            setPuntos(puntos - 1);
            alert("Incorrecto! Pierdes un punto.");
        }
    };

    return (
        <div>
            <h2>Proyecto 3: Juego de Mapas</h2>
            {mapaActual && (
                <>
                    <img src={mapaActual.imagen} alt="Mapa" style={{ width: "300px", height: "200px" }} />
                    <div>
                        <input
                            type="text"
                            placeholder="Ingresa la provincia"
                            value={provinciaUsuario}
                            onChange={(e) => setProvinciaUsuario(e.target.value)}
                        />
                        <button onClick={verificarSeleccion}>Verificar</button>
                    </div>
                </>
            )}
            <p>Puntos: {puntos}</p>
        </div>
    );
};

export default Proyecto3;