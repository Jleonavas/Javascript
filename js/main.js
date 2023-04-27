const productos = [
    { nombre: "Paleta de Colores", precio: 20000 },
    { nombre: "Bases", precio: 10000 },
    { nombre: "Correctores", precio: 8500 },
    { nombre: "Cejas", precio: 5000 },
    { nombre: "Pestañas", precio: 6000 },
];
let misproductos = []

let seleccion = prompt("Hola, que tal? Deseas hacer una compra?")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor, ingresa si o no")
    seleccion = prompt("Hola, que tal? Deseas hacer una compra?")
}

if (seleccion == "si") {
    alert("Esta es la lista de nuestros productos")
    let todoslosproductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosproductos.join(" - "))
} else if (seleccion == "no") {
    alert("Muchas Gracias, Esperamos verte pronto!!")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un Producto")
    let precio = 0

    if (producto == "Paleta de Colores" || producto == "Bases" || producto == "Correctores" || producto == "Cejas" || producto == "Pestañas") {
        switch (producto) {
            case "Paleta de Colores":
                precio = 20000;
                break;
            case "Bases":
                precio = 10000;
                break;
            case "Correctores":
                precio = 8500;
                break;
            case "Cejas":
                precio = 5000;
                break;
            case "Pestañas":
                precio = 6000;
                break;
        } 
        let unidades = parseInt (prompt("Indique la cantidad de Unidades"))

        misproductos.push({producto, unidades, precio})
        console.log(misproductos)
    } else {
        alert("Lo sentimos, no contamos con este producto")
    }
    seleccion = prompt("Deseas agregar otro producto?")

    while(seleccion === "no"){
        alert("Muchas gracias por tu compra, esperamos verte pronto!!")
        misproductos.forEach((misproductosFinal) => {
            console.log(`producto: ${misproductosFinal.producto}, unidades: ${misproductosFinal.unidades},
            total a pagar ${misproductosFinal.unidades * misproductosFinal.precio}`)
        })
        break;
    }
}

const total = misproductos.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`Gracias por tu compra. El total de tus Productos es: ${total}`)
