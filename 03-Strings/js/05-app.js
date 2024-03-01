const producto = 'Monitor 20 Pulgadas';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));


// Alternativa a slice
console.log(producto.substring(0, 10));