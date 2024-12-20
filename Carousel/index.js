const imageFolder = 'images/';
const imageList = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg']; // List of image filenames

const sliderImagesContainer = document.getElementById('slider-images');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function loadImages() {
    imageList.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg";
        imgElement.alt = `Image ${index + 1}`;

        imgElement.classList.add('hidden');
        sliderImagesContainer.appendChild(imgElement);
    });
}

function updateSlider() {
    const images = document.querySelectorAll('#slider-images img');
    images.forEach((img, index) => {
        img.classList.remove('center', 'left', 'right', 'hidden');

        if (index === currentIndex) {
            img.classList.add('center');
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
            img.classList.add('left');
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('right');
        } else {
            img.classList.add('hidden');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    updateSlider();
});

loadImages();
updateSlider();