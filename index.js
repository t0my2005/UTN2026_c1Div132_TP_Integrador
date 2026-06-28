let miCarrito = [];


// Obtener carrito del LocalStorage
function obtenerCarrito() {

    const carritoGuardado = localStorage.getItem("carrito");

    if(carritoGuardado){
        return JSON.parse(carritoGuardado);
    }

    return miCarrito;
}


// Guardar carrito en LocalStorage
function guardarCarrito(carrito){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}



// Agregar producto al carrito
function agregarAlCarrito(e){

    let carrito = obtenerCarrito();


    // Obtiene el li del producto clickeado
    const productoHTML = e.target.closest("li");


    const nombre = productoHTML
        .querySelector(".nombre-producto")
        .textContent;


    const precio = productoHTML
        .querySelector(".precio-producto")
        .textContent
        .replace("$","")
        .replace(".","")
        .replace(",","");


    let productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );


    if(productoExistente){

        productoExistente.cantidad++;

    } else {

        carrito.push({

            nombre: nombre,
            precio: Number(precio),
            cantidad: 1

        });

    }


    guardarCarrito(carrito);


    alert(`${nombre} fue agregado al carrito 🛍️`);

}



// Eventos

window.addEventListener("DOMContentLoaded",()=>{

    const botonesCarrito = document.querySelectorAll(".boton-carrito");


    botonesCarrito.forEach(btn=>{

        btn.addEventListener(
            "click",
            agregarAlCarrito
        );

    });

});