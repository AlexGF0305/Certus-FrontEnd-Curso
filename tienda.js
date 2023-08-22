//Se declara el tipo de producto para la tienda
const tipoProductoSelect = document.getElementById("tipo-producto");
const productoSelect = document.getElementById("producto");
const cantidadInput = document.getElementById("cantidad");
const carrito = document.getElementById("carrito");
const totalSpan = document.getElementById("total");
const agregarCarritoBtn = document.getElementById("agregar-carrito");
const confirmarBtn = document.getElementById("confirmar");
const pagoBtn = document.getElementById("pago");

let productosConfirmados = false;
const quitarBtns = [];

const productos = {
    alimento: [
        { nombre: "Ricocan (saco de 12 kilos)", precio: 120 },
        { nombre: "Ricocat (saco de 12 kilos)", precio: 120 },
        { nombre: "Mimaskot (saco de 12 kilos)", precio: 135 }
    ],
    camas: [
        { nombre: "Cama T1 (45 CM * 40 CM)", precio: 100 },
        { nombre: "Cama T2 (60 CM * 50 CM)", precio: 120 },
        { nombre: "Cama T3 (70 CM * 60 CM)", precio: 130 },
        { nombre: "Cama T4 (80 CM * 70 CM)", precio: 140 },
        { nombre: "Cama T5 (90 CM * 75 CM)", precio: 160 },
        { nombre: "Cama T6 (110 CM * 80 CM)", precio: 140 }
    ],
    juguetes: [
        { nombre: "Raton de juguete", precio: 15 },
        { nombre: "Hueso Masticable", precio: 20 },
        { nombre: "Mordedor", precio: 30 },
        { nombre: "Rascador", precio: 50 }
    ]
};

tipoProductoSelect.addEventListener("change", () => {
    productoSelect.innerHTML = "";
    productos[tipoProductoSelect.value].forEach(producto => {
        const option = document.createElement("option");
        option.value = producto.precio;
        option.textContent = `${producto.nombre} - S/.${producto.precio}`;
        productoSelect.appendChild(option);
    });
});

agregarCarritoBtn.addEventListener("click", () => {
    const selectedProducto = productoSelect.options[productoSelect.selectedIndex].text;
    const precioProducto = parseFloat(productoSelect.value);
    const cantidad = parseInt(cantidadInput.value);

    if (cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    const subtotal = precioProducto * cantidad;

    const listItem = document.createElement("li");
    listItem.textContent = `${cantidad} ${selectedProducto} - S/.${subtotal.toFixed(2)}`;

    const quitarBtn = document.createElement("button");
    quitarBtn.innerHTML = '<i class="fa-solid fa-circle-minus fa-shake" style="color: #000000;"></i>';
    quitarBtn.addEventListener("click", () => {
        if (!productosConfirmados) {
            carrito.removeChild(listItem);
            quitarProductoDelCarrito(listItem);
            recalcularTotal();
        }
    });

    quitarBtns.push(quitarBtn);

    if (!productosConfirmados) {
        listItem.appendChild(quitarBtn);
    }

    carrito.appendChild(listItem);

    agregarProductoAlCarrito(selectedProducto, subtotal);
    recalcularTotal();

    cantidadInput.value = "1";
    productoSelect.selectedIndex = 0;
});

confirmarBtn.addEventListener("click", () => {
    productosConfirmados = true;
    confirmarBtn.innerHTML = '<i class="fa-solid fa-circle-check fa-shake"></i>';
    quitarBtns.forEach(button => {
        button.disabled = true;
    });
    recalcularTotal();
    pagoBtn.disabled = false;
});

pagoBtn.addEventListener("click", () => {
    // Redirigir a la página de pago
    window.location.href = "pagina_de_pago.html"; // Cambia esto por la URL de la página de pago
});

function recalcularTotal() {
    let nuevoTotal = 0;

    const productosEnCarrito = carrito.querySelectorAll("li");
    productosEnCarrito.forEach(item => {
        const subtotal = parseFloat(item.textContent.match(/S\/\.(\d+\.\d+)/)[1]);
        nuevoTotal += subtotal;
    });

    totalSpan.textContent = nuevoTotal.toFixed(2);
}

function agregarProductoAlCarrito(selectedProducto, subtotal) {
    // ... (código para agregar el producto al carrito interno)
}

function quitarProductoDelCarrito(listItem) {
    // ... (código para quitar el producto del carrito interno)
}
