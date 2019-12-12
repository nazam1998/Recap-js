

// Exo 4

function exo4() {
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
}

export {exo4}