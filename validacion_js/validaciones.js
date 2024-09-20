document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validaciones simples
        if (!nombre || !email || !mensaje) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        // Si todo es correcto, mostrar el mensaje
        alert(`Mensaje enviado, gracias ${nombre}`);
    });
});