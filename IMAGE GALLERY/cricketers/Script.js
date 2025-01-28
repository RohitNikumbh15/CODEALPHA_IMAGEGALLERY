const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');
const closeModal = modal.querySelector('.close');
const prevButton = modal.querySelector('.prev');
const nextButton = modal.querySelector('.next');

let currentIndex = 0;
const images = Array.from(gallery.querySelectorAll('img'));

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        currentIndex = images.indexOf(e.target);
        updateModalImage();
        modal.style.display = 'flex';
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage();
});

function updateModalImage() {
    modalImage.src = images[currentIndex].src;
}
