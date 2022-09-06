"use strict"

const display = document.getElementById("display");
const numeros = document.querySelectorAll("[id*=tecla]");

// Função que lê os numeros
numeros.forEach (numero => 
    numero.addEventListener("click", inserirNumero)    
);