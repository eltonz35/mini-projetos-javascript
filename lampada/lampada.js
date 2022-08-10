const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn() {
    lamp.src = "./img/ligada.jpg";
}

function lampOff() {
    lamp.src = "./img/desligada.jpg";
}

turnOn.addEventListener("click", lampOn);

