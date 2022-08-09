// Funcion para crear automaticamente un numero de id
function crearID() { 
    return parseInt(Math.random() * 1000)
}


// Creo el Array de productos de Coco maderas Cordoba
const productos = [
    {id: crearID(),producto: "Especiero Gourmet x8", precio: 1600},
    {id: crearID(),producto: "Especiero Gourmet x5", precio: 1200},
    {id: crearID(),producto: "Perchero Nordico 6 ganchos", precio: 3300},
    {id: crearID(),producto: "Perchero Nordico 4 ganchos", precio: 3000},
    {id: crearID(),producto: "Perchero Nordico Chico", precio: 2200},
    {id: crearID(),producto: "Tabla Asado Individual", precio: 1000},
    {id: crearID(),producto: "Tabla Asado de Corte", precio: 2500},
]; 
//console.log (productos);


// Agregar seis (6) Productos nuevos al final de nuestro array de productos y mostralos a todos en una tabla
productos.push ({id: crearID(),producto: "Tabla Picada Chica", precio: 1300});   
productos.push ({id: crearID(),producto: "Tabla Picada Grande", precio: 1800}); 
productos.push ({id: crearID(),producto: "Mesa de Arrime", precio: 2700});
productos.push ({id: crearID(),producto: "Escritorio", precio: 2100});
productos.push ({id: crearID(),producto: "Mesa Nordica", precio: 1900});
productos.push ({id: crearID(),producto: "Bandeja Matera", precio: 1750});

console.table(productos);

//elimino el ultimo elemento, lo guardo en una variable para mostrarlo por consola
let productoEliminado = productos.pop()
console.log (productoEliminado);
