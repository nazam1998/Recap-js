// Exo 7
function exo7() {
    let tache = document.querySelector('.ajouteur');
    let tout = document.querySelector('#toutes');
    let faire = document.querySelector('#faire');
    let fini = document.querySelector('#complete');
    let tab = [];
    let text;
    let buttons = document.querySelectorAll('.exo7 button');
    let hr = document.createElement('hr');
    let tabUl = [tout, fini, faire];
    let changeur = [];
    let index = 0;
    for (let i = 0; i < tabUl.length; i++) {
        changeur.push({
            button: buttons[i],
            ul: tabUl[i]
        });
        if (i != 0) {
            tabUl[i].style.display = 'none';
        }
    }


    tache.addEventListener('keypress', event => {

        text = event.target.value;
        if (event.key == 'Enter') {
            let check = document.createElement('input');
            let para = document.createElement('span');
            let li = document.createElement('li');


            check.type = 'checkbox';

            li.appendChild(check);
            para.innerHTML = text;
            li.appendChild(para);
            li.classList.add('faire');
            li.innerHTML += '<i class="fas fa-times"></i>';
            let copy = li.cloneNode(true);
            faire.appendChild(copy);
            tout.appendChild(li);
            tab.push({
                li: li,
                copy: copy
            });
            tache.value = '';

        }

        tab.forEach(e => {
            e.li.children[0].addEventListener('click', () => {
                if (e.li.children[0].checked == true) {
                    e.li.style.backgroundColor = 'green';
                    e.copy.style.backgroundColor = 'green';
                    e.copy.setAttribute('checked', 'true');
                    fini.appendChild(e.copy);
                }
            });
            e.li.children[2].addEventListener('click', () => {
                e.li.parentNode.removeChild(e.li);
            });
            e.li.children[1].addEventListener('dblclick', () => {
                let input = document.createElement('input');
                input.setAttribute('type', 'text');

                let save = e.li.children[1];
                input.value = e.li.children[1].innerHTML;
                e.li.replaceChild(input, e.li.children[1]);
                e.li.children[1].addEventListener('keypress', event => {
                    e.li.children[1].value = event.target.value;
                    if (event.key == 'Enter') {
                        save.innerHTML = e.li.children[1].value;
                        e.li.replaceChild(save, e.li.children[1])
                    }
                });
            });
        });
        changeur.forEach(e => {
            e.button.addEventListener('click', () => {
                changeur.forEach(a => {
                    a.ul.style.display = 'none';
                });
                e.ul.style.display = 'block';
            })
        });
    });



}
export {
    exo7
}