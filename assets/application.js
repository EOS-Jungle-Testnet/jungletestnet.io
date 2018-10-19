$(document).ready(function() {
	"use strict";

/******************** NAVBAR ********************/
var animationProp = $('.navbar-nemo'); //Navbar wraper

if ( matchMedia( 'only screen and (min-width: 768px)' ).matches && animationProp.hasClass('navbar-transparent') ) {
   var scrollPos = $(this).scrollTop(),
       animationEndPos = 150, //At the point background add
       logo = animationProp.find('.navbar-brand img');

   //if visitor refresh on the middle of the document
   if(scrollPos > animationEndPos) {
      animationProp.removeClass('navbar-transparent');
      logo.attr('src', 'images/logo-alt.png');
   }

   //toggle existing class
   $(document).scroll(function() {
      scrollPos = $(this).scrollTop();

      if( scrollPos > animationEndPos ) {
         animationProp.removeClass('navbar-transparent');

         //change logo into black
         logo.attr('src', 'images/logo-alt.png');
      } else {
         animationProp.addClass('navbar-transparent');

         //change logo into base
         logo.attr('src', 'images/logo.png');

      }
   });
}



/******************** BACKGROUND VIDEO ********************/
var vidContainer1 = document.querySelector(".video-player");
var vidContainer2 = document.querySelector(".the-video-2");

if ( vidContainer1 != null ) {
   var vid = vidContainer1.querySelector("video");
   var pauseButton = vidContainer1.querySelector("button");

  vid.addEventListener('ended', function() {
     // only functional if "loop" is removed 
     vid.pause();
     // to capture IE10
     // vidFade();
  });

  pauseButton.addEventListener("click", function() {
     if (vid.paused) {
        vid.play();
        $(pauseButton).animate({'bottom': '50px', 'opacity': '0.5'});
        $(pauseButton).find('.play').removeClass('active');
        $(pauseButton).find('.pause').addClass('active');

     } else {
        vid.pause();
        $(pauseButton).animate({'bottom': '50%', 'opacity': '1'});
        $(pauseButton).find('.pause').removeClass('active');
        $(pauseButton).find('.play').addClass('active');
     }
  });
}

if( vidContainer2 != null ) {
  var vid = vidContainer2.querySelector("video");
  var pauseButton = vidContainer2.querySelector("button");

  vid.addEventListener('ended', function() {
     // only functional if "loop" is removed 
     vid.pause();
     // to capture IE10
     // vidFade();
  });

  pauseButton.addEventListener("click", function() {
     if (vid.paused) {
        vid.play();
        $(vidContainer2).addClass('playing');
        $(pauseButton).find('.play').removeClass('active');
        $(pauseButton).find('.pause').addClass('active');

     } else {
        vid.pause();
        $(vidContainer2).removeClass('playing');
        $(pauseButton).animate({'bottom': '50%', 'opacity': '1'});
        $(pauseButton).find('.pause').removeClass('active');
        $(pauseButton).find('.play').addClass('active');
     }
  });
}


/******************** GOOGLE MAP ********************/
var initMapBig = function() {
   var where = {lat: -37.8174061, lng: 144.956432};
   var map = new google.maps.Map(document.getElementById('mapBig'), {
      zoom: 17,
      center: {lat: -37.816165, lng: 144.956432},
      scrollwheel: false
   });

   var contentString = '<div class="map-info-window">' +
      '<h3 id="edit3" class="title-text">NemoConf</h3>' +
      '<address>' +
      '<p id="edit1">PO Box 16122 Collins Street West Victoria 8007 Australia</p>' +
      '</address>' +
      '<a id="edit2" href="" href="#" data-toggle="modal" data-target="#myModal" class="link text-color">' +
      'Get in touch' +
      '<i id="edit4" class="icon svg-arrow-right"></i>' +
      '</a>' +
      '</div>';

   var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 318,
      borderRadius: 4,
      backgroundColor: '#ffffff',
      hideCloseButton: true,
      borderWidth: 0,
      shadowStyle: 0,
      disableAutoPan: false

   });

   var marker = new google.maps.Marker({
      position: where,
      map: map,
      title: 'Where title'
   });

   marker.addListener('click', function() {
      infowindow.open(map, marker);
   });
   infowindow.open(map, marker);
   
}

if( document.getElementById('mapBig') != null ) {
   // map initialize
   initMapBig();
}


