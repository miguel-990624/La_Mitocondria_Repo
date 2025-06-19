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



// boton 3
const messagesDisplay = document.getElementById("messagesDisplay")
const messagesButton = document.getElementById("messagesButton")

const randomizedMessage = () => {
    const messagesList = ["Hello World", "Bye World", "s'up World", "Fuck you World", "World"];
    const randomNumber = Math.ceil(Math.random()*5);
    switch (randomNumber){
        case 1:
            messagesDisplay.innerHTML = messagesList[0];
            break;
        case 2:
            messagesDisplay.innerHTML = messagesList[1];
            break;
        case 3:
            messagesDisplay.innerHTML = messagesList[2];
            break;
        case 4:
            messagesDisplay.innerHTML = messagesList[3];
            break;
        case 5:
            messagesDisplay.innerHTML = messagesList[4];
            break;
        default:
            messagesDisplay.innerHTML = "Oops, looks like something went wrong, Try again."
            break;
    }
};

messagesButton.addEventListener("click", (e) => {
    randomizedMessage();
});

//button 5

const colorDisplay = document.getElementById("colorDisplay")
const colorButton = document.getElementById("colorButton")
let colorCounter = 0;

const colorDisplayChange = () => {
    const colorList = ["red","orange","yellow","lightGreen","aquamarine","blue","royalBlue","purple","fuchsia"]
    if (colorCounter === (colorList.length -1)){
        colorCounter = 0;
    }else{
        colorCounter +=1;
    }
    colorDisplay.className = colorList[colorCounter]
    
};

colorButton.addEventListener("click", (e) => {
    colorDisplayChange();
});