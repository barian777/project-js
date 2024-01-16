let productCartLoad = localStorage.getItem("products-cart");
productCartLoad = JSON.parse(localStorage.getItem("products-cart"));

let btnRemoveProduct = document.querySelectorAll(".btn-remove-cart");

const cartEmpty = document.querySelector("#empty-cart");
const cartConteiner = document.querySelector("#products-cart");
const cartBtnsCmd = document.querySelector("#cmd-cart-btns");
const cartBuyed = document.querySelector("#buy-cart-succes");
const btnEmptyCart =document.querySelector(".btn-empty-cart");
const btnBuyNow = document.querySelector(".btn-cart-buy");
const cntTotal = document.querySelector("#total")

const loadProductCart = () => {

    cartConteiner.innerText="";

    if(productCartLoad && productCartLoad.length > 0){
    
        cartEmpty.classList.add("disabled");
        cartConteiner.classList.remove("disabled");
        cartBtnsCmd.classList.remove("disabled");
        cartBuyed.classList.add("disabled");
    
        productCartLoad.forEach(product => {
            let div = document.createElement("div");
            div.classList.add("row-product-cart");
            div.innerHTML = `
                <img src=".${product.imageProduct}" alt="caropardiaco">
                <div class="category name-product-cart">
                    <small>Nombre</small>
                    <h2>${product.nameProduct}</h2>
                </div>
                <div class="category number-product-cart">
                    <small>Cantidad</small>
                    <p>${product.cantidad}</p>
                </div>
                <div class="category price-product-cart">
                    <small>Precio</small>
                    <p>$${product.priceProduct}</p>
                </div>
                <div class="category subtot-product-cart">
                    <small>Subtotal</small>
                    <p>$${product.priceProduct * product.cantidad}</p>
                </div>
                <button class="btn-remove-cart" alt="eliminar" id="${product.id}" ><i class="bi bi-trash-fill"></i></button>
            `;
            cartConteiner.append(div);
        });
    }else{
        cartEmpty.classList.remove("disabled");
        cartConteiner.classList.add("disabled");
        cartBtnsCmd.classList.add("disabled");
        cartBuyed.classList.add("disabled");
    };
    resetBtnsRemoveCartProduct();
    resetTotal();   
}

loadProductCart();


/*se resetean los botones de eliminar producto del carrito*/
function resetBtnsRemoveCartProduct() {
    btnsRemove = document.querySelectorAll(".btn-remove-cart");
    btnsRemove.forEach(btn => {
        btn.addEventListener("click", removeProductCart);
    });
}

function resetTotal(){
    const totalBuy = productCartLoad.reduce((acumulador, product) => acumulador + (product.priceProduct * product.cantidad), 0);
    total.innerText = `$${totalBuy}`;
}
/*creamos una funcion para eliminar los productos del carrito*/
function removeProductCart(event){

    const idRmvBtn = event.currentTarget.id;
    /*buscamos el indice del preducto que es igual al id*/
    const iProduct = productCartLoad.findIndex(product => product.id === idRmvBtn);
    /*utilizamos el metodo splice para borrar con el indice y la cantidad de lugares*/
    productCartLoad.splice(iProduct, 1);
    loadProductCart();
    if(productCartLoad.length === 0){
        cartEmpty.classList.remove("disabled");
        cartConteiner.classList.add("disabled");
        cartBtnsCmd.classList.add("disabled");
        cartBuyed.classList.add("disabled");
    }

    localStorage.setItem("products-cart", JSON.stringify(productCartLoad));
}

btnEmptyCart.addEventListener("click", emptyCart)
function emptyCart() {

    Swal.fire({
        background:"antiquewhite",
        title: "¿Estás seguro?",
        color:"#480b31",
        text: "Desea eliminar todos los productos del carrito",
        icon: 'question',
        iconColor:"#5F0F40",
        confirmButtonColor:"#9e1a6b",
        showCancelButton: true,
        cancelButtonColor:"#480b31",
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productCartLoad.length = 0;
            localStorage.setItem("products-cart", JSON.stringify(productCartLoad));
            loadProductCart();
        }
    })
};

btnBuyNow.addEventListener("click", buyAllNow);
function buyAllNow(){
    Swal.fire({
        title: "Gracias por elegirnos",
        text: "Su compra se ha realizado con exito!!",
        color:"#480b31",
        icon: "success",
        confirmButtonColor:"#9e1a6b",
        timer:3000
    });
    productCartLoad.length = 0;
    cartEmpty.classList.remove("disabled");
    cartConteiner.classList.add("disabled");
    cartBtnsCmd.classList.add("disabled");
    cartBuyed.classList.add("disabled");
    localStorage.setItem("products-cart", JSON.stringify(productCartLoad));
}
