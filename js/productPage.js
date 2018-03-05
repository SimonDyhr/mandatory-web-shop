/* Array of products */
const reviews = [
    { productID: 1,    personName: "Robert Sjöblom",        reviewText: "Den duger 1",     starRating: 4},
    { productID: 1,    personName: "Kristoffer Frejd",      reviewText: "Den duger 2",     starRating: 3},
    { productID: 1,    personName: "Johan Månsson",         reviewText: "Den duger 3",     starRating: 2},
    { productID: 2,    personName: "Robin Thörn",           reviewText: "Den duger 4",     starRating: 1},
    { productID: 2,    personName: "Simon Dyhr",            reviewText: "Den duger 5",     starRating: 4},
    { productID: 3,    personName: "Agneta Olsson",         reviewText: "Den duger 6",     starRating: 4},
    { productID: 4,    personName: "Anders Andersson",      reviewText: "Den duger 7",     starRating: 5}
];

//Show product
$('.show-product').on('click', function() {
    const productID = $(this).attr('id'); //Get ID from button

    let productInfo = products.find(product => product.id === Number(productID)); //Find data from the retrieved ID

    // Push out the data
    $('#productPageDetails').html(`
    <div class='productInDetail container'>
        <div class='productInDetailRow row'>
            <div class='productImageDetail col-md-5' id='productImage'>
                <img class='img-fluid rounded mb-3 mb-md-0' src='${productInfo.mainImage}'>
            </div>
            <div class='productInformationDetail col-md-7'>
                <div class='productNameDetail'><h4>${productInfo.productName}</h4></div>
                <div class='productpriceDetail'><h6>${productInfo.price}</h6></div>
                <div class='productdescriptDetail'>${productInfo.description}</div>
            </div>
        </div>
    </div>`);









    //Reviews
    let productInfoReviews = reviews.filter(product => product.productID === Number(productID)); //Find data from the retrieved ID
    $('#reviewsMade').html(``);  //Clear before entering loop

    //loop out all reviews
    for (let i = 0; i < productInfoReviews.length; i++) {
        $('#reviewsMade').append(`
        <div class='productInDetail container'>
            <div class='productInDetailRow row'>
                <div class='productInformationDetail col-md-12'>
                    <div class='productNameDetail'><h4>${productInfoReviews[i].personName}</h4></div>
                    <div class='productpriceDetail'><h6>${productInfoReviews[i].reviewText}</h6></div>
                    <div class='productdescriptDetail'>${productInfoReviews[i].starRating} Stars</div><br />
                </div>
            </div>
        </div> <br />`);
    }
});




/*
*
* I know this is static, overestimated my time for this assignment. So I ran out of time.
* Will be fixed to be generic in next assignment!
*
* */
$('#submitReview').on('click', function() {
    let textInput = document.querySelector('#review');
    let msgText = textInput.value;

    let textInputName = document.querySelector('#name');
    let inputName = textInputName.value;

    let textInputStars = document.querySelector('#starRating');
    let inputStars = textInputStars.value;

    reviews.push({productID: 1,    personName: inputName,      reviewText: msgText,     starRating: inputStars});

    const productID = '1'; //Get ID from button

    //Reviews
    let productInfoReviews = reviews.filter(product => product.productID === Number(productID)); //Find data from the retrieved ID
    $('#reviewsMade').html(``);  //Clear before entering loop

    //loop out all reviews
    for (let i = 0; i < productInfoReviews.length; i++) {
        $('#reviewsMade').append(`
        <div class='productInDetail container'>
            <div class='productInDetailRow row'>
                <div class='productInformationDetail col-md-12'>
                    <div class='productNameDetail'><h4>${productInfoReviews[i].personName}</h4></div>
                    <div class='productpriceDetail'><h6>${productInfoReviews[i].reviewText}</h6></div>
                    <div class='productdescriptDetail'>${productInfoReviews[i].starRating} Stars</div><br />
                </div>
            </div>
        </div> <br />`);
    }
});