/* Desafio: Crear un algoritmo utilizando un ciclo */

const noShipping = ["Animales", "Productos Frágiles", "Insectos"];
let contNoShipping = 0;
let i = 0;

/* Validación por Edad */

let ageUser = parseInt (prompt ("Por favor ingrese su edad"));

if (ageUser >= 18) {

    let nameUser = prompt ("Ingresá tu nombre");

    alert ("¡Bienvenido " + nameUser + " a Nuestra Tienda!");

/* Ciclo para enumerar productos */

            for (i=0; i < 3; i++) {
                contNoShipping = noShipping [i];
                alert ("Recordá que no realizamos envíos de los siguientes productos: " + contNoShipping);
            }   
}

/* Condición para evitar la carga del sitio */

    else {

        alert ("Lo siento, para ingresar debes ser mayor de edad")

        window.stop()    
}