//Backgroung Music
const startButton = document.getElementById("startGame");
const bgMusic = document.getElementById("bgMusic");
const volumeControl = document.getElementById("volumeControl");

startButton.addEventListener("click", () => {
  bgMusic.volume = volumeControl.value;
  bgMusic.play();
});

volumeControl.addEventListener("input", () => {
  bgMusic.volume = volumeControl.value;
});
//End Backgroung Music

//Button 1
const greetingButton = document.getElementById("greetingButton");
const greetingDisplay = document.getElementById("greetingDisplay");

function getGreetingMessage() {
    const currentHour = new Date().getHours(); // Obtiene la hora actual (0-23)
    //Crea un objeto de fecha actual y extrae la hora
    if (currentHour < 12) {//Si la hora es antes de medio dia
        return "¡Good morning!";
    } else if (currentHour < 18) {//si es entre las 12 y las 6
        return "¡Good evening!";
    } else {//si es despues de las 6 
        return "¡Good night!";
    }
}

greetingButton.addEventListener("click", () => {
    const message = getGreetingMessage();
    greetingDisplay.textContent = message;

    soundclick.currentTime = 0;
    soundclick.play();
});


//Button 2
let soundclick = new Audio("./assets/Click_Counter.wav");
//Inicializo contador en 0
let counter = 0;
let counterButton = document.getElementById("counterButton"); //Conecto el ID de HTML
//conecto cada button
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

//I create the functions of each button
increase.addEventListener("click", function () {
  counter += 1;
  counterButton.innerText = counter;
  changeColor();

  soundclick.currentTime = 0;
  soundclick.play();
});

decrease.addEventListener("click", function () {
  if (counter > 0) {
    counter -= 1;
    counterButton.innerText = counter;
    changeColor();

    soundclick.currentTime = 0;
    soundclick.play();
  } else {
    alert("You're already at zero! You can't go any lower 🙃");
  }
});

reset.addEventListener("click", function () {
  counter = 0;
  counterButton.innerText = counter;
  changeColor();

  soundclick.currentTime = 0;
  soundclick.play();
});

//update Color function
function changeColor() {
  if (counter > 0) {
    counterButton.style.color = "#00ffea";
  } else {
    counterButton.style.color = "white";
  }
}

// button 3
const messagesDisplay = document.getElementById("messagesDisplay");
const messagesButton = document.getElementById("messagesButton");

const randomizedMessage = () => {
  const messagesList = [
    "Hello World",
    "Bye World",
    "s'up World",
    "Fuck you World",
    "World",
  ];
  const randomNumber = Math.ceil(Math.random() * 5);
  switch (randomNumber) {
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
      messagesDisplay.innerHTML =
        "Oops, looks like something went wrong, Try again.";
      break;
  }
};

messagesButton.addEventListener("click", (e) => {
  randomizedMessage();
  soundclick.currentTime = 0;
  soundclick.play();
});

//button 4

function validar() {
  const input = document.getElementById("word");
  const campo = input.value.trim();
  const mensaje = document.getElementById("message");

  if (!campo) {
    input.classList.add("Error");
    mensaje.textContent = "El campo esta vacio, por favor ingrese  un nombre";
  } else {
    input.classList.remove("Error");
    mensaje.textContent = "Campo valido";
  }
}

//button 5

const colorDisplay = document.getElementById("colorDisplay");
const colorButton = document.getElementById("colorButton");
let colorCounter = 0;

const colorDisplayChange = () => {
  const colorList = [
    "red",
    "orange",
    "yellow",
    "lightGreen",
    "aquamarine",
    "blue",
    "royalBlue",
    "purple",
    "fuchsia",
  ];
  if (colorCounter === colorList.length - 1) {
    colorCounter = 0;
  } else {
    colorCounter += 1;
  }
  colorDisplay.className = colorList[colorCounter];
};

colorButton.addEventListener("click", (e) => {
  colorDisplayChange();
  soundclick.currentTime = 0;
  soundclick.play();
});

//button 6

function seeMonths() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const message = document.getElementById("months");

  message.innerHTML = "";

  const list = document.createElement("ul");

  for (const month of months) {
    const item = document.createElement("li");
    item.textContent = month;
    list.appendChild(item);
  }
  message.appendChild(list);
}
