const main = document.querySelector("#contenedorGeneral");
const section = document.createElement("section");
section.classList.add("section-container");
section.innerHTML = `
                <form id="form" class="form">
                    <h2 class="form-titulo">Registrate</h2>
                    <p class="form-subtitulo">Mamba Design...</p>
                    <div class="form-container">
                        <div class="form-grupo">
                            <input type="text" name="nombre" class="form-input" placeholder="">
                            <label for="name" class="form-label">Nombre</label>
                            <span class="form-linea"></span>
                        </div>
                        <div class="form-grupo">
                        <input type="text" name="apellido" class="form-input" placeholder="">
                        <label for="name" class="form-label">Apellido</label>
                        <span class="form-linea"></span>
                    </div>
                        <div class="form-grupo">
                            <input type="email" name="email" class="form-input" placeholder="">
                            <label for="user" class="form-label">E-mail</label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text" name="contarseña" class="form-input" placeholder="">
                            <label for="password" class="form-label">Contraseña</label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                        <input type="text" name="confirma contraseña" class="form-input" placeholder="">
                        <label for="password" class="form-label">Confirma contraseña</label>
                        <span class="form-line"></span>
                    </div>
                    </div>
                    <div class="form-container">
                        <button id="registrate" class="boton"> Registrate </button>
                    </div>
                </form>
                `

main.appendChild(section);

const user = {
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    confirmaContraseña: "",
};

const form = document.querySelector("#form");
const inputs = document.querySelectorAll("inputs");
const botonRegistrate = document.querySelector("#registrate");

const felicitaciones = nombre =>{
    form.innerHTML = `<h3 class="form-titulo"> Felicitaciones ${nombre} ya estas registrado en Mamba Design </h3>
                        <div id="registrate" class="registrate">
                            <button class="boton"><a href="./login.html">Ir a login</a></button>
                        </div>
                        `
};

let nuevoUsuario = [];
nuevoUsuario = JSON.parse(localStorage.getItem([])) || [];

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    let usuarioEncontrado = false;

        nuevoUsuario.forEach((persona) =>{
        if(persona.nombre === nuevoUsuario.nombre && persona.apellido === nuevoUsuario.apellido && persona.email === nuevoUsuario.email && persona.contraseña === nuevoUsuario.contraseña && persona.confirmaContarseña === nuevoUsuario.confirmaContraseña){
            usuarioEncontrado = true;
            return
        }
    });
    if(!usuarioEncontrado){
        nuevoUsuario.push(nuevoUsuario);
        localStorage.setItem("nuevoUsuario",JSON.stringify(nuevoUsuario));
        felicitaciones(nuevoUsuario.nombre);
    };
});


inputs.forEach((elemento) =>{
    elemento.addEventListener("input", (event) =>{
        user[event.target.name] = event.target.value;
    });
});