var initMapSmall = function() {
   var where = {lat: -37.8174061, lng: 144.956432};
   var map = new google.maps.Map(document.getElementById('mapSmall'), {
      zoom: 17,
      center: where,
      scrollwheel: false,
      disableDefaultUI: true
   });

   var marker = new google.maps.Marker({
      position: where,
      map: map
   });
}

if( document.getElementById('mapSmall') != null ) {
   // map initialize
   initMapSmall();
}



/******************** NAVBAR APPEAR ON SCROLL ********************/
if( animationProp.hasClass('appear-onscroll') ) {
   $(document).scroll(function() {
      var scrollPos = $(this).scrollTop();

      if( scrollPos > 150 ) {
         animationProp.removeClass('appear-onscroll');
      } else {
         animationProp.addClass('appear-onscroll');
      }
   });
}



/******************** ONE PAGE NAVIGATION ********************/
$('.navbar-nav').onePageNav({
   currentClass: 'active',
   scrollOffset: 74
});


/******************** NAVBAR COLLAPSE ON CLICK ********************/
$('.navbar-nav').on('click', 'a', function(event) {
   /* Act on the event */
   $('.navbar-collapse').collapse('hide');
});


/******************** SCREENSHOTS SWIPER ********************/
var screenShot_1 = new Swiper ('#screenshot-1-swiper', {
   autoplay: 3000,
   slidesPerView: 5,
   loop: true,
   centeredSlides: true,
   paginationClickable: true,
   spaceBetween: 15,
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
   pagination: '.swiper-pagination',
   breakpoints: {
      991: {
         slidesPerView: 3
      },

      480: {
         slidesPerView: 1
      }    
   }
});

/******************** FEATURES SWIPER ********************/
var features_4 = new Swiper('#features-swiper', {
   autoplay: 3000,
   slidesPerView: 1,
   width: 240,
   loop: true,
   paginationClickable: true,
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
   pagination: '.swiper-pagination'
});

/* Click on feature-side-content
----------------------------------------------------------------------------- */
$('.feature-side-content[data-swiper-slide-to]').on('click', function () {
  var el = $(this),
      swipToSlide = el.attr('data-swiper-slide-to');
  $('.feature-side-content.active').removeClass('active');
  el.addClass('active');
  $('#features-swiper')[0].swiper.slideTo(swipToSlide, 500, false);
});

/* When slider swipe
----------------------------------------------------------------------------- */
if ($('#features-swiper').length) {
  $('#features-swiper')[0].swiper.on('slideChangeStart', function () {
    var slideIndex = $('#features-swiper')[0].swiper.activeIndex;
    $('.feature-side-content.active').removeClass('active');
    $('.feature-side-content[data-swiper-slide-to="' + slideIndex + '"]').addClass('active');
    if (slideIndex > $('.feature-side-content[data-swiper-slide-to]').length) {
      $('.feature-side-content[data-swiper-slide-to="1"]').addClass('active');
    } else if (slideIndex < 1) {
      $('.feature-side-content[data-swiper-slide-to="' + $('.feature-side-content[data-swiper-slide-to]').length + '"]').addClass('active');
    }
  });
}


/******************** TESTIMONIALS ********************/
var testimonials_1 = new Swiper('.testimonials-1 .testimonials-content', {
   slidesPerView: 1,
   autoplay: 3000,
   slideToClickedSlide: true
});

var testimonialsThumb = new Swiper('.testimonials-1 .testimonials-thumb', {
   slidesPerView: 5,
   centeredSlides: true,
   slideToClickedSlide: true,
   slideActiveClass: 'active'
});

testimonials_1.params.control = testimonialsThumb;
testimonialsThumb.params.control = testimonials_1;


var testimonials_2 = new Swiper('.testimonials-2 .testimonials-content', {
   slidesPerView: 1,
   autoplay: 3000,
   loop: true,
   slideToClickedSlide: true
});


/******************** COURSE SLIDER ********************/
var ourCourse = new Swiper ('.course-description .swiper-container', {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: '.swiper-pagination',
   autoplay: 3000,
   breakpoints: {
      991: {
         slidesPerView: 2
      },

      767: {
         slidesPerView: 1,
         spaceBetween: 15
      }
   }
});


/******************** LIGHTBOX ********************/
$('.lightbox').nivoLightbox();


var bioWidth = $('.container').width();

