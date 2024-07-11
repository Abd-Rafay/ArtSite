
const images = [
    { src: "images/sample.jpeg", title: "Title 1" },
    { src: "images/sample.jpeg", title: "Title 2" },
    { src: "images/sample.jpeg", title: "Title 3" },
    // Add new images and titles here
    { src: "images/sample.jpeg", title: "Title 4" },
    { src: "images/sample.jpeg", title: "Title 5" },
    { src: "images/sample.jpeg", title: "Title 5" },
    { src: "images/sample.jpeg", title: "Title 5" },
    { src: "images/sample.jpeg", title: "Title 5" },
    { src: "images/sample.jpeg", title: "Title 5" }
];

const galleryGrid = document.querySelector('.gallery-grid');

images.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    const titleOverlay = document.createElement('div');
    titleOverlay.classList.add('title-overlay');
    titleOverlay.textContent = image.title;

    galleryItem.appendChild(img);
    galleryItem.appendChild(titleOverlay);
    galleryGrid.appendChild(galleryItem);
});
let lastScrollTop = 0;
const header = document.querySelector('header');
let headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        // Scroll down
        header.style.top = `-${headerHeight}px`;
    } else {
        // Scroll up
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
