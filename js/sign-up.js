let addname = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let number = document.querySelector("#number");
let ck = document.querySelector("#ck");
let btn = document.querySelector("#btn");


btn.addEventListener("click", signUp);

function signUp() {
    if (addname.value.length <= 3) {
        ceckerror("name must be 3 letters long");
    } else if (!email.value) {
        ceckerror("check your email addres");
    } else if (password.value.length < 8) {
        ceckerror("please add password strong");
    } else if (Number(number) || number.value.length < 10) {
        ceckerror("please add your number phone");
    } else if (!ck.checked) {
        ceckerror("you must agree to our termsand condetions");
    } else {
        localStorage.setItem("user-name", addname.value);
        localStorage.setItem("email-address", email.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("numberphone", number.value);

        setInterval(() => {
            let load = document.querySelector(".load");
            load.style.opacity = "1";
        }, 1200);
        setTimeout(() => {
            window.location = "login.html";
        }, 1700);
    }
}