$('.hero-tabs .speakers-bio').css('width', bioWidth);

/******************** HERO TABS ********************/
$('.hero-tabs li [data-target]').on('click', function(event) {
   event.preventDefault();
   /* Act on the event */

   var loadTarget = $(this).data('target');

   $('.hero-tabs li').removeClass('active');
   $('.hero-tabs .icon-collapsed .svg-icon-minus-06').removeClass('active');
   $('.hero-tabs .icon-collapsed .svg-icon-plus').addClass('active');
   $('.speakers-bio').hide();

   $(this).closest('li').addClass('active');
   $(this).find('.icon-collapsed .svg-icon-plus').removeClass('active');
   $(this).find('.icon-collapsed .svg-icon-minus-06').addClass('active');
   $(loadTarget).fadeIn();
});


// Function for email address validation
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}


/*
|----------------------------------------------------------------------------
| SUBSCRIBE OR CONTACT FORMS
|----------------------------------------------------------------------------
*/
/******************** AJAX SUBSCRIBE LOCAL STORAGE ********************/
$("#subscribe-local").on('submit', function(e) {
   e.preventDefault();
   var data = {
      email: $(this).find('input[name="email"]').val()
   };

   if ( validateEmail(data.email) ) {
      $.ajax({
         type: "POST",
         url: $(this).attr('action'),
         data: data,
         success: function() {
            $('.success-msg').fadeIn(1000);
            $('.error-msg').fadeOut(500);
         }
      });
   } else {
      $('.error-msg').fadeIn(1000);
      $('.success-msg').fadeOut(500);
   }

return false;
});


/******************** AJAX MAILCHIMP SUBSCRIBE ********************/
$("#subscribe-mailchimp").ajaxChimp({
    callback: mailchimpCallback,
    url: "http://bdpark.us7.list-manage1.com/subscribe/post?u=d6649e6cfae99f3bc710a85a5&id=07db0b4bd6" // Replace your mailchimp post url inside double quote "".  
});

function mailchimpCallback(resp) {
   var error_msg = $('#subscribe-mailchimp').find('.error-msg');

   if(resp.result === 'success') {
      error_msg.fadeOut(200);

      $('.simple-success-msg p').html(resp.msg);
      $('#subscribe_modal_1').modal();

   } else if(resp.result === 'error') {
      error_msg.html(resp.msg).fadeIn(200);
   }  
};


/******************** CONTACT FORM ********************/
$('#contact-form').on('submit', function(e) {
   e.preventDefault();
   var error_msg = $(this).find('.error-msg'),
       data = $(this).serialize();

   if (validateEmail( $(this).find('input[name="email"]').val() )) {
      $.ajax({
         type: "POST",
         url: $(this).attr('action'),
         data: data,
         success: function() {
            error_msg.fadeOut(200);
            $('#subscribe_modal_1').modal();
         }
      });
   } else {
      error_msg.fadeIn(200);
   }

return false;
});


/******************** TICKET BOOKING FORM 1 ********************/
$('#ticket-booking-form-1').on('submit', function(e) {
   e.preventDefault();
var success_msg = $(this).find('.success-msg'),
    error_msg = $(this).find('.error-msg'),
    data = {
       ticket_1: $(this).find('input[name="event-ticket-1"]:checked').parents('.select-item').find('input[name="qty-1"]').val(),
       ticket_2: $(this).find('input[name="event-ticket-1"]:checked').parents('.select-item').find('input[name="qty-2"]').val(),
       ticket_3: $(this).find('input[name="event-ticket-1"]:checked').parents('.select-item').find('input[name="qty-3"]').val(),
       name: $(this).find('input[name="name"]').val(),
       email: $(this).find('input[name="email"]').val()
    }

   if( data.ticket_1 == undefined ) {
      data.ticket_1 = 0;
   }

   if( data.ticket_2 == undefined ) {
      data.ticket_2 = 0;
   }

   if( data.ticket_3 == undefined ) {
      data.ticket_3 = 0;
   }

   if ( validateEmail(data.email) ) {
      $.ajax({
         type: "POST",
         url: $(this).attr('action'),
         data: data,
         success: function() {
            success_msg.fadeIn(500);
            error_msg.fadeOut(500);
         }
      });
   } else {
      error_msg.fadeIn(500);
      success_msg.fadeOut(500);
   }

return false;

});


