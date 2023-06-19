const noticarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
                  <h1 class="modal-header-title">carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ❌ </span>
        `;

        modalContainer.append(carritoContent);

        let eliminar = carritoContent.querySelector(".delete-product");

        eliminar.addEventListener("click", ()=> {
            eliminarProducto(product.id);
            
        Toastify({
            text: "Producto Eliminado",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #ffc107,#8b4513 )",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        }) 

    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", noticarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((Element) => Element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    noticarrito();

};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    
    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();