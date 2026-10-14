function precioPaquete(cantidad) {
    if (cantidad >= 5) {
        return cantidad * 2000;
    } else {
        return cantidad * 2500;
    }
}
function puntosATickets(puntos, esOro) {
    if (esOro) {
        return puntos * 2;
    } else {
        return puntos;
    }
}
console.log("Precio:", precioPaquete(6));
console.log("Tickets:", puntosATickets(100, true));
console.log("Otro precio:", precioPaquete(3));