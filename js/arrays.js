/* Desafio: Integrar Arrays */

/* Objetos */

/* 
const producto1 = {id: 1, nombre: "Alpiste", precio: 90.00};
const producto2 = {id: 2, nombre: "Pasta de Crias", precio: 300.00};
const producto3 = {id: 3, nombre: "Golosina Stick", precio: 40.00};
 */

const addToCart = [];

addToCart.push("Alpiste");

console.log("Agregaste el Producto: " + addToCart);

addToCart.push("Pasta de Crías");

console.log("Agregaste el Producto: " + addToCart);

addToCart.push("Golosina Stick");

console.log("Agregaste el Producto: " + addToCart);

addToCart.pop();

console.log("Eliminaste del Carrito: Golosina Stick");

console.log("El índice del producto eliminado es: " + addToCart.indexOf("Alpiste"));

/* Array de Objetos */

const producto1 = {id: 1, nombre: "Alpiste", precio: 90.00};

const cart = [producto1, {id: 2, nombre: "Pasta de Crias", precio: 300.00}];

cart.push({id: 3, nombre: "Golosina", precio: 40.00});

console.log("El Carrito contiene:");
console.log(cart);

/* Búsqueda y Filtrado en Array */

const search = cart.find((el) => el.nombre === 'Alpiste');

console.log("Elemento Encontrado:");
console.log(search);

const filter = cart.filter((el) => el.precio < 300);

console.log("Los productos que cuestan menos de $300 son:");
console.log(filter);