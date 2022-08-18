"use strict"; //instrui o navegador para usar o modo Estrito.

const images = [
    {"id": "1", "url": "./img/chrono.jpg" },
    {"id": "2", "url": "./img/inuyasha.jpg" },
    {"id": "3", "url": "./img/tenchi.jpg" },
    {"id": "4", "url": "./img/tenjhotenge.jpg" },
    {"id": "5", "url": "./img/yuyuhakusho.jpg" },
    {"id": "6", "url": "./img/ippo.png" }
]

const containeritems = document.querySelector("#container-itens");

const loadImagens = (images, container) => { // Function carregamento imagens
    images.forEach(image => {// Percorrer imagens
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}"
            </div>    
        `
    })
}

loadImagens(images, containeritems); //Carregamento de imagens

let items = document.querySelectorAll(".item"); //Lista de todas as imagens

const previus = () => {// Função que movimenta as imagens, enviando o primeiro item pro final.
    containeritems.appendChild(items[0]); 
    items = document.querySelectorAll(".item");
}

const next = () => {// Oposta da previus, tras o ultimo item pro inicio.
    const lastItem = items[items.length - 1];
    containeritems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
}

document.querySelector("#previus").addEventListener("click", previus);
document.querySelector("#next").addEventListener("click", next);