fetch('https://fakestoreapi.com/products')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendImages(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendImages(data) {
    const mainContainer = document.getElementById("getProductImages");
    for (let i = 0; i < data.length; i++) {
        const element = document.createElement("div");
        element.classList.add("col-sm-2");
        element.innerHTML =
            '<p class="price">' + data[i].price + " €" + '</p>' + '<br>' +
            '<p>' + data[i].title + '</p>' + '<br>' +
            '<img src=' + data[i].image + ' class="img-fluid" alt="product-picture">';
        mainContainer.appendChild(element);
    }
}

