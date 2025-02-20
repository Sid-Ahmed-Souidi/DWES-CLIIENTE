import React, { useState, useEffect } from "react";

const Proyecto2 = () => {
    const [provincias, setProvincias] = useState([]);

    useEffect(() => {
        fetch("listadoProvincias.json") // Asegúrate de que el JSON esté en `public/`
            .then(response => response.json())
            .then(data => setProvincias(data))
            .catch(error => console.error("Error cargando JSON:", error));
    }, []);

    const totalVotos = { PA: 0, PB: 0, PC: 0, PD: 0 };
    provincias.forEach(p => {
        totalVotos.PA += p.votosPA;
        totalVotos.PB += p.votosPB;
        totalVotos.PC += p.votosPC;
        totalVotos.PD += p.votosPD;
    });

    return (
        <div>
            <h2>Proyecto 2: Resultados Electorales</h2>
            <p>Suma total de votos:</p>
            <ul>
                <li>Partido A: {totalVotos.PA}</li>
                <li>Partido B: {totalVotos.PB}</li>
                <li>Partido C: {totalVotos.PC}</li>
                <li>Partido D: {totalVotos.PD}</li>
            </ul>
        </div>
    );
};

export default Proyecto2;