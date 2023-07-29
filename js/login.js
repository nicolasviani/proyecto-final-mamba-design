const dataBase =[];

const userName = document.querySelector("#name");
const userLastName = document.querySelector("#lastName");
const eMail = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const sendButton = document.querySelector("#send");

const newUser = {
    name:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
};

userName.addEventListener("input", (event) => {
    newUser.name = event.target.value;
});

userLastName.addEventListener("input", (event) => {
    newUser.lastName = event.target.value;
});

eMail.addEventListener("input", (event) => {
    newUser.email = event.target.value;
});

password.addEventListener("input", (event) => {
    newUser.password = event.target.value;
});

sendButton.addEventListener("click", () =>{
    
})
