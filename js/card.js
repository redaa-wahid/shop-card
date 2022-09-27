let data = JSON.parse(localStorage.getItem("mycard"));
let mycard = document.querySelector(".card .mycard ");



function checkdatacard() {

    let produi = data.map((item) => {

        return `
        <div class="icons">
        <img src="${item.image}" alt="">
        <img class="delete" src="../images/close.png" alt="" >
        <div class="det">
            <h2>${item.name}</h2>
            <p>${item.des}</p>
        </div>
        <div class="myrate">         
<button class="decrement" >-</button>
<button class="num">0</button>
<button class="increment">+</button>

            <p class="price" data-price="${item.price}">$${item.price}</p>
        </div>      
        </div>
        `;
    })
    if (!data.length) {

        let emptycard = document.querySelector(".empty-card");

        emptycard.src = "images/empty-cart.png";
    } else {
        mycard.innerHTML += produi;
        checknumprod(data);

        del(data);
    }


}
checkdatacard(data);

let checkout = document.querySelector(".checkout");

function checkdataout(data) {
    let produi = data.map((item) => {
        return `
        <div class="total">
<p>your total bill</p>
<div class="total-price">$${item.price}</div><br>
<button class="btncheckout">checkout</button>
</div>
       `;
    });
    checkout.innerHTML += produi;

}
checkdataout([data]);




function checknumprod(item) {
    let num = document.querySelectorAll(".num");
    let decrement = document.querySelectorAll(".decrement");
    let increment = document.querySelectorAll(".increment");
    let price = document.querySelectorAll(".price");



    for (let i = 0; i < increment.length; i++) {

        let coastprice = Number(price[i].getAttribute("data-price"));

        increment[i].addEventListener("click", () => {
            let total = document.querySelector(".total-price");

            console.log(total);
            if (num[i].innerHTML < 9) {
                num[i].innerHTML++;

                let r = item.map((x, b) => { return num[b].innerHTML * coastprice; });

                console.log(item[i]);


                // let mydatalocal = state ? [...state, item[i]] : [item[i]];



                localStorage.setItem("price", JSON.stringify(r));
                let ff = JSON.parse(localStorage.getItem("price"));
                let aa = ff.reduce(function(a, b) { return a + b; });

                total.innerHTML = aa;

            }


        })

        for (let i = 0; i < decrement.length; i++) {
            let coastprice = Number(price[i].getAttribute("data-price"));
            decrement[i].addEventListener("click", () => {
                let total = document.querySelector(".total-price");
                if (num[i].innerHTML > 1) {
                    num[i].innerHTML--;

                    let r = item.map((x, b) => { return num[b].innerHTML * coastprice; })



                    localStorage.setItem("price", JSON.stringify(r));
                    let ff = JSON.parse(localStorage.getItem("price"));
                    let aa = ff.reduce(function(a, b) { return a + b; });

                    total.innerHTML = aa;

                }

            });
        }
    }
}

function del(data) {
    let btndel = document.querySelectorAll(".delete");
    data.map((items, i) => {
        btndel[i].addEventListener("click", () => {

            let da = data.filter((da, index) => index != i);

            localStorage.setItem("mycard", JSON.stringify(da));
            //  let dat = JSON.parse(localStorage.getItem("mycard"));

            window.location.reload(checkdatacard());
            checkdatacard(da);
            console.log(da);

        })
    })
}

let dataCheckout = document.querySelector(".data-checkout");
let btncheckout = document.querySelector(".btncheckout");
let mail = localStorage.getItem("email-address");


btncheckout.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("mycard"));
    if (mail) {
        for (let i = 0; i < data.length; i++) {
            let num = document.querySelectorAll(".num");
            if (num[i].innerHTML > 0) {
                let dat = data.filter((da, index) => index == i);
                console.log(da);
                let state = JSON.parse(localStorage.getItem("addDatalocal"));
                let mydatalocal = state ? [...state, dat] : [dat];
                console.log(mydatalocal);
                localStorage.setItem("addDatalocal", JSON.stringify(mydatalocal));
            }
        }

        if (data.length) {
            dataCheckout.style.display = "block";
            return btncheckout.innerHTML = "place Ordar";

        } else {
            console.log("hh");
        }
    } else {
        window.location = "login.html";
    }


})
let address = document.querySelector(".address");
street = document.querySelector(".street"),
    city = document.querySelector(".city"),
    state = document.querySelector(".state"),
    pincode = document.querySelector(".pincode"),
    landmark = document.querySelector(".landmark");

let btnSendData = document.querySelector(".btnsenddata");


btnSendData.addEventListener("click", () => {
    if (!address.value) {
        ceckerror("chould enter proud address");
    } else if (!street.value) {
        ceckerror("chould enter proud street");
    } else if (!city.value) {
        ceckerror("chould enter proud city");
    } else if (!state.value) {
        ceckerror("chould enter proud state");
    } else if (!pincode.value) {
        ceckerror("chould enter proud pincode");
    } else if (!landmark.value) {
        ceckerror("chould enter proud landmark");
    } else {
        //  console.log(JSON.parse(localStorage.getItem("dataPerson")));
        getdataperson();
        address.value = "";
        street.value = "";
        city.value = "";
        state.value = "";
        pincode.value = "";
        landmark.value = "";
    }

})

function getdataperson() {

    console.log(address);
    let addressVal = address.value,
        streetVal = street.value,
        cityVal = city.value,
        stateVal = state.value,
        pincodeVal = pincode.value;
    let landmarkVal = landmark.value;

    let dat = {
        address: addressVal,
        street: streetVal,
        city: cityVal,
        state: stateVal,
        pincode: pincodeVal,
        landmark: landmarkVal
    };
    console.log(dat.address);

    //  btnSendData.addEventListener("click", () => {


    let daa = JSON.parse(localStorage.getItem("dataPerson"));

    let data = daa ? [...daa, dat] : [dat];
    localStorage.setItem("dataPerson", JSON.stringify(data));
    // })
}