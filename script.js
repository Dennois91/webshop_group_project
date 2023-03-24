function fetchAllProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendPreviews(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendPreviews(data) {
    const mainContainer = document.getElementById("getProductPreviews");
    for (let i = 0; i < data.length; i++) {
        const element = document.createElement("div");
        element.classList.add("col-xl-3", "col-lg-4", "col-md-6", "col-sm-12");
        element.innerHTML =
            '<div class="product-button" data-bs-toggle="modal"' +
            ' data-bs-target="#product-modal-' + i + '">' +
            '<p class="preview-price">' + data[i].price + " €" + '</p>' + '<br>' +
            '<p>' + data[i].title + '</p>' + '<br>' +
            '<img src=' + data[i].image + ' class="img-fluid" alt="product-picture">' +
            '</div>' +
            '<div class="modal fade modal-xl" id="product-modal-' + i + '">' +
            '<div class="modal-dialog modal-dialog-centered">' +
            '<div class="modal-content">' +
            '<div class="modal-body">' +
            '<div class="product-modal">' +
            '<h1 class="title">' + data[i].price + " €" + '</h1>' + '<br>' +
            //'<p class="category">' + data[i].category + '</p>' + '<br>' +
            '<h2 class="title">' + data[i].title + '</h2>' + '<br>' +
            '<img src=' + data[i].image + ' class="img-fluid" alt="product-picture">' + '<br>' +
            '<p class="description">' + data[i].description + '</p>' +
            '<div class="modal-footer justify-content-center"> ' +
            '<button class="btn btn-primary opacity-90 col-6 mx-3" onclick="openOrderPage(this.id)" id="' + (i + 1) +
            '">Order</button>' +
            '<button class="btn btn-danger opacity-90 col-6 mx-3" data-bs-dismiss="modal">Exit</button></div> ' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        mainContainer.appendChild(element);
    }
}

function openOrderPage(id) {
    sessionStorage.setItem("idToOrder", id);
    window.open("order.html",'_self');
}

function fetchProduct() {
    fetch('https://fakestoreapi.com/products/' + sessionStorage.getItem("idToOrder"))
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendProduct(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendProduct(data) {
    const mainContainer = document.getElementById("getProduct");
    const element = document.createElement("div");
    element.classList.add("product");
    element.innerHTML =
        '<div class="product-box">' +
        '<h1 class="price">' + data.price + " €" + '</h1>' + '<br>' +
        // '<p class="category">' + data.category + '</p>' + '<br>' +
        '<h2 class="title">' + data.title + '</h2>' + '<br>' +
        '<img src=' + data.image + ' class="img-fluid" alt="product-picture">' + '<br>' +
        // '<p class="description">' + data.description + '</p>' +
        '</div>';
    mainContainer.appendChild(element);
}

/* --------------------------------- order --------------------------------- */

let formNamn = document.getElementById("namn")
let formEmail = document.getElementById("email")
let formTelefon = document.getElementById("telefon")
let formAdress = document.getElementById("adress")
let formOrt = document.getElementById("ort")
let formPostNr = document.getElementById("postnr")
let knappKöp = document.getElementById("knappköp")
let validationStatus = 0

knappKöp.addEventListener("click", function () {
    validateName(formNamn.value)
    validateEmail(formEmail.value)
    validateTelefon(formTelefon.value)
    validateAdress(formAdress.value)
    validateOrt(formOrt.value)
    validatePostNr(formPostNr.value)

    if (validationStatus === 0) {
        //window.location.replace("index.html");
    }
})

function validateName(namn) {
    if (namn.length < 2 || namn.length > 50) {
        alert("Namn måste innehålla mellan 2 och 50 karaktärer")
        validationStatus += 1
    }
}

function validateEmail(email) {
    if (!email.includes("@") && email.length > 50) {
        alert("Email måste innehålla @ och vara kortare än 50 karaktärer")
        validationStatus += 1
    }
}

function validateTelefon(telefon) {
    let regExp = /[a-öA-Ö]/i;

    if (regExp.test(telefon) || telefon.length > 50) {
        alert("Telefonnummer får inte innehålla några" +
            " bokstäver eller vara längre än 50 karaktärer")
        validationStatus += 1
    }
}

function validateAdress(adress) {
    if (adress.length < 4 || adress.length > 50) {
        alert("Adress måste vara mellan 4 och 50 karaktärer")
        validationStatus += 1
    }
}

function validateOrt(ort) {
    if (ort.length < 2 || ort.length > 50) {
        alert("Ort måste vara mellan 2 och 50 karaktärer")
        validationStatus += 1
    }
}

function validatePostNr(postnr) {
    if (postnr.length > 6 || postnr[3] !== " ") {
        alert("Postnummer ska skrivas på format xxx xx")
        validationStatus += 1
    }
}