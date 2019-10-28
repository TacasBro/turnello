// BURGER MENU
$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});

// SCROLL TO ID
$(document).on('click', 'a[href^="#"]', function (e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top - 130;

  // animated top scrolling
  $('body, html').animate({ scrollTop: pos });
  if ($(".navbar-menu").hasClass("is-active")) {
    $(".navbar-menu").removeClass("is-active")
    $(".navbar-burger").removeClass("is-active");
  }
});

(function ($) {
  'use strict';

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  // Success function
  function done_func(response) {
      message.fadeIn().removeClass('is-danger').addClass('is-warning');
      message.text(response);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
      form.find('input:not([type="submit"]), textarea').val('');
  }

  // fail function
  function fail_func(data) {
      message.fadeIn().removeClass('is-warning').addClass('is-danger');
      message.text(data.responseText);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
  }
  
  form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();
      $.ajax({
          type: 'POST',
          url: form.attr('action'),
          data: form_data
      })
      .done(done_func)
      .fail(fail_func);
  });
  
})(jQuery);