
/* Array of products */
const products = [
    { id: 1,    productName: "ADIDAS ORIGINALS ULTRABOOST AT",    price: 240,     color: 'TRIPLE WHITE',      description: "Beskrivning1",    mainImage: "img/asd.jpg" },
    { id: 2,    productName: "ADIDAS ORIGINALS ULTRABOOST LTD",   price: 220,     color: 'BLACK / WHITE',     description: "Beskrivning2",    mainImage: "img/asd.jpg" },
    { id: 3,    productName: "CONVERSE ZIP 70`S LOW",             price: 123,     color: 'PURE PLATINUM',     description: "Beskrivning3",    mainImage: "img/asd.jpg" },
    { id: 4,    productName: "TIMBERLAND 6\" FIELD BOOT WP",      price: 180,     color: 'LIGHT GREY',        description: "Beskrivning4",    mainImage: "img/asd.jpg" },
    { id: 5,    productName: "TIMBERLAND 6\" PREMIUM BOOT",       price: 220,     color: 'HORWEEN',           description: "Beskrivning5",    mainImage: "img/asd.jpg" },
    { id: 6,    productName: "CONVERSE ZIP 70`S HIGH",            price: 115,     color: 'BLACK / WHITE',     description: "Beskrivning6",    mainImage: "img/asd.jpg" }
];



// Loopen för produkter
for (let i = 0; i < products.length; i++) {

    const { id, productName, description, price, mainImage } = products[i]; //Fetch data to use in html beneath

    $('#products').append(`
    <br />
    <div class='product row' id='product + i +'>
        <div class='col-md-7'>
            <div class='productName' id='productName + i +'><h4>${productName}</h4></div>
            <div class='productPrice' id='productPrice + i +'><h6>${price}</h6></div>
            <div class='productDescription' id='productDescription + i +'>${description}</div>
            <button class='add-to-cart btn btn-primary' id='${id}'> Add to cart </button>
            <button class='show-product btn btn-primary' id='${id}'> Show product </button>
        </div>
        <div class='productImage col-md-5' id='productImage + i +'><img class='img-fluid rounded mb-3 mb-md-0' src='${mainImage}'></div>
    </div>
    `);
}


//Pressed menulink Products
$('.menuProducts').on('click', function() {
    $("#products").fadeIn();
    $("#checkout").hide();
    $(".productPage").hide();
});
//Pressed menulink Checkout
$('.menuCheckout').on('click', function() {
    $("#checkout").fadeIn();
    $("#products").hide();
    $(".productPage").hide();
});
//Pressed more info on product
$('.show-product').on('click', function() {
    $(".productPage").fadeIn();
    $("#checkout").hide();
    $("#products").hide();
});