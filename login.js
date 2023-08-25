document.getElementById("btn__iniciar-sesion").addEventListener('click', iniciarSesion);
document.getElementById("btn__registrarse").addEventListener('click', register);

window.addEventListener("resize", anchoPagina);

const formulario = document.getElementById("formulario__login");
const formularioRegistro = document.querySelector('.formulario__register');
const inputs = document.querySelectorAll('#formulario__login input');
const inputsRegistro = document.querySelectorAll('.formulario__register input');

var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina() {
    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0px";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

document.querySelector('.formulario__register button').addEventListener('click', function(event) {
    // Validación de campos del formulario de registro
    let camposLlenos = true;
    inputsRegistro.forEach(input => {
        if (input.value === "") {
            camposLlenos = false;
            alert(`Por favor, completa el campo: ${input.placeholder}`);
            event.preventDefault();
        }
    });

    if (camposLlenos) {
        // Mostrar alerta con los datos brindados
        let datosBrindados = "Datos brindados:\n";
        inputsRegistro.forEach(input => {
            if (input.type === "password") {
                datosBrindados += `${input.placeholder}: ********\n`;
            } else {
                datosBrindados += `${input.placeholder}: ${input.value}\n`;
            }
        });
        alert(datosBrindados);
    }
});

formulario.addEventListener('submit', function(event) {
    // Validación de campos del formulario de inicio de sesión
    let camposLlenos = true;
    inputs.forEach(input => {
        if (input.value === "") {
            camposLlenos = false;
            alert(`Por favor, completa el campo: ${input.placeholder}`);
            event.preventDefault();
        }
    });

    if (camposLlenos) {
        // Realizar el proceso de inicio de sesión
        const correoElectronico = inputs[0].value;
        const contrasena = inputs[1].value;

        if (correoElectronico === "alumnocertus@certus.com" && contrasena === "certus123") {
            // Redirigir a la página deseada
            window.location.href = "index.html";
        } else {
            // Mostrar alerta de inicio de sesión incorrecto
            alert("Correo o contraseña incorrectos. Por favor, verifica tus datos.");
            event.preventDefault();
        }
    }
});

// Función para ajustar la visualización de formularios al cargar la página
function ajustarVisualizacion() {
    if (window.innerWidth <= 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
    }
}

ajustarVisualizacion();



