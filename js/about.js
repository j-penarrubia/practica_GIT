/**
 * Ejecuta la función `cambiarImagen` cuando el contenido del DOM se ha cargado.
 *
 * @event DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    cambiarImagen();
});

/**
 * Cambia la imagen mostrada en el contenedor con la clase "content" de forma cíclica.
 *
 * La función define un arreglo de imágenes, crea un elemento `<img>` que muestra la primera imagen,
 * y lo inserta en el contenedor. Además, añade un evento de clic al elemento para que, al pulsarlo,
 * se actualice la imagen mostrando la siguiente en el arreglo, volviendo al inicio cuando se alcanza
 * el final del arreglo.
 *
 * @function cambiarImagen
 */
function cambiarImagen() {
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];
    let currentIndex = 0;

    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];
    document.querySelector('.content').appendChild(imageElement);

    imageElement.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
}