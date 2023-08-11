// Se asigna una funcion para que salga una ventana emergente validando los datos

function Enviar() {
    var nombre = document.getElementById("txtName").value;
    var telefono = document.getElementById("txtTelefono").value;
    var email = document.getElementById("txtEmail").value;
    var MENSAJE = document.getElementById("txtMensaje").value;

    const mensaje = "Nombre: " + nombre + "\nTeléfono: " + telefono + "\nEmail: " + email + "\nMensaje: " + MENSAJE;

    alert(mensaje);
}
