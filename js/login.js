const usuariosRegistrados = [
    {
        nombre: "nicolas",
        email: "viani.nicolas.87@gmail.com",
        contraseña: "1234",
    },
    {
        nombre: "daniel",
        email: "daniel.villajuan@gmail.com",
        contraseña: "profesorcoder",
    },
    {
        nombre: "julieta",
        email: "julieta.viani.pacheco@gmail.com",
        contraseña: "soyjuly",
    },
    
];

const usuarioNuevo = {
    nombre: "",
    email: "",
    contraseña: "",
};

const login = document.querySelector("#mainContainer");
const section = document.createElement("section");
section.innerHTML = `
                    <form id="form" class="form">
                    <h2 class="form-titulo">Inicia sesion</h2>
                    <p class="form-subtitulo">¿Aun no tenes una cuenta?</p>
                    <div class="form-container">
                        <div class="form-grupo">
                            <input type="text" id="name" class="form-input" placeholder="">
                            <label for="name" class="form-label">Nombre</label>
                            <span class="form-linea"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text" id="user" class="form-input" placeholder="">
                            <label for="user" class="form-label">E-mail</label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text" id="password" class="form-input" placeholder="">
                            <label for="password" class="form-label">Contraseña</label>
                            <span class="form-line"></span>
                        </div>
                        <div id="registrate" class="registrate"><a href="./registrate.html">Registrate</a></div>
                        <input type="submit" class="form-submit" value="entrar">
                    </div>
                    </form>
                            `
login.appendChild(section);

const usuariosRegistradosJson = localStorage.setItem("usuariosRegistrados",JSON.stringify(usuariosRegistrados));


const nombre = document.querySelector("#name");
const eMail = document.querySelector("#user");
const contraseña = document.querySelector("#password");
const registroNuevo = document.querySelector("#registrate");
const botonEntrar = document.querySelector(".form-submit");

nombre.addEventListener("input", (event) =>{
    usuariosRegistrados.nombre = event.target.value;
});

eMail.addEventListener("input", (event) =>{
    usuariosRegistrados.email = event.target.value;
});

contraseña.addEventListener("input", (event) =>{
    usuariosRegistrados.contraseña = event.target.value;
});

botonEntrar.addEventListener("submit", (event) =>{
    event.preventDefault();

    usuarios = localStorage.getItem("usuariosRegistrados",JSON.stringify(usuariosRegistrados));

    if(nombre != usuariosRegistrados.nombre || eMail != usuariosRegistrados.email || contraseña != usuariosRegistrados.contraseña){
        console.log("no existis");
    }else{
        const usuarioEncontrado = usuariosRegistrados.find((usuarios) => usuarios.email === eMail.value);
        const saludoDeBienvenida = document.querySelector(".form-container");
        saludoDeBienvenida.innerHTML = `<span class= "bienbenida"> Bienvenido sr/sra ${usuarioEncontrado.nombre}\n${usuarioEncontrado.email}</span>`
    }
});