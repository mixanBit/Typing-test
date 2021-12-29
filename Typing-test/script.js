// let colors = ['is-info', 'is-success', 'is-warning', 'is-danger', 'is-link'];
let colors = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];


let str_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
let begin = document.querySelector(".begin"); 
let progress = document.getElementById("prog"); 
let buttons = document.querySelector('.buttons'); 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function drawBoard() {
    for (let index = 0; index < 50; index++) { 
    let rand = getRandomInt(colors.length);
        buttons.insertAdjacentHTML("afterbegin",
        `<button class='game-buttons is-large
        ${colors[rand]}' id='${str_arr[rand]}'>${str_arr[rand]}
        </button>`);
    }
}

document.addEventListener('keydown', StartGame, {
    once: true
});

function StartGame(e) {
    if (e.key == "Enter") {
        drawBoard();
        begin.classList.add('open');
        mainGame();
    }
}

function mainGame() {
    document.addEventListener('keyup', press); 
}

var count_right = 0;

var errors_count = 0;

function press(e) {
    let elements_arr = document.querySelectorAll(".game-buttons");  // выбираем все созданные кнопки

    if (e.key == elements_arr[0].id) { // здесь можно выбирать и по querySelector, но тогда код будет длиннее
        elements_arr[0].remove();
        count_right++; //  считаем правильные ответы
    } else {
        errors_count++; // считаем ошибки
        progress.value = errors_count;
        if (errors_count > 10) { // если пользователь допустит ошибок больше чем у нас букв, игра закончится
            alert("Game over!");
            begin.classList.remove('open');
            setTimeout(() => {
              document.location.reload();
            }, 1000)
        }
    }
    if (count_right == 50) {
        alert(`Вы выйграли!, Количество ошибок: ${errors_count - 1}`);
        begin.classList.remove('open');
        setTimeout(() => {
          document.location.reload();
        }, 1000)
    }
}
