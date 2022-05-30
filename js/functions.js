;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    $doc.ready(function () {

        // Delivered Processed
        // $body.on( "click", '.delivered-processed a', function (e) {
        //     e.preventDefault();
        // });
        // Open Menu
        $body.on( "click", '.menu-toggle-btn', function (e) {
            e.preventDefault();
            $(".header").toggleClass('menu-opened');
            $(".main-menu").toggleClass('opened-left');
            $body.toggleClass('menu-has');
        });
        // Mini cart
        $body.on( "click", '.cart-btn-trig', function (e) {
            e.preventDefault();
            var header = $(".header");
            header.removeClass('menu-opened');
            $body.removeClass('menu-has');
            $body.toggleClass('cart-has');
            $(".main-menu").removeClass('opened-left');
            header.toggleClass('cart-opened');
            $(".mini-cart").toggleClass('opened-right');
        });
        // Scroll Down
        $body.on( "click", '.scroll-down-action', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("main").offset().top
            }, 2000);
        });
        // age-verification
        // $(".age-verification").modal("show");
        // $(".contact-us-model").modal("show");
        // $(".register-modal").modal("show");
        // $(".payment-method-model").modal("show");

        $body.on( "click", '.sing-up', function (e) {
            e.preventDefault();
            $(".register-modal").modal("show");
        });

        $body.on( "click", '.sing-in', function (e) {
            e.preventDefault();
            $(".login-modal").modal("show");
        });

        $body.on( "click", '.forgot-action', function (e) {
            e.preventDefault();
            $(".forgot-password-modal").modal("show");
        });

         //header-search
        $body.on( "click", '.header-search', function () {
            $body.toggleClass('advance-search-modal-has');
            $(".advanced-search-model").modal("show");
        });
        // Age Exit
        $body.on( "click", '.age-exit', function (e) {
            e.preventDefault();
            window.location.replace("https://www.google.com/");
        });
        // Age Enter
        $body.on( "click", '.age-enter', function (e) {
            e.preventDefault();
            $(".age-verification").modal("hide");
        });
        $(".category-slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
        $(".pr-category-slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

        var $slider1 = $(".pcsw-slider"),
            sl1_length = $slider1.children('div').length -1;
        $slider1.slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        // Age Enter
        $('#commentform').hide();
        $('#comment_sub').hide();
        $body.on( "click", '#reply-title', function (e) {
            e.preventDefault();
           $(this).hide();
           $('#commentform').show();
           $('#comment_sub').show();
        });

        $body.on( "click", '#comment_sub', function (e) {
            e.preventDefault();
           $(this).hide();
           $('#reply-title').show();
            $('#commentform').hide();
        });


        $(".single-product-model").modal("show");
        // $body.on( "click", '.product', function (e) {
        //     e.preventDefault();
        //     $(".single-product-model").modal("show");
        // });

        // Slider Resize in Quick View Modal
        $(".single-product-model").on('shown.bs.modal', function () {
            $(".category-slider").resize();
        });


        $(".service-message-model").modal("show");
        $(".service-message-model-avaiable").modal("show");

        $(".payment-method-model").modal("show");
        $(".delivery-model").modal("show");
        $body.on( "click", '#continue', function (e) {
            e.preventDefault();
            $(".payment-method-model").modal("show");
            $(".delivery-model").modal("hide");
        });


        $( "#datepicker" ).datepicker(
            { dateFormat: 'dd/mm/yy' }
        );

        $('#timepicker').timepicker( { timeFormat: 'hh/mm' });



        $(".product-filter-select").chosen({disable_search_threshold: 10});

        $("#price_slide_input").slider({});
        var quantitiy=0;
        $('.quantity-right-plus').click(function(e){
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            $('#quantity').val(quantity + 1);
        });
        $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            if(quantity>0){
                $('#quantity').val(quantity - 1);
            }
        });

        $body.on( "click", '#agree-terams', function (e) {
            $('#mgs').addClass('d-none');
        });


        $('.upload-id').addClass('d-none');
        $('.upload-photo').addClass('d-none');


        $body.on( "click", '#next', function (e) {
            e.preventDefault();

            if ( $( "#agree-terams" ).is( ":checked" ) ){
                $('.upload-id').removeClass('d-none');
                $('#mgs').addClass('d-none');

                $('.register-form').hide();
                $('.register-wrapper').find('ul>li:nth-child(2)').addClass('active');
            }else{
                $('#mgs').removeClass('d-none');
            }

        });

        $body.on( "click", '#back', function (e) {
            e.preventDefault();
            $('.upload-id').addClass('d-none');
           $('.register-form').show();
            $('.register-wrapper').find('ul>li:nth-child(2)').removeClass('active');
        });

      $body.on( "click", '#back_up', function (e) {
            e.preventDefault();
          $('.upload-id').removeClass('d-none');
          $('.upload-photo').addClass('d-none');
          $('.register-wrapper').find('ul>li:nth-child(3)').removeClass('active');

          $(this).parents('.upload-photo').find('.needsclick').removeClass('dz-message');
          $('.upload-id').find('.needsclick').addClass('dz-message');
        });

        $body.on( "click", '#next_up', function (e) {
            e.preventDefault();
            $('.upload-photo').removeClass('d-none');
            $('.upload-id').addClass('d-none');
            $('.register-wrapper').find('ul>li:nth-child(3)').addClass('active');

            $(this).parents('.upload-id').find('.needsclick').removeClass('dz-message');
            $('.upload-photo').find('.needsclick').addClass('dz-message');
        });

        $body.on( "click", '#more_cat', function (e) {
            e.preventDefault();
            alert("sdfsdf");
            $('.categories').find(".cat").removeClass('d-none');
        });





//-------------------------------------//
// hack CodePen to load pens as pages

        var nextPenSlugs = [
            '3d9a3b8092ebcf9bc4a72672b81df1ac',
            '2cde50c59ea73c47aec5bd26343ce287',
            'd83110c5f71ea23ba5800b6b1a4a95c4',
        ];

        function getPenPath() {
            var slug = nextPenSlugs[ this.loadCount ];
            if ( slug ) {
                return 'http://localhost:63342/norcanna/html/index.html?_ijt=qt4onm2btns9opqg23i7i5sdf';
            }
            console.log(slug)
        }


        /*$('.container').infiniteScroll({
            path: getPenPath,
            append: '.row',
            button: '.view-more-button',
            // using button, disable loading on scroll
            scrollThreshold: false,
            status: '.page-load-status',
        });*/


    });
})(jQuery, window, document);
