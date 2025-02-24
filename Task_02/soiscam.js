import dataList from "./data.js"; 

function displayCards() {
    let cardContainer = document.querySelector("#card-container");
    cardContainer.innerHTML = "";

    dataList.forEach(item => {
        let card = `
            <div class="card">
                <img src="${item.image}" alt="Hình ảnh của ${item.name}">
                <div class="card-info">
                    <h3>${item.name}</h3>
                    <p><strong></strong> #${item.code} - ${item.date}</p>
                </div>
            </div>
        `;
        cardContainer.innerHTML += card;
    });
}

document.addEventListener("DOMContentLoaded", displayCards);
