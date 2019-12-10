let link = document.querySelectorAll('#nav a');
let classe = document.getElementsByTagName('section');
let panel = []
for (let i = 0; i < link.length; i++) {
    panel.push({
        lien: link[i],
        exo: classe[i]
    });
    if (i != 0) {
        classe[i].style.display = 'none';
    }
}
let currentPan = panel[0].exo.getAttribute('class');
panel.forEach(e => {
    e.lien.addEventListener('click', () => {
        panel.forEach(a => {
            a.lien.classList.replace('text-white', 'text-primary');
            a.lien.classList.replace('bg-primary', 'bg-white');
            a.exo.style.display = 'none';
        });


        e.lien.classList.replace('text-primary', 'text-white');
        e.lien.classList.replace('bg-white', 'bg-primary');
        e.exo.style.display = 'block';
        currentPan = e.exo.getAttribute('class');
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