/******************** TICKET BOOKING FORM 2 ********************/
$("#ticket-booking-2").on('submit', function(e) {
   e.preventDefault();
   var success_msg = $(this).find('.success-msg'),
       error_msg = $(this).find('.error-msg'),
       data = $(this).serialize();

   if (validateEmail( $(this).find('input[name="email"]').val() )) {
      $.ajax({
         type: "POST",
         url: $(this).attr('action'),
         data: data,
         success: function() {
            success_msg.fadeIn(1000);
            error_msg.fadeOut(500);
         }
      });
   } else {
      error_msg.fadeIn(1000);
      success_msg.fadeOut(500);
   }

return false;
});


/******************** RESERVATION FORM ********************/
if( $('#reservation-date') !== null ) {
   $('#reservation-date').datetimepicker({
      timepicker: false,
      format: 'Y-m-d'
   });
}

if( $('#reservation-time') !== null ) {
   $('#reservation-time').datetimepicker({
      datepicker: false,
      format: 'h:i A'
   });
}

$("#reservation form").on('submit', function(e) {
   e.preventDefault();
   var success_msg = $(this).find('.success-msg'),
       error_msg = $(this).find('.error-msg'),
       data = $(this).serialize();

   if (validateEmail( $(this).find('input[name="email"]').val() )) {
      $.ajax({
         type: "POST",
         url: $(this).attr('action'),
         data: data,
         success: function() {
            success_msg.fadeIn(1000);
            error_msg.fadeOut(500);
         }
      });
   } else {
      error_msg.fadeIn(1000);
      success_msg.fadeOut(500);
   }

return false;
});


/******************** ELEARNING FORM ********************/
$(".elearning-request").on('submit', function(e) {
   e.preventDefault();
   var success_msg = $('.submit-form-popup').find('.success'),
       error_msg = $('.submit-form-popup').find('.failed'),
       data = $(this).serialize();

   if (validateEmail( $(this).find('input[name="email"]').val() )) {
      $.ajax({
         type: "POST",
         url: $(this).attr('action'),
         data: data,
         success: function() {
            success_msg.parent().fadeIn(300);
            success_msg.fadeIn(300);
         }
      });
   } else {
      error_msg.parent().fadeIn(300);
      error_msg.fadeIn(300);
   }

return false;
});


$('.submit-form-popup').on('click', function(event) {
   $(this).fadeOut(300);
});



/******************** FIT VIDEO WIDTH ********************/
$('.video-player').fitVids();


/******************** PHOTOGRAPHY PORTFOLIO ********************/
$('#photography-portfolio').mixItUp();


/******************** COUNTDOWN TIMER ********************/
$('#launch-timer').countdown('2016/02/21', function(event) {
   $(this).html(event.strftime('<ul><li><span>%-D</span> day%!D</li><li><span>%H</span> hour%!H</li><li><span>%M</span> minute%!M</li></ul>'));
});


/******************** FOOD ORDER PROCESS ********************/
var foodItems = new Array;

$('#food-order .order-list').on('click', '.remove', function() {

   var index = $(this).parent().index();
   var removeValue = foodItems[index]['price'] * foodItems[index]['quantity'];
   totalPrice -= removeValue;
   $("#payment-amount").html(totalPrice);
   foodItems.splice(index, 1);
   $(this).closest('li').fadeOut(200, function(){ $(this).remove(); });
});

// Global Variable
var totalPrice = 0,
    addOrDonotadd = 1;

