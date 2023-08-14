const main = document.querySelector("#main");
const section = document.createElement("section");
section.classList.add("contactos-container");
section.innerHTML = `
                    <div  id="formContactos" class="form-contactos">
                        <div class="title-contactos-container">
                            <h1>Contacto</h1>
                        </div>
                        <div class="paragraph-contactos-container">
                            <p>Para contactarte con el equipo de Mamba Design, te pedimos que completes el siguiente formulario con tu consulta y tus datos para poder contactarte.</p>
                        </div>  
                        <div class="form-contactos-group">
                            <input type="text" name="nombre" id="name" class="input-contactos" placeholder="Nombre">
                            <label for="name" class="lebel-contactos"></label>
                        </div>
                        <div class="form-contactos-group">
                            <input type="text" name="apellido" id="lastName" class="input-contactos" placeholder="Apellido">
                            <label for="last-name" class="lebel-contactos"></label>
                        </div>
                        <div class="form-contactos-group">
                            <input type="text" name="email" id="mail" class="input-contactos" placeholder="Email">
                            <label for="mail" class="lebel-contactos"></label>
                        </div>
                        <div class="form-contactos-group">
                            <input type="text" name="telefono" id="telephone" class="input-contactos" placeholder="Telefono">
                            <label for="telephone" class="lebel-contactos"></label>
                        </div>
                        <div class="form-contactos-group">
                            <input type="text" name="motivo" id="motive" class="input-contactos" placeholder="Motivo">
                            <label for="Motive" class="lebel-contactos"></label>
                        </div>
                        <div class="form-contactos-group">
                            <input type="text" name="consulta" id="consultation" class="input-contactos" placeholder="¿Cual es tu consulta?">
                            <label for="consultation" class="lebel-contactos"></label>
                        </div>
                        <div class="form-contactos-group">
                            <input type="text" name="mensaje" id="message" class="input-contactos" placeholder="Mensaje">
                            <label for="message" class="lebel-contactos"></label>
                        </div>
                        <div>
                        <button id="botonForm" class="form-contactos-submit"> Enviar </button>
                        </div>
                    </div>      
`
main.appendChild(section);

const baseDeDatosDeconsultas = {};

const consultas = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    motivo: "",
    consulta: "",
    mensaje: "",
};

const form = document.querySelector("#formContactos");
const inputs = document.querySelectorAll("input");
// const botonForm = document.querySelector("#botonForm");

const respuesta = (nombre, apellido) => {
    form.innerHTML = `<h4 class="form-contactos"> ${nombre} ${apellido} tu consulta ya fue enviada, gracias por contactarnos </h4>`
};

inputs.forEach((elemento) =>{
    elemento.addEventListener("input", (event)=>{
        consultas[event.target.name] = event.target.value
    })
});

// botonForm.addEventListener("submit", (event) =>{
//     event.preventDefault();
        
//     const contactos = JSON.parse(localStorage.getItem("contactos"));
// });





















































































































































