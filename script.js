const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

// Para navegación manual (opcional)
document.querySelector('.slider::before').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.slider::after').addEventListener('click', () => {
    nextSlide();
});

//Aquí se mostrarán los autos que se seleccionan//

document.getElementById('car-model').addEventListener('change', function() {
    const placeholder = document.getElementById('image-placeholder');
    const selectedModel = this.value;
  
    // Limpiar el contenido actual del placeholder
    placeholder.innerHTML = '';
  
    // Verificar si no se ha seleccionado el valor por defecto
    if (selectedModel !== 'default') {
      const img = document.createElement('img');
      
      // Ajustar la ruta para coincidir con tu estructura de carpetas
      img.src = `../img/images/${selectedModel}.jpg`; // Ruta corregida
      img.alt = selectedModel;
      img.style.width = '100%';
      img.style.height = 'auto';  // Ajustar la altura automática
  
      // Agregar bordes para visualizar mejor el recuadro
      placeholder.style.border = '2px solid #ccc'; 
      placeholder.style.padding = '10px';
      
      // Manejo de error si la imagen no se encuentra
      img.onerror = function() {
        placeholder.innerHTML = '<p>Imagen no disponible para el auto seleccionado.</p>';
      };
      
      placeholder.appendChild(img);
    } else {
      // Si el valor es "default", muestra el mensaje predeterminado
      placeholder.innerHTML = '<p>Nada</p>';
    }
  });

  const hamburger = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.main-menu');
  
  hamburger.addEventListener('click', () => {
      menu.classList.toggle('show');
  });
  