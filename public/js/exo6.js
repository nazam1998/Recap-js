// Exo 6
function exo6() {

    let calcul = document.getElementsByClassName('level1')[0];
    let nombre = document.querySelectorAll('.level1 input');
    let egal = document.querySelector('.level1 button');

    egal.addEventListener('click', () => {
        egal.nextElementSibling.innerHTML = Number(nombre[0].value) + Number(nombre[1].value);
    });


    // Niveau 2
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


            } else {
                num1 += a.innerHTML;
            }
            input2.value += a.innerHTML;
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
        num1 = '';
        num2 = '';
        p.innerHTML = res;
        input2.value = '';
    });

    clear.addEventListener('click', () => {
        p.innerHTML = 0;
        input2.value = '';
        num1 = '';
        num2 = '';
    });
}

export {exo6}