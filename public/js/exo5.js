// Exo 5

// Exo 5
function exo5() {
    let generator = document.querySelector('.exo5 button');

    generator.addEventListener('click', () => {
        let image = document.createElement('img');
        image.setAttribute('src', 'public/image/egg.png');
        console.log(image);
        generator.nextElementSibling.appendChild(image);
    });
}

export {
    exo5
}