function reservar () {
    

// Guardar los valores introducidos para guardarlos y usarlos luego en el Alert para tener la información de la reserva.


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numeroAdultos = document.getElementById("numeroAdultos").value;
    let numeroNiños = document.getElementById("numeroNiños").value
    let opcionesComida = document.getElementsByName("operador")
  
    
// Recorrer la lista de las opciones hasta encontrar el (true)que será le elección elegida.


    let regimen = ""

    for (let i = 0; i < opcionesComida.length; i++) {
        if (opcionesComida[i].checked == true) {
            regimen = opcionesComida[i].value
            break
        } 
    }


// Alert donde muestra todos los valores introducidos.


    alert(`

    Datos de la reserva:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Adultos: ${numeroAdultos}
    Niños: ${numeroNiños}
    Comidas: ${regimen}
    `)
  
}

