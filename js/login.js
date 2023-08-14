import baseDeDatos from '../js/bdd.js';

const main = document.querySelector("#contenedorGeneral");
const section = document.createElement("section");
section.classList.add("main-container");
section.innerHTML = `
                <form id="form" class="form">
                    <h2 class="form-titulo">Inicia sesion</h2>
                    <p class="form-subtitulo">¿Aun no tenes una cuenta?</p>
                    <div class="form-container">
                        <div class="form-grupo">
                            <input type="text" name="nombre" class="form-input" placeholder="">
                            <label for="name" class="form-label-1">Nombre</label>
                            <span class="form-linea"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="email" name="email" class="form-input" placeholder="">
                            <label for="user" class="form-label-1">E-mail</label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text"  name="contraseña" class="form-input" placeholder="">
                            <label for="password" class="form-label-1">Contraseña</label>
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

const usuariosRegistrados = JSON.parse(localStorage.getItem("usuario"));

const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const botonIniciarSesion = document.querySelector("#enviar");

const bienvenida = nombre =>{
    form.innerHTML = `<h3 class="form-titulo"> Bienvenido ${nombre} a Mamba Desing... </h3> `
};

const bienvenidaUndefined = () => {
    form.innerHTML = `<h3 class="form-titulo"> No estas registrado... </h3>
                        <div id="registrate" class="registrate">
                            <button class="boton"><a href="./registrate.html">Registrate</a></button>
                        </div>                              
                        `
};

botonIniciarSesion.addEventListener("click",() =>{
    const usuarios = baseDeDatos.find((personas) => user.nombre === personas.nombre && user.email === personas.email && user.contraseña === personas.contraseña);
    if(usuarios != undefined){
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