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

console.log("El índice del primer producto eliminado es: " + addToCart.indexOf("Alpiste"));

/* Array de Objetos */

const producto1 = {id: 1, nombre: "Alpiste", precio: "$90.00"};

const cart = [producto1, {id: 2, producto: "Pasta de Crias", precio: "$300.00"}];

cart.push({id: 3, producto: "Golosina", precio: "$40.00"});

console.log(cart);