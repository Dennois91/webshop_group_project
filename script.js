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

let formName = document.getElementById("nameForm")
let formEmail = document.getElementById("emailForm")
let formPhone = document.getElementById("phoneForm")
let formAddress = document.getElementById("addressForm")
let formCity = document.getElementById("cityForm")
let formZip = document.getElementById("zipForm")
let buyButton = document.getElementById("buttonBuy")
let validationStatus = 0

buyButton.addEventListener("click", function (event) {
    event.preventDefault()
    validateName(formName.value)
    validateEmail(formEmail.value)
    validatePhone(formPhone.value)
    validateAddress(formAddress.value)
    validateCity(formCity.value)
    validateZip(formZip.value)
    console.log(validationStatus)
    console.log(formName.value)
    console.log(formEmail.value)
    console.log(formPhone.value)
    console.log(formAddress.value)
    console.log(formCity.value)
    console.log(formZip.value)

    if (validationStatus === 0) {
        console.log("Success")
        let obj = {
            customerName: formName.value,
            customerEmail: formEmail.value,
            customerPhone: formPhone.value,
            customerAddress: formAddress.value,
            customerCity: formCity.value,
            customerZip: formZip.value
        }
        let objJSON = JSON.stringify(obj)
        localStorage.setItem("localCustomerData", objJSON)
        window.open("confirmation.html",'_self');
    } else {
        console.error("Error")
    }
    validationStatus = 0
})

function loadAndClearInfo() {
    let customerDataJSON = localStorage.getItem("localCustomerData")
    let customerData = JSON.parse(customerDataJSON)
    let displayInfo = document.getElementById("orderconf")
    displayInfo.innerHTML = '<h2 id="confhead">Orderbekräftelse</h2>\n' +
        '<h4> Namn: ' + customerData.customerName + '</h4>\n' +
        '<h4> Mailadresss: ' + customerData.customerEmail + '</h4>\n' +
        '<h4> Telefonnummer: ' + customerData.customerPhone + '</h4>\n' +
        '<h4> Gatuadress: ' + customerData.customerAddress + '</h4>\n' +
        '<h4> Ort: ' + customerData.customerCity + '</h4>\n' +
        '<h4> Postnummer: ' + customerData.customerZip + '</h4>'
    localStorage.removeItem("localCustomerData")
}

function validateName(name) {
    if (name.length < 2 || name.length > 50) {
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

function validatePhone(phone) {
    let regExp = /[a-öA-Ö]/i;

    if (regExp.test(phone) || phone.length > 50 || phone.length === 0) {
        alert("Telefonnummer får inte vara tomt eller innehålla några" +
            " bokstäver eller vara längre än 50 karaktärer")
        validationStatus += 1
    }
}

function validateAddress(address) {
    if (address.length < 4 || address.length > 50) {
        alert("Adress måste vara mellan 4 och 50 karaktärer")
        validationStatus += 1
    }
}

function validateCity(city) {
    if (city.length < 2 || city.length > 50) {
        alert("Ort måste vara mellan 2 och 50 karaktärer")
        validationStatus += 1
    }
}

function validateZip(zip) {
    if (zip.length > 6 || zip[3] !== " ") {
        alert("Postnummer ska skrivas på format xxx xx")
        validationStatus += 1
    }
}