(function() {
  $.webshims.setOptions("basePath", "/assets/webshims/shims/");

  $.webshim.activeLang('en-AU');

  $.webshims.setOptions('forms-ext', {
    datepicker: {
      dateFormat: 'dd/mm/yy'
    }
  });

  $.webshims.polyfill();

  $(document).on("page:load", function() {
    return $(this).updatePolyfill();
  });

}).call(this);
