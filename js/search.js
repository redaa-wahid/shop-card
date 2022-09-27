let imgs = document.querySelector(".imgs");

let data = JSON.parse(localStorage.getItem("state"));

function openDetailsProduct(data) {

    let produi = data.map((item) => {
        return ` <div class="card">
        <img src="${item.image}" alt="">
        <p>$${item.price}</p>
    </div>`
    })
    imgs.innerHTML = produi;
}
openDetailsProduct(data);