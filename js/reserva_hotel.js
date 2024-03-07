function reservar () {
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numeroAdultos = document.getElementById("numeroAdultos").value;
    let numeroNiños = document.getElementById("numeroNiños").value
    let opcionesComida = document.getElementsByName("operador")
    // let reset = document.getElementById("")

    let regimen = ""

    for (let i = 0; i < opcionesComida.length; i++) {
        if (opcionesComida[i].checked == true) {
            regimen = opcionesComida[i].value
            break
        } 
    }

    alert(`

    Datos de la reserva:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Adultos: ${numeroAdultos}
    Niños: ${numeroNiños}
    Comidas: ${regimen}
    `)
    


    
}


// function limpiar() {
//     // console.log("reset")
//     document.getElementById("reset")
// }
// console.log("reset");

function limpiar() {

}