let link = document.querySelectorAll('#nav a');
link.forEach(e => {
    e.addEventListener('click', () => {
        link.forEach(a => {
            a.classList.replace('text-white', 'text-primary');
            a.classList.replace('bg-primary', 'bg-white');
        });
        e.classList.replace('text-primary', 'text-white');
        e.classList.replace('bg-white', 'bg-primary');
    })
});




let titre = document.querySelector('.exo1 h2');
let button = document.querySelector('.exo1 button');

button.addEventListener('click', () => {
    titre.innerHTML = 'titre modifié';
    titre.classList.add('bg-primary');
    titre.classList.add('text-white');
});