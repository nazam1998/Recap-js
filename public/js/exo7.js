// Exo 7
function exo7() {
    let tache = document.querySelector('.ajouteur');
    let tout = document.querySelector('#toutes');
    let faire = document.querySelector('#faire');
    let fini = document.querySelector('#complete');
    let text;
    tache.addEventListener('keypress', event => {
        text = event.target.value;
        if (event.key == 'Enter') {

            let check = document.createElement('input');
            let para = document.createElement('span');
            let li = document.createElement('li');
            let hr = document.createElement('hr');
            // li.classList.add('row');
            check.type = 'checkbox';
            // heck.style.backgroundColor = 'white';
            li.appendChild(check);
            
            para.innerHTML = text;
            li.appendChild(para);
            faire.appendChild(li);
            tout.appendChild(li);

            tache.value = '';
        }
    });
}

export {
    exo7
}