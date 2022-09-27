let addName = document.querySelector("#name");
let addres = document.querySelector("#addres");
let about = document.querySelector("#about");
let number = document.querySelector("#number");
let btn = document.querySelector("#sellBtn");

btn.addEventListener("click", signUp);

function signUp() {
    if (!addName.value || !addres.value || !about.value || number.length < 10) {
        alert("some informayion is incorrect");
    } else {
        localStorage.setItem("nam", addName.value);
        localStorage.setItem("addres", addres.value);
        localStorage.setItem("about", about.value);
        localStorage.setItem("num", number.value);
        window.location = "notfound.html";
    }
}