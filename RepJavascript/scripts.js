// 1. Variables
let nombre = "Juan";
const edad = 25;
var pais = "Chile";

// 2. Funciones
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar(nombre));

// 3. Condicionales
if (edad >= 18) {
    console.log(`${nombre} es mayor de edad.`);
} else {
    console.log(`${nombre} es menor de edad.`);
}

// 4. Bucles
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número: ${numeros[i]}`);
}

// 5. Arrays y Métodos
numeros.push(6); // Agregar un elemento al final
console.log("Array actualizado:", numeros);

let cuadrados = numeros.map(num => num * num); // Elevar al cuadrado
console.log("Cuadrados:", cuadrados);

// 6. Objetos
let persona = {
    nombre: "Juan",
    edad: 25,
    pais: "Chile",
    saludar: function() {
        return `Hola, soy ${this.nombre} de ${this.pais}.`;
    }
};
console.log(persona.saludar());

// 7. Promesas (Básico)
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos obtenidos correctamente");
        }, 1000);
    });
}

obtenerDatos().then(data => console.log(data)).catch(error => console.error(error));
