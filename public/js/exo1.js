// Exo 1

function exo1() {
    let titre = document.querySelector('.exo1 h2');
    let button = document.querySelector('.exo1 button');

    button.addEventListener('click', () => {
        titre.innerHTML = 'titre modifié';
        titre.classList.add('bg-primary');
        titre.classList.add('text-danger');
    });

}
export {
    exo1
};