const ceckerror = (item) => {
    let error = document.querySelector(".error");
    error.innerHTML = item;
    error.style.display = "block";

    setTimeout(() => {
        error.style.display = "none";
    }, 2500);
}