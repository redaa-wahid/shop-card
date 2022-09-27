let checkmail = document.querySelector("#mail");
let checkpassword = document.querySelector("#pass");
let bt = document.querySelector("#bt");

let emailAddress = localStorage.getItem("email-address");
let getpassword = localStorage.getItem("password");

bt.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkmail.value === "" || checkpassword.value === "") {
        ceckerror("fill data");
    } else {
        if (emailAddress && emailAddress === checkmail.value && getpassword &&
            getpassword === checkpassword.value) {
            setInterval(() => {
                let load = document.querySelector(".load");
                load.style.opacity = "1";
                load.style.zIndex = "1";
            }, 1100);
            setTimeout(() => {
                window.location = "index.html";
            }, 1500);
        } else {
            ceckerror("email address or password incorrect");

        }
    }
})