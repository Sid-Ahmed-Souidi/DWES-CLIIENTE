import React, { useState, useEffect } from "react";

const Proyecto1 = () => {
    const [provincias, setProvincias] = useState([]);

    useEffect(() => {
        fetch("/listadoAlturas.json") // Ruta absoluta desde public/
            .then(response => response.json())
            .then(data => setProvincias(data))
            .catch(error => console.error("Error cargando JSON:", error));
    }, []);

    // Buscar la provincia con la altura máxima
    let provinciaMaxAltura = { provincia: "Ninguna", altura: 0 };
    provincias.forEach(p => {
        if (p.altura > provinciaMaxAltura.altura) {
            provinciaMaxAltura = p;
        }
    });
    // Filtrar provincias con altura mayor a 2500
    const provinciasAltas = provincias.filter(p => p.altura > 2500);
    // Filtrar provincias en la costa (altura mínima 0)
    const provinciasCosta = provincias.filter(p => p.alturaMinima === 0);

    return (
        <div>
            <h2>Proyecto 1: Alturas de Provincias</h2>
            <p>Provincia con la altura máxima: {provinciaMaxAltura.provincia}</p>
            <h3>Provincias con altura mayor a 2500:</h3>
            <ul>
                {provinciasAltas.map(p => <li key={p.provincia}>{p.provincia}</li>)}
            </ul>
            <h3>Provincias en la costa:</h3>
            <ul>
                {provinciasCosta.map(p => <li key={p.provincia}>{p.provincia}</li>)}
            </ul>
        </div>
    );
};

export default Proyecto1;