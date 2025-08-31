

let vedio = document.getElementById('vedioFixed');
let image = document.getElementById('imageFixed');


image.addEventListener('mouseenter', () => {
    video.style.display = 'block';
});

image.addEventListener('mouseleave', () => {
    video.style.display = 'none';
});


