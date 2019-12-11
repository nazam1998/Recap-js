let link = document.querySelectorAll('#nav a');
let classe = document.getElementsByTagName('section');
let panel = []
for (let i = 0; i < link.length; i++) {
    panel.push({
        lien: link[i],
        exo: classe[i]
    });
    if (i != 4) {
        classe[i].style.display = 'none';
    }
}

panel.forEach(e => {
    e.lien.addEventListener('click', () => {
        console.log(e);

        panel.forEach(a => {
            a.lien.classList.replace('text-white', 'text-primary');
            a.lien.classList.replace('bg-primary', 'bg-white');
            a.exo.style.display = 'none';
        });

        e.lien.classList.replace('text-primary', 'text-white');
        e.lien.classList.replace('bg-white', 'bg-primary');
        e.exo.style.display = 'block';

    });
});


// Exo 2

let titre = document.querySelector('.exo1 h2');
let button = document.querySelector('.exo1 button');

button.addEventListener('click', () => {
    titre.innerHTML = 'titre modifié';
    titre.classList.add('bg-primary');
    titre.classList.add('text-danger');
});

// Exo 3

let exo3 = document.getElementsByClassName('exo2')[0];
let h2 = document.querySelector('.exo3 h2');
let input = document.querySelector('.exo3 input');
let button2 = input.nextElementSibling;

input.addEventListener('keypress', event => {
    input.value = event.target.value;
});
button2.addEventListener('click', () => {
    h2.innerHTML = 'Welcome ' + input.value;
    input.value = '';
});

// Exo 4

let rectangle = document.getElementsByClassName('rectangle');
let btnSwitch = document.querySelectorAll('.exo4 button');
let count = 0;
let square = document.getElementsByClassName('square')[0];
btnSwitch[0].addEventListener('click', () => {
    count++;
    if (count % 2 == 1) {
        rectangle[0].removeChild(square);
        rectangle[1].appendChild(square);

    } else {
        rectangle[1].removeChild(square);
        rectangle[0].appendChild(square);
    }
    console.log(count);
    btnSwitch[1].innerHTML = `nombre de click ${count}`
});

// Exo 5

let generator = document.querySelector('.exo5 button');

generator.addEventListener('click', () => {
    let image = document.createElement('img');
    image.setAttribute('src', 'image/egg.png');
    console.log(image);
    generator.nextElementSibling.appendChild(image);
});

