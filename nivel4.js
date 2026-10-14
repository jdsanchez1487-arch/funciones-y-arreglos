let catalogo = [
    "Mario Kart",
    "Minecraft",
    "FIFA",
    "Fortnite",
    "Roblox",
    "Sonic"
];
console.log("Primer juego:", catalogo[0]);
console.log("Último juego:", catalogo[catalogo.length - 1]);
console.log("Cantidad de juegos:", catalogo.length);
catalogo[2] = "Call of Duty";
console.log("Catálogo actualizado:", catalogo);
console.log("Posición 10:", catalogo[10]);

let puntos = new Array(320, 150, 980, 640, 75, 510, 500, 1200);
let total = 0;
let mayoresA500 = 0;
let maximo = puntos[0];

for (let i = 0; i < puntos.length; i++) {
    console.log("Ronda", i + 1, ":", puntos[i]);
    total += puntos[i];
    if (puntos[i] >= 500) {
        mayoresA500++;
    }
    if (puntos[i] > maximo) {
        maximo = puntos[i];
    }
}
console.log("Total de puntos:", total);
console.log("Puntuaciones de 500 o más:", mayoresA500);
console.log("Puntuación máxima:", maximo);
console.log("Promedio:", (total / puntos.length).toFixed(1));
console.log("Posición del máximo:", puntos.indexOf(maximo));