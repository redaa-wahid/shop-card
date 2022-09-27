let fileinput = document.querySelector("#file-img"),
    img = document.querySelector(".image img");

//console.log(fileinput);
let preview;
const inputs = () => {
    let file = fileinput.files[0];


    //  img.src = URL.createObjectURLgetimage(file);
    img.classList.add("img-upload");

    getimage(file);


}

function getimage(file) {

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        preview = reader.result;
        img.src = preview;
        // localStorage.setItem("file_img", img.src);

    }
}


fileinput.addEventListener("change", inputs);


let editcontent = [...document.querySelectorAll(`*[contenteditable="true"]`)];
console.log(editcontent);

editcontent.map((el) => {
    let placeholder = el.getAttribute('data-placeholder');
    el.innerHTML = placeholder;
    el.addEventListener('focus', () => {
        if (el.innerHTML === placeholder) {
            el.innerHTML = '';
        }
    })
    el.addEventListener('focusout', () => {
        if (!el.innerHTML) {
            el.innerHTML = placeholder;
        }
    })
})

let prodName = document.querySelector(".prodName"),
    prodDes = document.querySelector(".prodDes"),
    price = document.querySelector(".price"),
    details = document.querySelector(".lorem"),
    tags = document.querySelector(".tg"),
    addProd = document.querySelector(".add-prod"),
    save = document.querySelector(".save");


let emailAddress = localStorage.getItem("email-address");

addProd.addEventListener("click", () => {
    if (emailAddress) {
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
    } else {
        window.location = "login.html";
    }

})

//let data = [];


function prodadd() {
    // e.preventDefult();
    // let pro = JSON.parse(localStorage.getItem("add"));

    const tagarr = tags.innerText.split(",");
    tagarr.forEach((item, i) => {
        tagarr[i].trim().toLowerCase();
    });


    let namevalue = prodName.innerText,
        deees = prodDes.innerText,
        pricevalue = price.innerText,
        valueId = JSON.stringify(Math.floor(Math.random() * 2000));
    let detailsvalue = details.innerText;



    let addcard = {
        id: valueId,
        name: namevalue,
        des: deees,
        image: img.src || "images/noImage.png",
        price: pricevalue,
        details: detailsvalue,
        tags: tagarr,
        email: emailAddress
    };

    // data = localStorage.getItem("add") ? JSON.parse(localStorage.getItem("add")) : [addcard];
    let daa = JSON.parse(localStorage.getItem("state"));

    let data = daa ? [...daa, addcard] : [addcard];
    localStorage.setItem("state", JSON.stringify(data));

}


console.log(JSON.parse(localStorage.getItem("data")));