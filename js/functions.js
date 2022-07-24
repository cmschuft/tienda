/* Desafio: Simulador Interactivo */

const iva = 20.00;
const shipping = 150.00;
const precioHamaca = 50.00;

function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);

        if (tenemosStock == "Tenemos Stock") {
            console.log(tenemosStock);
            console.log("Agregaste Producto al Carrito: " + producto);
            console.log("El valor total es: " + (precioHamaca + iva + shipping));
        } 
        else {
            console.log(tenemosStock);
        }
}

function validarStock(stock) {
    if (stock > 0) {
        return "Tenemos Stock";
    }
    else {
        return "No Tenemos Stock";
    }
}

