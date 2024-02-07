import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

let arrayProducts = [];

fetch("./public/products.json")
    .then(response=>response.json())
    .then(data => {
        arrayProducts = data;
        productUpdate(arrayProducts);
        resetBtnAdd();
    })

let conteinerProducts = document.querySelector("#conteiner-products");
let btnsGl = document.querySelectorAll(".btn-gl");
let mainTitle = document.querySelector("#title-main");
let btnsAdd = document.querySelectorAll(".btn-add-cart");
const contadorCart = document.querySelector("#counter-cart")

resetBtnAdd();
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

// productUpdate(arrayProducts);

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

    Toastify({
        text: "Su producto se agrego al carrito.",
        duration: 2500,
        destination: "./pages/carrito.html",
        newWindow: false,
        close: false,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #9e1a6b, #480b31)",
            borderRadius: "2rem",
        },
        onClick: function(){}
    }).showToast();

    const idAddCart = event.currentTarget.id;

    const selectedProduct = arrayProducts.find(product => product.id === idAddCart);

    /*Validamos existencia del producto en el array y si el some es true aumenta la cantidad del producto */
    if(productCart.some(product =>product.id === idAddCart)){
        /* si el producto ya se encuentra se suma uno a la cantidad */
        selectedProduct.cantidad++;
    }else{
        selectedProduct.cantidad = 1;
        productCart.push(selectedProduct);
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





