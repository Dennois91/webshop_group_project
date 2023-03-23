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

    if(regExp.test(telefon) || telefon.length > 50){
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