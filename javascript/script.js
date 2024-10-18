//Menú hamburguesa para dispositivos móviles.
document.addEventListener("DOMContentLoaded", function() {
  // Despliegue del submenu al hacer clic sin cerrarse automáticamente
    document.querySelectorAll('.dropdown-submenu a.dropdown-toggle').forEach(function(element) {
        element.addEventListener('click', function(e) {
            const submenu = this.nextElementSibling;

          // Mostrar u ocultar el submenu
            if (submenu.classList.contains('show')) {
                submenu.classList.remove('show');
            } else {
              // Ocultar otros submenus abiertos
                document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function(openSubmenu) {
                    openSubmenu.classList.remove('show');
                });
                submenu.classList.add('show');
            }
            e.stopPropagation();
            e.preventDefault();
        });
    });

  // Cerrar submenus si se hace clic fuera de ellos
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-submenu')) {
            document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function(submenu) {
                submenu.classList.remove('show');
            });
        }
    });
});

//Acordeón automático
let currentIndex = 0;
const slides = document.querySelectorAll('.car-slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active'); // Ocultar la imagen actual
    currentIndex = (currentIndex + 1) % slides.length; // Avanzar al siguiente índice
    slides[currentIndex].classList.add('active'); // Mostrar la siguiente imagen
}

// Inicia mostrando la primera imagen
slides[currentIndex].classList.add('active');

// Cambia la imagen cada 5 segundos (5000 ms)
setInterval(showNextSlide, 5000);
