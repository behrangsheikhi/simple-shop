$(document).ready(function() {

    $(window).resize(function() {
        if ($(window).width() >= 980) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function() {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function() {
                $(this).removeClass("show");
            });

            // do something here
        }
    });



    // document ready  
});
// first big slider nav

//کالاهای محبوب
$(document).ready(function() {
    $("#favorites-slider").owlCarousel({
        autoplayHoverPause: true,
        items: 10,
        loop: true,
        autoplay: 3000,
        slideSpeed: 300,
        paginationSpeed: 500,
        singleItem: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        navigation: false,
        pagination: false,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            600: {
                items: 2,
                loop: true
            },
            1000: {
                items: 3,
                loop: true
            },
            1600: {
                items: 4,
                loop: true
            }
        }

    });
});
// کالاهای محبوب

//کالاهای پرفروش
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        autoplayHoverPause: true,
        items: 10,
        loop: true,
        autoplay: 3000,
        slideSpeed: 300,
        paginationSpeed: 500,
        singleItem: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        navigation: false,
        pagination: false,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            600: {
                items: 2,
                loop: true
            },
            1000: {
                items: 3,
                loop: true
            },
            1600: {
                items: 4,
                loop: true
            }
        }

    });
});
//کالاهای پرفروش

// صفحه سبد خرید
// Remove Items From Cart
/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00;
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
    updateQuantity(this);
});

$('.product-removal button').click( function() {
    removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
    var subtotal = 0;

    /* Sum up row totals */
    $('.product').each(function () {
        subtotal += parseFloat($(this).children('.product-line-price').text());
    });

    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if(total == 0){
            $('.checkout').fadeOut(fadeTime);
        }else{
            $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn(fadeTime);
        });
    });
}


/* Remove item from cart */
function removeItem(removeButton)
{
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
    });
}
//shopping cart table
$(document).ready(function() {


    // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
    $('.table-responsive-stack').each(function (i) {
        var id = $(this).attr('id');
        //alert(id);
        $(this).find("th").each(function(i) {
            $('#'+id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+             $(this).text() + ':</span> ');
            $('.table-responsive-stack-thead').hide();

        });



    });





    $( '.table-responsive-stack' ).each(function() {
        var thCount = $(this).find("th").length;
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);
    });




    function flexTable(){
        if ($(window).width() < 768) {

            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").show();
                $(this).find('thead').hide();
            });


            // window is less than 768px
        } else {


            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").hide();
                $(this).find('thead').show();
            });



        }
// flextable
    }

    flexTable();

    window.onresize = function(event) {
        flexTable();
    };






// document ready
});

