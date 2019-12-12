import {
    exo1
} from './exo1.js'
import {
    exo3
} from './exo3.js'
import {
    exo4
} from './exo4.js'
import {
    exo5
} from './exo5.js'
import {
    exo6
} from './exo6.js'
import {
    exo7
} from './exo7.js'

let link = document.querySelectorAll('#nav a');
let classe = document.getElementsByTagName('section');
let panel = []
let fonct = [exo1(), exo3(), exo4(), exo5(), exo6(), exo7()];
for (let i = 0; i < link.length; i++) {
    panel.push({
        lien: link[i],
        exo: classe[i],
        fonc: fonct[i]
    });
    if (i != 6) {
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
        e.fonc;

    });
});