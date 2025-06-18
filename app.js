let soundclick = new Audio("./assets/Click.wav")
//Inicializo contador en 0
let counter = 0;
let counterButton = document.getElementById("counterButton"); //Conecto el ID de HTML
//conecto cada button
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')

//Creo las funciones de cada button
increase.addEventListener('click', function () {
    counter += 1;
    counterButton.innerText = counter;
    changeColor();

    soundclick.currentTime = 0;
    soundclick.play();
});

decrease.addEventListener('click', function () {
    if (counter > 0) {
        counter -= 1;
        counterButton.innerText = counter;
        changeColor();

        soundclick.currentTime = 0;
        soundclick.play();
    } else {
        alert("You're already at zero! You can't go any lower 🙃")
    }
});

reset.addEventListener('click', function () {
    counter = 0;
    counterButton.innerText = counter;
    changeColor();

    soundclick.currentTime = 0;
    soundclick.play()
});

//función actualizar Color
function changeColor() {
    if (counter > 0) {
        counterButton.style.color = '#00b8d0';
    } else {
        counterButton.style.color = 'white';
    }
}