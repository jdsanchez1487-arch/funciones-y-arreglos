let fila = ["Ana", "Luis", "Carlos"];
console.log("Fila inicial:", fila);
fila.push("María");
console.log("Después de push:", fila);
let atendido = fila.shift();
console.log("Persona atendida:", atendido);
console.log("Después de shift:", fila);
fila.unshift("Pedro");
console.log("Después de unshift:", fila);
let ultimo = fila.pop();
console.log("Persona retirada:", ultimo);
console.log("Fila final:", fila);

let juegos = ["Mario", "FIFA", "Sonic", "Minecraft"];
juegos.splice(1, 1);
console.log("Después de eliminar:", juegos);
juegos.push("Fortnite");
console.log("Después de agregar:", juegos);
juegos.reverse();
console.log("Catálogo invertido:", juegos);
console.log("Cantidad de juegos:", juegos.length)