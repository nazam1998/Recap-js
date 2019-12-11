let link = document.querySelectorAll('#nav a');
let classe = document.getElementsByTagName('section');
let panel = []
for (let i = 0; i < link.length; i++) {
    panel.push({
        lien: link[i],
        exo: classe[i]
    });
    if (i != 5) {
        classe[i].style.display = 'none';
    }
}

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

    });
});


// Exo 1

let titre = document.querySelector('.exo1 h2');
let button = document.querySelector('.exo1 button');

button.addEventListener('click', () => {
    titre.innerHTML = 'titre modifié';
    titre.classList.add('bg-primary');
    titre.classList.add('text-danger');
});

// Exo 2

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

// Exo 3

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
    btnSwitch[1].innerHTML = `nombre de click ${count}`
});

// Exo 4

let generator = document.querySelector('.exo5 button');

generator.addEventListener('click', () => {
    let image = document.createElement('img');
    image.setAttribute('src', 'public/image/egg.png');
    console.log(image);
    generator.nextElementSibling.appendChild(image);
});

// Exo 5

let calcul = document.getElementsByClassName('level1')[0];
let nombre = document.querySelectorAll('.level1 input');
let egal = document.querySelector('.level1 button');

egal.addEventListener('click', () => {
    egal.nextElementSibling.innerHTML = Number(nombre[0].value) + Number(nombre[1].value);
});

// Exo 6

let egal2 = document.getElementById('egal');
let clear = document.getElementById('clear');
let number = document.querySelectorAll('.number');
let op = document.querySelectorAll('.op');

let input2 = document.querySelector('.level2 input');
let p = document.querySelector('.level2 p');
let res;
let num1 = '';
let num2 = '';
let signe;
let cpt = 0;
let save;

op.forEach(e => {
    e.addEventListener('click', () => {
        input2.value += e.innerHTML;
        signe = e.innerHTML;
        cpt++;
    });
});
number.forEach(a => {
    a.addEventListener('click', () => {
        if (cpt % 2 == 1) {
            num2 += a.innerHTML;
            input2.value += a.innerHTML;


        } else {
            num1 += a.innerHTML;
            input2.value += a.innerHTML;

        }
        p.innerHTML = input2.value;
    });
});

egal2.addEventListener('click', () => {

    switch (signe) {
        case '+':
            res = Number(num1) + Number(num2);
            break;

        case '-':
            res = Number(num1) - Number(num2);
            break;
        case '*':
            res = Number(num1) * Number(num2);
            break;
        case '/':
            res = Number(num1) / Number(num2);
            break;
    }

    console.log(res);
    num1 = 0;
    num2 = 0;
    p.innerHTML = res;
});

clear.addEventListener('click', () => {
    p.innerHTML = 0;
    input2.value = '';
    num1 = '';
    num2 = '';
});

// Exo 7