



//function fetchAllProducts() {
    fetch('https://fakestoreapi.com/products') // TODO: Sätt in i en funktion, så att alla pages inte behöver ladda ner produkterna.
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendImages(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
//}

function appendImages(data) {
    const mainContainer = document.getElementById("getProductImages");
    for (let i = 0; i < data.length; i++) {
        const element = document.createElement("div");
        element.classList.add("col-xl-3", "col-lg-4", "col-md-6", "col-sm-12");
        element.innerHTML =
            '<p class="price">' + data[i].price + " €" + '</p>' + '<br>' +
            '<p>' + data[i].title + '</p>' + '<br>' +
            '<img src=' + data[i].image + ' class="img-fluid" alt="product-picture">';

        mainContainer.appendChild(element);
    }
}

// Uppdaterad version som gör den responsiv och centrerar bilderna.

// function appendImages(data) {
//     const mainContainer = document.getElementById("getProductImages");
//     for (let i = 0; i < data.length; i++) {
//         const element = document.createElement("div");
//         element.classList.add("col-xl-3", "col-lg-4", "col-md-6", "col-sm-12");
//
//         const contentWrapper = document.createElement("div");
//         contentWrapper.classList.add("d-flex", "justify-content-center", "flex-column", "align-items-center");
//
//         contentWrapper.innerHTML =
//             '<p class="price">' + data[i].price + " €" + '</p>' +
//             '<p>' + data[i].title + '</p>' +
//             '<img src=' + data[i].image + ' class="img-fluid" alt="product-picture">';
//
//         element.appendChild(contentWrapper);
//         mainContainer.appendChild(element);
//     }
// }

// TODO: MAX fixar formulär-sidan och bekräftelse-sidan. (Utcheckning och bekräftelse)