$('.order-select-menu').on('click', 'button', function(event) {
   event.preventDefault();
   /* Act on the event */
   var foodName = $('.order-select-menu select').val(),
       foodPrice = parseInt( $('.order-select-menu select').find(':selected').data('price') ),
       foodQuantity = parseInt( $('.order-select-menu input[name="food-quantity"]').val() ),
       foodItemsTotal = parseInt($("#payment-amount").html()),
       foodQuantityVal = $('.order-select-menu input[name="food-quantity"]').val(),// check the Quantity ( Is it greater than 1 or not )

       orderToAdd = '<li>'
            + '<span class="food-name">' + foodName + '</span> <span class="food-quantity">(' + foodQuantity + ')</span>'
            + '<span class="remove" data-toggle="tooltip" data-placement="top" title="Remove">x</span>'
            + '</li>';

      // check the Quantity ( Is it greater than 1 or not )
      if (foodQuantityVal < 1 || foodQuantityVal === '') {
        $(this).parents('.food-order').find('.form-message').html('Quantity must be greater than 0');
        return false;
      }

      // The total Price this one can be accessed from any where in this file
      totalPrice += foodPrice * foodQuantity;
      console.log('totalPrice = ' + totalPrice);

      // Check if the food name in order list is the same or not
      $(this).parent().parent().find('li').each(function () {
        if($(this).find('.food-name').text() === foodName) {
          foodQuantity = foodQuantity + parseInt($(this).find('.food-quantity').text().replace('(', '').replace(')', ''));
          $(this).find('.food-quantity').text('(' + foodQuantity + ')');
          addOrDonotadd = 0;
        }
      });
      if (!$(this).parent().parent().find('li').length) {
        addOrDonotadd = 1;
      }

      if (addOrDonotadd === 1) {
        $('#food-order .order-list').prepend(orderToAdd);
      }

      $("#payment-amount").html(totalPrice);

      foodItems.unshift({
         name: foodName,
         price: foodPrice,
         quantity: foodQuantity
      });

});

$('.order-select-menu select').change(function() {
  addOrDonotadd = 1;
});


$(".food-order").on('submit', function () {

  var el = $(this),
    orderListItems = '',
    formAction = el.attr('action'),
    formMessage = el.find('.form-message'),
    orderList = el.find('.order-list li').length,
    radioFoodPickup = el.find('#radio-food-pickup'),
    radioFoodDelivery = el.find('#radio-food-delivery'),
    orderListStatus,
    orderName = el.find('#order-name').val(),
    orderEmail = el.find('#order-email').val(),
    valid = validateEmail(orderEmail),
    orderTel = el.find('#order-tel').val(),
    filterTel = /^[0-9-+]+$/,
    PaymentMethodSelect = el.find('#order-payment-method').val(),
    orderMsg = el.find('#order-msg').val();


  $('#order-list-items').remove();
  $('#order-list-total-price').remove();
  $('#order-list-status').remove();

  if (orderList < 1) {
    formMessage.html('Please choose food and the quantity then click on add button');
    return false;
  }

  if (radioFoodPickup.is(':checked') || radioFoodDelivery.is(':checked') ) {
    if (radioFoodPickup.is(':checked')) {
      orderListStatus = 'Pickup';
    } else {
      orderListStatus = 'Delivery';
    }
  } else {
    formMessage.html('Please choose Pickup or Delivery');
    return false;
  }

  if (orderName === '') {
    formMessage.html('Your name is required');
    return false;
  }

  if (orderEmail === '') {
    formMessage.html('Your Email address is required');
    return false;
  }
  if (!valid) {
    formMessage.html('Please add valid Email address');
    return false;
  }

  if (orderTel === '') {
    formMessage.html('Your Phone number is required');
    return false;
  }
  if (!filterTel.test(orderTel)) {
    formMessage.html('Please add valid Phone number');
    return false;
  }

  if (PaymentMethodSelect === null) {
    formMessage.html('Please choose your Payment Method');
    return false;
  }

  if (orderMsg === '') {
    formMessage.html('Your message is required');
    return false;
  }

  el.find('.order-list li').each(function () {
    orderListItems += ' ' + $('> .food-name', this).text() + $('> .food-quantity', this).text();
  });
  $(this).append('<textarea id="order-list-items" name="order_list_items" style="display:none;">' + orderListItems + '</textarea>');

  $(this).append('<input type="hidden" id="order-list-total-price" name="order_list_total_price" readonly>');
  $('#order-list-total-price').val(totalPrice);

  $(this).append('<input type="hidden" id="order-list-status" name="order_list_status" readonly>');
  $('#order-list-status').val(orderListStatus);

  jQuery.post(formAction, el.serialize(), function (data) {

    $('.form-message').html(data);

    if (data.match('success-message') !== null) {
      el.find('#order-name').val(''),
      el.find('#order-email').val(''),
      el.find('#order-tel').val(''),
      el.find('#order-payment-method').val(''),
      el.find('#order-msg').val('');
      el.find('.order-list li').each(function () {
        $(this).remove();
      });
      $('#order-list-items').remove();
      $('#order-list-total-price').remove();
      $('#order-list-status').remove();
      totalPrice = 0;
      el.find("#payment-amount").html('0');
    }

  });

  return false;

});

});