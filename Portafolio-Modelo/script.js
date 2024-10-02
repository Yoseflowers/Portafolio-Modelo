//Nav//

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navegacion');
    

    // Función para alternar el menú
    window.toggleMenu = function () {
        nav.classList.contains("active") ? (nav.classList.remove('active'), nav.classList.add('inactive')) : (nav.classList.add('active'), nav.classList.remove("start"), nav.classList.remove('inactive')); // Alterna la clase 'active' para abrir/cerrar el menú
        console.log(nav.classList.contains("active")); // Para depuración, puedes ver si la clase se alterna
    };
});






//La validación del formulário//
document.querySelector('.contacto__formulario').addEventListener('submit', function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.querySelector('input[placeholder="Nombre"]').value.trim();
    const email = document.querySelector('input[placeholder="Correo Electrónico"]').value.trim();
    const mensaje = document.querySelector('textarea[placeholder="Mensaje"]').value.trim();

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar el campo de nombre
    if (nombre === "") {
        alert("Por favor ingrese su nombre.");
        return;
    }

    // Validar el campo de correo electrónico
    if (email === "" || !emailRegex.test(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return;
    }

    // Validar el campo de mensaje
    if (mensaje === "") {
        alert("Por favor ingrese su mensaje.");
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario
    alert("Formulario enviado exitosamente.");

});
