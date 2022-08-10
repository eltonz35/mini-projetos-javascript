const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

const trafficLight = () => {
    console.log(event.target.id);
}

buttons.addEventListener("click", trafficLight);