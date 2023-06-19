const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("compras")) || [];

const getProducts = async () => {
    const response = await fetch("js/product.json");
    const data = await response.json();
    console.log(data);


    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
         <img src="${product.img}">
         <h3>${product.nombre}</h3>
         <p class="price">${product.precio} $</p>
        `;
    
        shopContent.append(content);
    
        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";
    
        content.append(comprar);
    
        comprar.addEventListener("click", () => {
    
            Toastify({
                text: "Haz Agregado un Producto",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #ffc107,#8b4513 )",
                },
                onClick: function () { } // Callback after click
            }).showToast();
    
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === prod.id) {
                        prod.cantidad++;
                    }
                });
            } else {
    
                carrito.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
            }
            console.log(carrito);
            carritoCounter();
            saveLocal();
        });
    });
};

getProducts();



const saveLocal = () => {
    localStorage.setItem("compras", JSON.stringify(carrito));
};

