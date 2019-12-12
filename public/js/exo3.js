
// Exo 3
function exo3() {
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
}

export {
    exo3
};
