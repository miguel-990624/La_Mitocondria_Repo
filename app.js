//3. Boton seleccionador aleatorio
const messagesDisplay = document.getElementById("messagesDisplay")
const messagesButton = document.getElementById("messagesButton")

const randomizedMessage = () => {
    const messagesList = ["Hello World", "Bye World", "s'up World", "Fuck you World", "World"];
    const randomNumber = Math.ceil(Math.random()*5);
    switch (randomNumber){
        case 1:
            messagesDisplay.innerHTML = messagesList[0];
            console.log(randomNumber);
            break;
        case 2:
            messagesDisplay.innerHTML = messagesList[1];
            console.log(randomNumber);
            break;
        case 3:
            messagesDisplay.innerHTML = messagesList[2];
            console.log(randomNumber);
            break;
        case 4:
            messagesDisplay.innerHTML = messagesList[3];
            console.log(randomNumber);
            break;
        case 5:
            messagesDisplay.innerHTML = messagesList[4];
            console.log(randomNumber);
            break;
        default:
            messagesDisplay.innerHTML = "Oops, looks like something went wrong, Try again."
            console.log(randomNumber);
            break;
    }
};

messagesButton.addEventListener("click", (e) => {
    randomizedMessage();
});
