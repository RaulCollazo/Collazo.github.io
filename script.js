const reveals = document.querySelectorAll('.reveal');

function mostrarElementos() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const visiblePoint = 150;

    if (elementTop < windowHeight - visiblePoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', mostrarElementos);
