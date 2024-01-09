const arrayProducts = [
    {
        id:"h01",
        nameProduct:"Caropardiaco",
        imageProduct:"./assets/images/hamburguesas/caropardiaco.jpg",
        categoryProduct:{
            nameCategory:"Hamburguesas",
            id:"hamburguesas",
        },
        descProduct:"Lomo, cheddar, cebolla caramelizada, beacon, huevo frito (Incluye papas).",
        priceProduct:"3500"
    },

    {
        id:"p01",
        nameProduct:"Bob Esponja",
        imageProduct:"./assets/images/pizzas/bobesponja.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Muzzarella, anana, beacon, verdeo.",
        priceProduct:"4800"
    },
    {
        id:"pf01",
        nameProduct:"Cheddita",
        imageProduct: "./assets/images/papas fritas/cheddita.jpg",
        categoryProduct:{
            nameCategory:"Papas",
            id:"papas",
        },
        descProduct:"Papas, cheddar, salchicha alemana.",
        priceProduct:"2800"
    },
    {
        id:"h02",
        nameProduct:"Cebollita",
        imageProduct:"./assets/images/hamburguesas/cebollita.jpg" ,
        categoryProduct:{
            nameCategory:"Hamburguesas",
            id:"hamburguesas",
        },
        descProduct:"Medallon de pollo, lomo, lechuga, tomate, cheddar, palta, cebolla caramelizada (Incluye papas).",
        priceProduct:"3800"
    },
    {
        id:"p02",
        nameProduct:"Calabreza",
        imageProduct:"./assets/images/pizzas/calabreza.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Muzzarella, salame ahumado.",
        priceProduct:"4400"
    },
    {
        id:"h03",
        nameProduct:"Doble o Nada",
        imageProduct:"./assets/images/hamburguesas/dobleonada.jpg" ,
        categoryProduct:{
            nameCategory:"Hamburguesas" ,
            id:"hamburguesas",
        },
        descProduct:"Doble medallon, doble cheddar, beacon, aros marinados de cebolla (Incluye papas).",
        priceProduct:"3800"
    },
    {
        id:"p03",
        nameProduct:"Elote",
        imageProduct:"./assets/images/pizzas/elote.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Muzzarella, choclo, jamon crudo, oregano.",
        priceProduct:"4600"
    },
    {
        id:"pf02",
        nameProduct:"Chicholina",
        imageProduct:"./assets/images/papas fritas/chicholina.jpg",
        categoryProduct:{
            nameCategory:"Papas",
            id:"papas",
        },
        descProduct:"Papas, salchicha alemana, huevo duro.",
        priceProduct:"2600"
    },
    {
        id:"h04",
        nameProduct:"Guacamayo",
        imageProduct:"./assets/images/hamburguesas/guacamayo.jpg" ,
        categoryProduct:{
            nameCategory:"Hamburguesas" ,
            id:"hamburguesas",
        },
        descProduct:"Doble medallon de carne marinado, cheddar, tomate, palta (Incluye papas).",
        priceProduct:"3600"
    },
    {
        id:"p04",
        nameProduct:"Mushroom",
        imageProduct:"./assets/images/pizzas/mushroom.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Muzzarella, championines, albahaca, oregano.",
        priceProduct:"4700"
    },
    {
        id:"h05",
        nameProduct:"Jamaican",
        imageProduct:"./assets/images/hamburguesas/jamaican.jpg" ,
        categoryProduct:{
            nameCategory:"Hamburguesas" ,
            id:"hamburguesas",
        },
        descProduct:"Medallon, cheddar, lechuga, pepino, beacon, anana, palta (Incluye papas).",
        priceProduct:"3700"
    },
    {
        id:"p05",
        nameProduct:"Muzza",
        imageProduct:"./assets/images/pizzas/muzza.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Muzzarella, oregano.",
        priceProduct:"4000"
    },
    {
        id:"pf03",
        nameProduct:"Chiken Little",
        imageProduct:"./assets/images/papas fritas/chikenlittle.jpg" ,
        categoryProduct:{
            nameCategory:"Papas",
            id:"papas",
        },
        descProduct:"Papas, muzzarella, choclo, pollo desmenusado.",
        priceProduct:"3000"
    },
    {
        id:"h06",
        nameProduct:"Lomo Burgues",
        imageProduct:"./assets/images/hamburguesas/lomoburgues.jpg" ,
        categoryProduct:{
            nameCategory:"Hamburguesas" ,
            id:"hamburguesas",
        },
        descProduct:"Medallon de carne marinado, lomo, verdeo salteada, tomate (Incluye papas).",
        priceProduct:"3700"
    },
    {
        id:"p06",
        nameProduct:"Napolitana",
        imageProduct:"./assets/images/pizzas/napolitana.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Muzzarella, tomate, oregano.",
        priceProduct:"4000"
    },
    {
        id:"h07",
        nameProduct:"Suculenta",
        imageProduct:"./assets/images/hamburguesas/suculenta.jpg" ,
        categoryProduct:{
            nameCategory:"Hamburguesas" ,
            id:"hamburguesas",
        },
        descProduct:"Medallon de carne, pepino, salsa de ajo, cebolla caramelizada, cheddar, lechuga (Incluye papas).",
        priceProduct:"3400"
    },
    {
        id:"p07",
        nameProduct:"Onion",
        imageProduct:"./assets/images/pizzas/onion.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Cebolla morada, muzzarella, nueces. ",
        priceProduct:"4400"
    },
    {
        id:"pf04",
        nameProduct:"Matar o Morir",
        imageProduct:"./assets/images/papas fritas/mataromorir.jpg" ,
        categoryProduct:{
            nameCategory:"Papas",
            id:"papas",
        },
        descProduct:"Papas, beacon, muzzarella, lomo desmenusado, huevo duro.",
        priceProduct:"3200"
    },
    {
        id:"h08",
        nameProduct:"Tapa Arteria",
        imageProduct:"./assets/images/hamburguesas/taparteria.jpg",
        categoryProduct:{
            nameCategory:"Hamburguesas" ,
            id:"hamburguesas",
        },
        descProduct:"Triple medallon, triple cheddar, triple beacon, huevo frito, salsa de ajo (Incluye papas).",
        priceProduct:"4000"
    },
    {
        id:"p08",
        nameProduct:"Vegeta",
        imageProduct:"./assets/images/pizzas/vegeta.jpg",
        categoryProduct:{
            nameCategory:"Pizzas",
            id:"pizzas",
        },
        descProduct:"Morron, berenjena, muzzarella, salsa de chaucha.",
        priceProduct:"4200"
    },
    {
        id:"h09",
        nameProduct:"Veggie",
        imageProduct:"./assets/images/hamburguesas/veggie.jpg",
        categoryProduct:{
            nameCategory:"Hamburguesas" ,
            id:"hamburguesas",
        },
        descProduct:"Medallon lenteja, pepino, cheddar, lechuga, tomate, cebolla.(Incluye papas).",
        priceProduct:"3000"
    },
    {
        id:"pf05",
        nameProduct:"Papolitana",
        imageProduct:"./assets/images/papas fritas/papolitana.jpg" ,
        categoryProduct:{
            nameCategory:"Papas",
            id:"papas",
        },
        descProduct:"Papas, muzzarella, salsa de tomate, tomate.",
        priceProduct:"2800"
    },
];

