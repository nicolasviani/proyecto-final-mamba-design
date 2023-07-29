const dataBase =[
    {
        nombre: "nicolas",
        email: "viani.nicolas.87@gmail.com",
        password: "nataliteamo",
    }
];

const nameUser = document.querySelector("#name");
const eMail = document.querySelector("#user");
const password = document.querySelector("#password");
const sendButton = document.querySelector(".form");

const newUsers ={
    nombre: "",
    email: "",
    password: "",
};

nameUser.addEventListener("input",(event) =>{
    newUsers.nombre = event.target.value
});

eMail.addEventListener("input",(event) =>{
    newUsers.email = event.target.value
});

password.addEventListener("input",(event) =>{
    newUsers.password = event.target.value
});

sendButton.addEventListener("submit",(event) =>{
    event.preventDefault();

    const userFound = dataBase.find((el) =>el.nombre === newUsers.nombre && el.email === newUsers.email && el.password === newUsers.password);
    
        if(newUsers === undefined){
            alert("Debes registrarte");
            newUsers.nombre = nameUser.value,
            newUsers.email = eMail.value,
            newUsers.password = password.value,
            dataBase.push(newUsers);
            console.log(dataBase);
        }else {
            const generalForm = document.querySelector(".form");
            generalForm.innerHTML = `<span><span class="bienvenida">Bienvenido sr/sra ${userFound.nameUser}</span>`
        }
});
