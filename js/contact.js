/**
 * Ejecuta la función `enviarComentario` una vez que el DOM se haya cargado completamente.
 *
 * @event DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    enviarComentario();
});

/**
 * Configura el manejo del envío del formulario de contacto.
 *
 * Esta función obtiene el elemento del formulario con el id `contactForm` y añade un listener
 * para el evento `submit`. Al enviar el formulario, previene la recarga de la página, obtiene
 * los valores de los campos `name` y `message`, y verifica que no estén vacíos. Si ambos campos
 * tienen contenido, se muestra un mensaje de agradecimiento y se reinicia el formulario; de lo
 * contrario, se solicita completar todos los campos.
 *
 * @function enviarComentario
 */
function enviarComentario() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página

        // Obtiene los valores del formulario
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Verifica si el nombre y el mensaje no están vacíos
        if (name.trim() !== '' && message.trim() !== '') {
            alert(`¡Gracias por tu mensaje, ${name}!`);
            contactForm.reset(); // Resetea el formulario después del envío
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}