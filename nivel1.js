function mostrarBienvenida() {
    console.log("Bienvenido a la sala de juegos");
}
function mostrarTablero() {
    let maquinas = 5;
    let maquinasOcupadas = 2;
    console.log("Máquinas disponibles:", maquinas - maquinasOcupadas);
    console.log("Máquinas ocupadas:", maquinasOcupadas);
}
mostrarBienvenida();
mostrarTablero();