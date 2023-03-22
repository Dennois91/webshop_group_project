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
            '<div class="product-box">' +
            '<p class="price">' + data[i].price + " €" + '</p>' + '<br>' +
            '<p>' + data[i].title + '</p>' + '<br>' +
            '<img src=' + data[i].image + ' class="img-fluid" alt="product-picture">' +
            '</div>';
        mainContainer.appendChild(element);
    }
}

function fetchProduct(id) {
    fetch('https://fakestoreapi.com/products/' + id)
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
        '<p class="price">' + data.price + " €" + '</p>' + '<br>' +
        '<p class="category">' + data.category + " €" + '</p>' + '<br>' +
        '<p class="title">' + data.title + '</p>' + '<br>' +
        '<img src=' + data.image + ' class="img-fluid" alt="product-picture">' + '<br>' +
        '<p class="description">' + data.description + '</p>' +
        '</div>';
    mainContainer.appendChild(element);
}

// TODO: MAX fixar formulär-sidan och bekräftelse-sidan. (Utcheckning och bekräftelse)