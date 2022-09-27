let prodId = JSON.parse(localStorage.getItem("id"));
let product = JSON.parse(localStorage.getItem("state"));
let getprod = product.find((item) => item.id == prodId);
console.log(getprod.id);



let fileinput = document.querySelector("#file-img"),
    img = document.querySelector(".image img");


let preview;
const inputs = () => {
    let file = fileinput.files[0];
    img.classList.add("img-upload");
    getimage(file);

}

function getimage(file) {

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        preview = reader.result;
        img.src = preview;

        localStorage.setItem("file_img", img.src);
    }
}
fileinput.addEventListener("change", inputs);



let prodName = document.querySelector(".prodName"),
    prodDes = document.querySelector(".prodDes"),
    price = document.querySelector(".price"),
    details = document.querySelector(".lorem"),
    tags = document.querySelector(".tg"),
    addProd = document.querySelector(".add-prod"),
    save = document.querySelector(".save");



prodName.innerHTML = getprod.name;
prodDes.innerHTML = getprod.des;
price.innerHTML = getprod.price;
details.innerHTML = getprod.details;
tags.innerHTML = getprod.tags;
img.src = getprod.image;

let emailAddress = localStorage.getItem("email-address");

save.addEventListener("click", () => {
    if (prodName.innerHTML == prodName.getAttribute('data-placeholder')) {
        ceckerror("chould enter proud name");
    } else if (prodDes.innerHTML == prodDes.getAttribute('data-placeholder')) {
        ceckerror("short des must be 80 letters long");
    } else if (price.innerHTML == price.getAttribute('data-placeholder') || !Number(price.innerHTML)) {
        ceckerror("enter valid price");
    } else if (details.innerHTML == details.getAttribute('data-placeholder')) {
        ceckerror("must enter the details");
    } else if (tags.innerHTML == tags.getAttribute('data-placeholder')) {
        ceckerror("enter tags");
    } else {
        prodadd();

        setTimeout(() => {
            window.location = "dashboard.html";
        }, 2000);
    }
})

function prodadd() {
    //e.preventDefult();

    getprod.name = prodName.innerText,
        getprod.des = prodDes.innerText,
        getprod.price = price.innerText,
        getprod.details = details.innerText;
    getprod.tags = tags.innerText;
    getprod.image = img.src;

    localStorage.setItem("state", JSON.stringify(product));

}