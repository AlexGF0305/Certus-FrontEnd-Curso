function Enviar() {
    var nombre = document.getElementById("txtName").value;
    var telefono = document.getElementById("txtTelefono").value;
    var email = document.getElementById("txtEmail").value;
    
    const mensaje = "Nombre: " + nombre + "\nTeléfono: " + telefono + "\nEmail: " + email;

    alert(mensaje);
}
