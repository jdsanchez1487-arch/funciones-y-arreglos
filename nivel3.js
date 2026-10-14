const mitad = numero => numero / 2;
const esCaro = precio => precio > 50000;
const etiqueta = nombre => "Juego: " + nombre;
const esGratis = precio => precio === 0;
const aplicarDescuento = (precio, descuento) =>
    precio - precio * descuento / 100;
const nombreCorto = nombre => nombre.slice(0, 5);
const alcanza = (dinero, precio) => dinero >= precio;

console.log(mitad(10));
console.log(esCaro(60000));
console.log(etiqueta("Carreras"));
console.log(esGratis(0));
console.log(aplicarDescuento(100000, 10));
console.log(nombreCorto("Minecraft"));
console.log(alcanza(50000, 40000));