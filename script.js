// Seleção de elementos
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const closeModal = document.querySelector('.modal .close');

// Abrir modal ao clicar na imagem
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Fechar modal ao clicar no "X" ou fora da imagem
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
