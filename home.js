const images = [
    "image/image2.jpg",
    "image/image3.jpg",
    "image/image4.jpg",
    "image/image5.jpg",
    "image/image6.jpg",
    "image/image7.jpg",
    "image/image8.jpg",
    "image/image9.jpg",
    "image/image12.jpg",
    "image/image13.jpg",
    "image/image14.jpg",
    "image/image16.jpg",
    "image/image17.jpg",
    "image/image18.jpg",
    "image/image19.jpg",
    "image/image20.jpg"
];

let index = 0;

function showImage() {

document.getElementById("mainImage").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

function setImage(i) {
    index = i;
    showImage();
}