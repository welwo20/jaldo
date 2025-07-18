
// Contador de amor desde data fictícia
const startDate = new Date('2024-07-19T00:00:00');
const counterElement = document.getElementById('loveCounter');

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  counterElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();

// Fade-in effect on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
