/* Quinto desafio: Incorporar Eventos */

/* Insertar Objetos */

/* const cards = document.querySelector(".dinamicsCards"); */

/* Declaración de Productos */

const productos = [
    {
        id: 1, 
        nombre: "Hamaca de Lana",
        descripcion: "Estructura de plástico forrada con lana", 
        img: "https://ae01.alicdn.com/kf/H4ed54e0f6b6d48c0b48318eaf547ef4bZ/Hamaca-de-lana-de-calidad-para-nido-de-loros-y-aves-jaula-colgante-c-lida-de.jpg_Q90.jpg_.webp",
        precio: 50.00   
    },

    {
        id: 2, 
        nombre: "Rama de Árbol",
        descripcion: "Madera Natural, diferentes modelos", 
        img: "https://ae01.alicdn.com/kf/HTB1pOQKNXXXXXXyXpXXq6xXFXXX5/1-UNIDS-Y-Forma-la-Rama-de-Madera-Para-Perchas-De-Aves-Loro-Juguetes-Jaula-de.jpg_Q90.jpg_.webp", 
        precio: 80.00
    },

    {
        id: 3, 
        nombre: "Escalerita",
        descripcion: "Realizada con madera pulida, distintos tamaños", 
        img: "https://cdn.manomano.com/juguetes-para-pjaros-columpio-para-pjaros-y-loros-escaleras-de-jaula-para-pjaros-con-cuerda-puente-colgante-hecho-a-mano-soporte-de-madera-para-periquitos-pequeos-periquitos-cacatas-55-x-10-cm-L-21449342-55287430_1.jpg",
        precio: 40.00
    },
];

/* Cards Dinámicas */

let cards = "";

productos.forEach((producto) => {
    const idButton = `add-carts${producto.id}`
    document.getElementById("dinamicsCards").innerHTML += `
    <div class="card cardsPosition">    
    <h4>${producto.nombre}</h4>
    <img src="${producto.img}">
    <p>${producto.descripcion}</p>
    <div class="precio">
    <p>$ ${producto.precio}</p>
    </div>
    <a class="boton" id="${idButton}"<p><button>Añadir a Carrito</button></p>
    </div>`;
})

/* Evento Click */

productos.forEach((producto) => {
    const idButton = `add-carts${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {alert("PRODUCTO AGREGADO");
})
});

/* 

        <div class="cardsPosition row row-cols-1 row-cols-sm-4 g-5">
            <div class="card cardsPosition">
              <img src="../images/hamaca.jpg" class="card-img-top" alt="Hacama de Lana" style="width:100%">
              <h3 class="card-title">Hamaca de Lana</h3>
              <p class="price">$50.00</p>
              <p>Se realizan a medida</p>
              <p><button>Añadir a Carrito</button></p>
            </div> */