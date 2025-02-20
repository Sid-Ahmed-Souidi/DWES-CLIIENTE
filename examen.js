// Proyecto 1: listadoAlturas.json
const listadoAlturas = [
    { "provincia": "Provincia1", "altura": 2800, "alturaMinima": 200 },
    { "provincia": "Provincia2", "altura": 1500, "alturaMinima": 0 },
    { "provincia": "Provincia3", "altura": 3200, "alturaMinima": 50 },
    { "provincia": "Provincia4", "altura": 900, "alturaMinima": 0 }
];

// Proyecto 2: listadoProvincias.json
const listadoProvincias = [
    { "provincia": "Provincia1", "votosPA": 1200, "votosPB": 800, "votosPC": 1500, "votosPD": 600, "escanos": 10 },
    { "provincia": "Provincia2", "votosPA": 300, "votosPB": 700, "votosPC": 500, "votosPD": 400, "escanos": 5 },
    { "provincia": "Provincia3", "votosPA": 900, "votosPB": 1200, "votosPC": 1300, "votosPD": 1000, "escanos": 8 }
];

// Función para obtener la provincia con la altura máxima
const provinciaAlturaMaxima = listadoAlturas.reduce((max, p) => p.altura > max.altura ? p : max, listadoAlturas[0]);
console.log("Provincia con altura máxima:", provinciaAlturaMaxima.provincia);

// Provincias con altura superior a 2500
const provinciasAltas = listadoAlturas.filter(p => p.altura > 2500).map(p => p.provincia);
console.log("Provincias con altura superior a 2500:", provinciasAltas);

// Provincias que están en costa (alturaMinima = 0)
const provinciasCosta = listadoAlturas.filter(p => p.alturaMinima === 0).map(p => p.provincia);
console.log("Provincias en la costa:", provinciasCosta);

// Suma de votos por partido
const sumaVotos = listadoProvincias.reduce((acc, p) => {
    acc.PA += p.votosPA;
    acc.PB += p.votosPB;
    acc.PC += p.votosPC;
    acc.PD += p.votosPD;
    return acc;
}, { PA: 0, PB: 0, PC: 0, PD: 0 });
console.log("Suma total de votos por partido:", sumaVotos);

// Partido ganador por provincia y asignación de escaños
listadoProvincias.forEach(p => {
    const votos = [p.votosPA, p.votosPB, p.votosPC, p.votosPD];
    const partidoGanador = ["PA", "PB", "PC", "PD"][votos.indexOf(Math.max(...votos))];
    console.log(`Provincia: ${p.provincia}, Gana: ${partidoGanador}, Escaños: ${p.escanos}`);
});

// Proyecto 3: Juego acertar el mapa con su provincia
const mapas = [
    { "provincia": "Provincia1", "imagen": "mapa1.png" },
    { "provincia": "Provincia2", "imagen": "mapa2.png" },
    { "provincia": "Provincia3", "imagen": "mapa3.png" }
];

function mostrarMapaAleatorio() {
    const mapaSeleccionado = mapas[Math.floor(Math.random() * mapas.length)];
    console.log("Muestra la imagen:", mapaSeleccionado.imagen);
    return mapaSeleccionado;
}

function verificarSeleccion(provinciaSeleccionada, mapaActual) {
    if (provinciaSeleccionada === mapaActual.provincia) {
        console.log("Correcto! Sumas un punto.");
        return 1;
    } else {
        console.log("Incorrecto! Pierdes un punto.");
        return -1;
    }
}

// Simulación del juego
document.addEventListener("DOMContentLoaded", () => {
    let puntos = 0;
    setInterval(() => {
        const mapaActual = mostrarMapaAleatorio();
        const provinciaUsuario = prompt("¿A qué provincia pertenece este mapa?");
        puntos += verificarSeleccion(provinciaUsuario, mapaActual);
        console.log("Puntos actuales:", puntos);
    }, 5000);
});
