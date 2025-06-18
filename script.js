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

//button 6

function seeMonths() {
  const months = ["January","February","March","April","May",
    "June","July","August","September","October","November","December"];

    const message = document.getElementById("months")

    message.innerHTML = "";
    
    const list = document.createElement("ul")

    for(const month of months){
        const item = document.createElement("li")
        item.textContent = month
        list.appendChild(item)
    }
    message.appendChild(list)
}
