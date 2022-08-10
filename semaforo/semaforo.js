const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

const trafficLight = () => {
    turnOn.red();
}

const turnOn = {
    "red" : () => img.src = "./img/vermelho.png",
    "yellow" : () => img.src = "./img/amarelo.png",
    "green" : () => img.src = "./img/verde.png",
}

buttons.addEventListener("click", trafficLight);