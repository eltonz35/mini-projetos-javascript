"use strict"

const criarDiv = (texto) => {
    const div = document.createElement("div");
    div.classList.add("key");
    div.textContent = texto;
    div.id = texto;
    document.getElementById("container").appendChild(div);
}