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
    emali: "",
    contraseña: "",
};

const login = document.querySelector("#mainContainer");
login = document.createElement("section");
login.innerHTML = `
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
