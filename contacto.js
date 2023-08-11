// Se asigna una funcion para que salga una ventana emergente validando los datos

function Enviar() {
    var nombre = document.getElementById("inputNombre").value;
    var telefono = document.getElementById("inputTelefono").value;
    var email = document.getElementById("inputEmail").value;
  

    const mensaje = "Nombre: " + nombre + "\nTeléfono: " + telefono + "\nEmail: " + email;

    alert(mensaje);
}
