const main = document.querySelector("#contenedorGeneral");
const section = document.createElement("section");
section.classList.add("section-container");
section.innerHTML = `
                <form id="form" class="form">
                    <h2 class="form-titulo">Registrate</h2>
                    <p class="form-subtitulo">Mamba Design...</p>
                    <div class="form-container">
                        <div class="form-grupo">
                            <input type="text" id="name" name="nombre" class="form-input" placeholder="Nombre">
                            <label for="Nombre" class="form-label"></label>
                            <span class="form-linea"></span>
                        </div>
                        <div class="form-grupo">
                        <input type="text" id="lastName" name="apellido" class="form-input" placeholder="Apellido">
                        <label for="Apellido" class="form-label"></label>
                        <span class="form-linea"></span>
                    </div>
                        <div class="form-grupo">
                            <input type="email" id="email" name="email" class="form-input" placeholder="E-mail">
                            <label for="E-mail" class="form-label"></label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text" id="password" name="contarseña" class="form-input" placeholder="Contraseña">
                            <label for="Contraseña" class="form-label"></label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                        <input type="text" id="confirmPassword" name="confirma contraseña" class="form-input" placeholder="Conf.contraseña">
                        <label for="Conf.contraseña" class="form-label"></label>
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
    Swal.fire({
        title: '¿Quieres guardar los datos ingresados?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire('Registro exitoso!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No guardar el usuario?', '', 'info')
        }
      });
};

const errorDeRegistro = () =>{
    Swal.fire(
        'Los datos ingresados son incorrectos',
        'Alguno de los campos ingresados no coincide',
        'error'
      );
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