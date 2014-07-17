(function() {
  $.webshims.setOptions("basePath", "/assets/webshims/shims/");

  $.webshims.polyfill();

  $.webshims.setOptions('forms-ext', {
    datepicker: {
      dateFormat: 'dd/mm/yy'
    }
  });

  $(document).on("page:load", function() {
    return $(this).updatePolyfill();
  });

}).call(this);
