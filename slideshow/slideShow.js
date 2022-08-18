"use strict"; //instrui o navegador para usar o modo Estrito.

const images = [
    {"id": "1", "url": "./img/chrono.jpg" },
    {"id": "2", "url": "./img/inuyasha.jpg" },
    {"id": "3", "url": "./img/tenchi.jpg" },
    {"id": "4", "url": "./img/tenjhotenge.jpg" },
    {"id": "5", "url": "./img/yuyuhakusho.jpg" },
    {"id": "6", "url": "./img/ippo.png" }
]

const container = document.querySelector("#container-itens");

const loadImagens = (images, container) => { // Function carregamento imagens
    images.forEach(image => {// Percorrer imagens
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}"
            </div>    
        `
    })
}

loadImagens(images, container); //Carregamento de imagens

let items = document.querySelectorAll(".item"); 