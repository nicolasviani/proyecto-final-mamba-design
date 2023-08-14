
const main = document.querySelector("#contenedorGeneral");
const section = document.createElement("section");
section.classList.add("section-container");
section.innerHTML = `
                <form id="form" class="form">
                    <h2 class="form-titulo">Registrate</h2>
                    <p class="form-subtitulo">Mamba Design...</p>
                    <div class="form-container">
                        <div class="form-grupo">
                            <input type="text" id="name" name="nombre" class="form-input" placeholder="">
                            <label for="name" class="form-label">Nombre</label>
                            <span class="form-linea"></span>
                        </div>
                        <div class="form-grupo">
                        <input type="text" id="lastName" name="apellido" class="form-input" placeholder="">
                        <label for="name" class="form-label">Apellido</label>
                        <span class="form-linea"></span>
                    </div>
                        <div class="form-grupo">
                            <input type="email" id="email" name="email" class="form-input" placeholder="">
                            <label for="user" class="form-label">E-mail</label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text" id="password" name="contarseña" class="form-input" placeholder="">
                            <label for="password" class="form-label">Contraseña</label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                        <input type="text" id="confirmPassword" name="confirma contraseña" class="form-input" placeholder="">
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

const form = document.querySelector("#form");

const felicitaciones = () =>{
    form.innerHTML = `<h3 class="form-titulo"> Felicitaciones ya estas registrado en Mamba Design </h3>
                        <div id="registrate" class="registrate">
                            <button class="boton"><a href="./login.html">Ir a login</a></button>
                        </div>
                        `
};

const errorDeRegistro = () =>{
    form.innerHTML = `<h3 class="form-titulo"> los datos ingresados no coinciden </h3>`
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const eMail = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        errorDeRegistro();
        return
    }else {
        felicitaciones();
    }

    const user = {
        nombre: name,
        apellido: lastName,
        email: eMail,
        contraseña: password,
    };

    let users = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    users.push(user);

    localStorage.setItem("usuariosRegistrados",JSON.stringify(users));

    form.reset();
});