const carrito = JSON.parse(localStorage.getItem("carrito"));
console.log(carrito);

const carritoVacio = document.querySelector("#carritoVacio");
const carritoProductos = document.querySelector("#carritoProductos");
const carritoAcciones = document.querySelector("#carritoAcciones");
const carritoComprado = document.querySelector("#carritoComprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector(".carrito-acciones-comprar");

function cargarProductosEnCarrito (){
    if(carrito && carrito.length > 0){
    
        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");
    
        carritoProductos.innerHTML = "";
    
        carrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.image}" alt="${producto.name}">
            <div class="carrito-producto-titulo">
                <small>${producto.name}</small>
                <h3>${producto.category}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$ ${producto.price}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.price * producto.cantidad}</p>
            </div>
            <but class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></but
            `
            carritoProductos.append(div);
        });
    
    }else{
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }
    actualizarBotonEliminar ();
    actualizarTotal();
}
cargarProductosEnCarrito();

function actualizarBotonEliminar (){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito);
    });
};

function eliminarDelCarrito (event){
    const idBoton = event.currentTarget.id
    const productoEliminado = carrito.find(producto => producto.id === idBoton);
    
    carrito.splice(carrito.indexOf(productoEliminado, 1));
    console.log(productoEliminado);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    cargarProductosEnCarrito();
}


botonVaciar.addEventListener("click",vaciarCarrito);
    function vaciarCarrito (){
        carrito.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        cargarProductosEnCarrito();
    }
    

function actualizarTotal(){
    const totalCalculado = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click",comprarCarrito);
    function comprarCarrito (){
        carrito.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        carritoVacio.classList.add("disable");
        carritoProductos.classList.add("disable");
        carritoAcciones.classList.add("disable");
        carritoComprado.classList.remove("disable");

        fetch("https://api.mercadopago.com")
        .then(response => response.json())
        .then(data => {
            
            const modalContent = document.querySelector(".contenido-modal");
            modalContent.innerHTML = `
                <span class="cerrar">&times;</span>
                <h2>Compra realizada</h2>
                <p>Tu compra ha sido exitosa.</p>
                <p>Información adicional: ${data.informacion}</p>
            `;

            const modal = document.querySelector("#modal");
            const botonCerrar = document.querySelector(".cerrar")[0];

            modal.style.display = "block";

            botonCerrar.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        })
        .catch(error => {
            console.error("Error al obtener la información:", error);
        });
    }
    











































































































































