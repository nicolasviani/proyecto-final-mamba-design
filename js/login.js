import baseDeDatos from '../js/bdd.js';

const main = document.querySelector("#contenedorGeneral");
const section = document.createElement("section");
section.classList.add("main-container");
section.innerHTML = `
                <form id="form" class="form">
                    <h2 class="form-titulo">Iniciar sesion</h2>
                    <p class="form-subtitulo">¿Aun no tenes una cuenta?</p>
                    <div class="form-container">
                        <div class="form-grupo">
                            <input type="text" id="nombre" name="nombre" class="form-input" placeholder="Nombre">
                            <label for="nombre" class="form-label"></label>
                            <span class="form-linea"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text" id="email" name="email" class="form-input" placeholder="E-mail">
                            <label for="email" class="form-label"></label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text" id="contraseña" name="contraseña" class="form-input" placeholder="Contraseña">
                            <label for="contraseña" class="form-label"></label>
                            <span class="form-line"></span>
                        <div class="form-container">
                            <button id="enviar" class="boton"> Iniciar sesion </button>
                        </div>
                    </div>
                </form>
                `

main.appendChild(section);

const user = {
    nombre: "",
    email: "",
    contraseña: "",
};

const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || baseDeDatos;
console.log(usuariosRegistrados);

if(!localStorage.getItem("usuariosRegistrados")){
    localStorage.setItem("usuariosRegistrados",JSON.stringify(usuariosRegistrados));
}

const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const botonIniciarSesion = document.querySelector("#enviar");


const bienvenida = nombre =>{
    Swal.fire({
        icon: 'success',
        title: 'Genial...',
        text: `Bienvenido ${nombre} a Mamba Desing...`,
        footer: '<a href="./index.html">Ir a inicio</a>'
      });
      Toastify({
        text: `Hola ${nombre}`,
        duration: 4000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
};

const bienvenidaUndefined = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No estas registrado...',
        footer: '<a href="./registrate.html">¿Quieres registrarte?</a>'
        });
};

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    const usuarios = usuariosRegistrados.find((personas) => user.nombre === personas.nombre && user.email === personas.email && user.contraseña === personas.contraseña);
    if(usuarios !== undefined){
            bienvenida(usuarios.nombre);
            localStorage.setItem("usuario",JSON.stringify(usuarios));
    }else{
        bienvenidaUndefined();
    }
});

inputs.forEach((elemento) =>{
    elemento.addEventListener("input", (event) =>{
        user[event.target.name] = event.target.value;
    });
});

