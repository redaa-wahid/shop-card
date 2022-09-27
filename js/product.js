//add star for reeview
let starreview = [...document.querySelectorAll(".star")];
let rate = 0;
console.log(starreview);

starreview.map((item, index) => {
    item.addEventListener("click", () => {
        rate = `${index+1}.0`;
        for (let i = 0; i < 5; i++) {
            if (i <= index) {
                starreview[i].src = "images/fill star.png";
            } else {
                starreview[i].src = "images/no fill star.png";
            }

        }
    })
})


//open cards details
let data = JSON.parse(localStorage.getItem("state"));
let prodData = document.querySelector(".product-data");
let state = JSON.parse(localStorage.getItem("id"));
console.log(data);
console.log(state.id);

function openDetailsProduct(data) {
    // let prodid = data.filter((item) => item.id === id);

    let produi = data.map((item) => {
        return `
<div class="image"> <img src="${item.image}" alt=""></div>
        <div class="data">
            <h2>${item.name}</h2>
            <p>${item.des}  </p>
            <div class="img">
                <img src="images/fill star.png" alt="">
                <img src="images/fill star.png" alt="">
                <img src="images/fill star.png" alt="">
                <img src="images/fill star.png" alt="">
                <img src="images/no fill star.png" alt="">
                <small>4,023 reviews</small>
            </div>
            <span>$${item.price}</span><br>
            <button class="buy">buy now</button>
            <button class="add-cart">add to cart</button>
        </div>`
    });
    prodData.innerHTML = produi;
}


openDetailsProduct([state]);

let similerProduct = document.querySelector(".best-prouducts");

function similer(state) {
    let produi = state.map((item) => {
        return `
        <div class="imgs">
        <div class="card">
            <img src="${item.image}" alt="">
            <p class="name">${item.name}</p>
        </div>
        `
    })
    similerProduct.innerHTML = produi;
}
similer([state]);


//add review card

let addReview = document.querySelector(".add-review");
let btnreview = document.querySelector(".review-btn");
let rateprod = document.querySelector(".custm");
let checkmail = localStorage.getItem("email-address");

btnreview.addEventListener("click", () => {
    if (!checkmail) {
        window.location = "login.html";
    } else {
        adddatareview();
        headline.innerHTML = "";
        review.innerHTML = "";
        let getdataReview = JSON.parse(localStorage.getItem("review"));
        addreviewcard(getdataReview);

        console.log(addreviewcard([getdataReview]));
        console.log(getdataReview);
    }
})

function adddatareview() {
    let headline = document.querySelector("#headline");
    let review = document.querySelector("#review");
    let headlinevalue = headline.innerHTML;
    let reviewvalue = review.innerHTML;

    let datareview = {
        headline: headlinevalue,
        review: reviewvalue,
        rate: rate,
        email: checkmail.email,
        prodid: state.id
    }
    let da = JSON.parse(localStorage.getItem("review"));
    let data = da ? [...da, datareview] : [datareview];
    localStorage.setItem("review", JSON.stringify(data));
}



function addreviewcard(data) {

    let card = "";

    for (let i = 0; i < 20; i++) {
        if (data[i]) {
            card =
                `
            <div class="say">
        <span class="rate">${data[i].rate}</span>
                <img src="images/user 4.png" alt="">
                <h2>${data[i].headline}</h2>
                <p>${data[i].review}</p>
            </div>
        `
        }

    }
    rateprod.innerHTML += card;

}
let getdataReview = JSON.parse(localStorage.getItem("review"));

function showreview(data) {
    let produi = data.map((item) => {
        if (item) {
            return `
            <div class="say">
        <span class="rate">${item.rate}</span>
                <img src="images/user 4.png" alt="">
                <h2>${item.headline}</h2>
                <p>${item.review}</p>
            </div>
        `
        }
    })

    rateprod.innerHTML += produi;
}
showreview(getdataReview);

//check contecteditable
let editcontent = [...document.querySelectorAll(`*[contenteditable="true"]`)];

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


//add product to card
let addToCart = document.querySelector(".add-cart");

//let da = [];

addToCart.addEventListener("click", () => {
    let state = JSON.parse(localStorage.getItem("id"));

    let da = JSON.parse(localStorage.getItem("mycard"));
    console.log(da);
    let data = da ? [...da, state] : [state];
    localStorage.setItem("mycard", JSON.stringify(data));
    return addToCart.innerHTML = "added";
})