// Seleccionamos el botón y el contenedor
const boton = document.getElementById("agregar-palabra");
const contenedor = document.getElementById("contenedor");

// Función para agregar una palabra
function agregarPalabra() {
    // Crear un nuevo elemento <p>
    const nuevoParrafo = document.createElement("p");

    // Agregar texto al párrafo
    nuevoParrafo.textContent = "¡Hola, mundo!";

    // Agregar el párrafo al contenedor
    contenedor.appendChild(nuevoParrafo);
}

// Asociar la función al evento 'click' del botón
boton.addEventListener("click", agregarPalabra);
