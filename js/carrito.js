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
    
        carritoVacio.classList.add("disable");
        carritoProductos.classList.remove("disable");
        carritoAcciones.classList.remove("disable");
        carritoComprado.classList.add("disable");
    
        carritoProductos.innerHTML = "";
    
        carrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.image}" alt="${producto.name}">
            <div class="carrito-producto-titulo">
                <small>${producto.name}</small>
                <h3>Buzo Hugo Boss</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>${producto.quantity}</small>
                <p>1</p>
            </div>
            <div class="carrito-producto-precio">
                <small>${producto.price}</small>
                <p>$25999</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>${producto.price * producto.quantity}</small>
                <p>$25999</p>
            </div>
            <but class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></but
            `
            carritoProductos.append(div);
        });
    
    }else{
        carritoVacio.classList.remove("disable");
        carritoProductos.classList.add("disable");
        carritoAcciones.classList.add("disable");
        carritoComprado.classList.add("disable");
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
    
    carrito.splice(index, 1);
    cargarProductosEnCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


botonVaciar.addEventListener("click",vaciarCarrito);
    function vaciarCarrito (){
        carrito.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        cargarProductosEnCarrito();
    }
    

function actualizarTotal(){
    const totalCalculado = carrito.reduce((acumulador, producto) => acumulador + (producto.price * producto.quantity), 0);
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
    }
    











































































































































