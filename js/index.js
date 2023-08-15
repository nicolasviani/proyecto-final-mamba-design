// const input = document.querySelector("#click");

// const navbar = [
//     {
//         id:1,
//         categoria: ["remeras de hombre", "pantalones de hombres", "zapatillas de hombres"],
//     },
// ];

const main = document.querySelector("#mainIndex");

const productos =[   
    {
    id: 1,
    image: "/assets/images/hombre-main-inicio/img 14 hombre-png",
    name: "Remera Smile",
    category: "Remeras de hombres",
    price: "$17999",
    size: ["S", "M", "L", "XL"],
    quantity: 1,
    },
    {
        id: 13,
        image: "/assets/images/hombre-main-inicio/chaleco-deportivo.jpg",
        name: "Chalecos deportivos",
        category: "Buzo/camperas de hombres",
        price: "$25999",
        size: ["S", "M", "L", "XL"],
        quantity: 1,
    },
    {
        id: 16,
        image: "/assets/images/hombre-main-inicio/buzo-smile.jpg",
        name: "Buzo Smile",
        category: "Buzo/camperas de hombres",
        price: "$28999",
        size: ["S", "M", "L", "XL"],
        quantity: 1,
    },
    {
        id: 25,
        image: "/assets/images/hombre-main-inicio/conjunto-jordan.jpg",
        name: "Conjunto deportivo Puma",
        category: "Pantalones de hombres",
        price: "$45999",
        size: ["S", "M", "L", "XL"],
        quantiy: 1,
    },
]

let carrito = [];
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((elemento) =>{
    let cardsContenedor = document.createElement("div");
    cardsContenedor.classList.add("cards-container");
    cardsContenedor.innerHTML = `
                        <div class="card-container">
                            <img src="${elemento.image}" alt="${elemento.name}">
                            <p>${elemento.name}</p>
                            <p>${elemento.category}</p>
                            <p>${elemento.price}</p>
                        </div>
                        `
});

main.appendChild(cardsContenedor);

// const botonTalles = document.querySelectorAll("#botonTalles");

// section.appendChild(botonTalles);


/* <button id="botonTalles">${elemento.size}</a></button> */
/* <button id="botonComprar"><a href="./pages/compras.html">comprame</a></button> */

/*<section>
            <div class="cards-container">
                <div class="card-container">
                    <img src="./assets/images/hombres-main-inicio/buzo-smile.jpg" alt="buzo smile">
                    <p>Buzo smile</p>
                    <p>$25000</p>
                    <button><a href="./pages/hombres.html">comprame</a></button>
                </div> */




/* <div class="auxiliary-menu"> 
<input placeholder="Buscar" type="text" id="clic" class="input-container">
<label for="clic"><img src="./assets/logos/lupa-input.png.png" alt="lupa del buscador"></label>
<div class="icon-container">
    
</div>
</div> */