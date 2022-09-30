//add navbar design
let navbar = document.querySelector("nav");

function addnavbar() {


    navbar.innerHTML = `
  
    <svg class="nav-icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
  <div class="addnav-icon ">
    <ul class="link-nav">
        <li ><a href="index.html">home</a></li>
        <li><a href="dashboard.html">product</a></li>
        <li><a href="addprouduct.html">about</a></li>
        <li><a href="seller.html">contact</a></li>
    </ul>
    <div class="ser">
        <input type="search" name="" id="search" placeholder="search item">
        <svg onclick="searchbtn()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
    </div>
    <div class="card-icon">
    <span></span>
        <div class="icon">
            <img onclick="gotocard()"  class="shop" src="images/cart.png" alt="">
            <img class="user" onclick="clickaccount()" src="images/user.png" alt="">
        </div>
        <div class="account-name">
            <div class="div">
                <span></span>
            </div>
            <div class="btn">
                <button id="logOut" onclick="logout()"></button>
            </div>
        </div>
    </div>
    </div>
`;
}

addnavbar();

let clickiconnav = document.querySelector(".nav-icon");
let small = document.querySelector(".addnav-icon");

clickiconnav.addEventListener("click", () => {
    if (!navbar.classList.contains("small") && small.style.display != "block") {
        small.style.display = "block";
        navbar.classList.add("small");
    } else {
        small.style.display = "none";
        navbar.classList.remove("small");

    }
})


let search = document.querySelector("#search");

function searchbtn() {
    if (!search.value) {
        window.location = "notfound.html";
    } else {
        window.location = "search.html";
    }
}

function gotocard() {
    window.location = "card.html";
}

let countIcon = document.querySelector(".card-icon span");

let da = JSON.parse(localStorage.getItem("mycard"));

if (da.length) {
    countIcon.innerHTML = da.length;
}


//show defrent design nav with scroll
let nav = document.querySelector("nav");

window.addEventListener('scroll', () => {
    if (scrollY >= 395) {
        nav.classList.add("add");
    } else {
        nav.classList.remove("add");
    }
})

console.log(search);
//show name account
//let user = document.querySelector(".user");

let myName = document.querySelector(".account-name span");


function clickaccount(){
    let showUser = document.querySelector(".account-name");
let showdata = document.querySelector(".account-name .div");
let logOut = document.querySelector("#logOut");


  
    let yourName = localStorage.getItem("user-name");
    if (!yourName) {
        showdata.innerHTML = `log in to your account`;
        logOut.innerHTML = "login";

        logOut.addEventListener("click", () => {
            window.location = "login.html";
        })
    } else {
        showdata.innerHTML = `log in as,${yourName}`;
        logOut.innerHTML = "logout";
    }


    if (showUser.style.display != "none") {
        showUser.style.display = "none";
    } else {
        showUser.style.display = "block";
    }
}

function logout() {
    localStorage.removeItem("user-name");
    localStorage.removeItem("email-address");
    localStorage.removeItem("password");
    localStorage.removeItem("numberphone");
    
    window.reload();
}