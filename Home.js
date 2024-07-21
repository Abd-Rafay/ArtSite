
const images = [
    { src: "images/mlp.jpg", title: "Unicorn" },
    { src: "images/mlp2.jpg", title: "My Little Pony" },
    { src: "images/s1.jpg", title: "Cat Watching the Sun " },
    // Add new images and titles here
    { src: "images/s2.jpg", title: "House Landscape Scenery" },
    { src: "images/s3.jpg", title: "Hand" },
    { src: "images/scenery.jpg", title: "Scenery Painting" },
    { src: "images/zalmi.jpg", title: "Zalmi Logo" },
    { src: "images/girl.jpg", title: "Girl flying Butterflies" },
    { src: "images/sun.jpg", title: "Sunset" },
    { src: "images/sunflower.jpg", title: "A Sunflower" },
    { src: "images/autumn.jpg", title: "Autumn" },
    { src: "images/seasons.jpg", title: "Beauty of all Seasons" },
    { src: "images/sunset.jpg", title: "Sunset from the sea" },
    { src: "images/window.jpg", title: "A Beautiful Window" },
    { src: "images/s4.jpg", title: "Mountain Scenery" }
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
