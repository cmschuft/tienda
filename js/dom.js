/* Cuarto desafio: Interactuar con HTML */

const cards = document.querySelector(".cards");

/* Insertar Items */

const juguetes = [
    "Hamaca de Lana",
    "Rama de Árbol",
    "Escalerita"
    ];

for (let producto of juguetes) {
    let listado = document.createElement("li");
    listado.innerHTML=producto;
    cards.appendChild(listado);
}

/* Insertar Objetos */

const juguetes2 = [
    {id: 1, nombre: "Hamaca de Lana", precio: 50.00},
    {id: 2, nombre: "Rama de Árbol", precio: 80.00},
    {id: 3, nombre: "Escalerita", precio: 40.00}
];

for (producto2 of juguetes2) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>${producto2.nombre}</h3><p>${producto2.precio}</p>`
    cards.appendChild(contenedor);
}

/* Opcion 1 */

addEventListener("click", respuestaClick)
    function respuestaClick() {
        console.log("Respuesta!!!");
    }


/* Opcion 2 */

document.getElementById("btnPrincipal")
    boton.onclick = () => {console.log("Respuesta 2")}


/* Opcion 3 Las más cuestioanada */

<input type="button" value="CLICK2" onclick="alert('Respuesta 3');"




/* Insertar Objetos */

const productos = [
    {id: 1, nombre: "Hamaca de Lana", precio: 50.00},
    {id: 2, nombre: "Rama de Árbol", precio: 80.00},
    {id: 3, nombre: "Escalerita", precio: 40.00}
];

let cards = "";

productos.foreach((producto) => {
    cards += "<div class = 'card d-flex col-4'><h2>+producto.title+""
}

document.getElementById("seccion-card").innerHTML = cards











