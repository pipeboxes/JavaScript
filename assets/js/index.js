precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
suma = document.querySelector(".sumar");
resta = document.querySelector(".restar");
cantidad = document.querySelector(".cantidad");
total = document.querySelector(".valor-total");

suma.onclick = () => {
    cantidad.textContent = parseInt(cantidad.textContent) + 1;
    multiplicar()
}

resta.onclick = () => {
    cantidad.textContent = parseInt(cantidad.textContent) - 1;
    multiplicar()
}

multiplicar = () => {
    total.textContent = parseInt(cantidad.textContent) * precio;
}