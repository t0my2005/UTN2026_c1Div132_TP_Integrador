function obtenerCarrito(){

    const carritoGuardado = localStorage.getItem("carrito");

    if(carritoGuardado){
        return JSON.parse(carritoGuardado);
    }

    return [];

}



function mostrarCarrito(){

    const carrito = obtenerCarrito();

    const tabla = document.querySelector("#tabla-carrito");

    const totalHTML = document.querySelector("#total-carrito");


    let total = 0;


    tabla.innerHTML = "";


    carrito.forEach(producto => {


        const subtotal = producto.precio * producto.cantidad;


        total += subtotal;



        const fila = document.createElement("tr");


        fila.innerHTML = `

            <td>${producto.nombre}</td>

            <td>${producto.cantidad}</td>

            <td>$${producto.precio}</td>

            <td>$${subtotal}</td>

            <td>
                <button class="btn-eliminar" data-nombre="${producto.nombre}">Eliminar
                </button>
            </td>

        `;


        tabla.appendChild(fila);


    });


    totalHTML.textContent = total;


}




function guardarCarrito(carrito){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}



function eliminarProducto(nombreProducto){

    let carrito = obtenerCarrito();


    carrito = carrito.filter(
        producto => producto.nombre !== nombreProducto
    );


    guardarCarrito(carrito);


    mostrarCarrito();

}



window.addEventListener("DOMContentLoaded", () => {

    mostrarCarrito();


    const tabla = document.querySelector("#tabla-carrito");


    tabla.addEventListener("click", (e)=>{


        if(e.target.classList.contains("btn-eliminar")){


            const nombre = e.target.dataset.nombre;


            eliminarProducto(nombre);

        }

    });


});