let conteinerProducts = document.querySelector("#conteiner-products");
let btnsGl = document.querySelectorAll(".btn-gl");
let mainTitle = document.querySelector("#title-main");
let btnsAdd = document.querySelectorAll(".btn-add-cart");
const contadorCart = document.querySelector("#counter-cart")


/*funcion para cargar los productos que contiene el array enviado por parametro */
const productUpdate = (selecProducts) => {
    /* reset del array para no superponer los productos */
    conteinerProducts.innerHTML = "";
    /* se recorre el array y se crea un div por cada producto con la clase dada*/
    selecProducts.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("product-card")
        div.innerHTML = `
        <img class="product-img" src="${product.imageProduct}" alt="${product.nameProduct}">
        <div class="description-card">
            <h2 class="product-name">${product.nameProduct}</h2>
            <p class="product-description">${product.descProduct}</p>
            <p class="product-price">$${product.priceProduct}</p>
            <button class="btn-add-cart" id="${product.id}">Agregar al carrito</button>
        </div>
        `
        conteinerProducts.append(div);
    })
}

productUpdate(arrayProducts);

/*funcion para discriminar por los botones del navbar los productos deseados atraves del evento click*/
btnsGl.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.currentTarget.id !== "alls"){
            /*cambiamos el titulo por el nombre de la categoria del producto con el id seleccionado */
            const productCategory = arrayProducts.find( product => product.categoryProduct.id === e.currentTarget.id);
            mainTitle.innerText = productCategory.categoryProduct.nameCategory;
            /*filtramos los productos por categorias */
            const productSelect = arrayProducts.filter(product => product.categoryProduct.id === e.currentTarget.id);
            productUpdate(productSelect);
            resetBtnAdd();
        } else{
            mainTitle.innerText = "Todos los Productos";
            productUpdate(arrayProducts);
            resetBtnAdd();
        }
    })
});

/*se resetean los botones de agregar al carrito*/
function resetBtnAdd() {
    btnsAdd = document.querySelectorAll(".btn-add-cart");
    btnsAdd.forEach(btn => {
        btn.addEventListener("click", getIdAddCart);
    });
}

/* Llama a resetBtnAdd después de haber inicializado tus botones btnsAdd */
resetBtnAdd();

/*declaramos el array que va a obtener los productos del carrito*/
let productCart;

/*creamos una constante con los productos que se encuentran en el local storage*/
const productCartLoadLocalStorage = JSON.parse(localStorage.getItem("products-cart"));

if(productCartLoadLocalStorage){
    productCart = productCartLoadLocalStorage;
    itemsCartCounter();
} else {
    productCart=[];
}

/*funcion para obtener el id del producto para pushear en el array del carrito*/
function getIdAddCart(event) {
    const idAddCart = event.currentTarget.id;
    console.log("ID del botón 'Agregar al carrito':", idAddCart);

    const selectedProduct = arrayProducts.find(product => product.id === idAddCart);

    /*Validamos existencia del producto en el array y si el some es true aumenta la cantidad del producto */
    if(productCart.some(product =>product.id === idAddCart)){
        /* si el producto ya se encuentra se suma uno a la cantidad */
        selectedProduct.cantidad++;
        console.log(productCart);
    }else{
        selectedProduct.cantidad = 1;
        productCart.push(selectedProduct);
        console.log(productCart);
    }
    itemsCartCounter();

    /*Enviamos el array al localstorage para poder llamarlo desde el carrito */
    localStorage.setItem("products-cart", JSON.stringify(productCart));
}

/*funcion para actualizar el numero de items en el carrito del nav */
function itemsCartCounter(){
    let counterCart = productCart.reduce((acumulador, product) => acumulador + product.cantidad, 0)
    contadorCart.innerText = counterCart;
}





