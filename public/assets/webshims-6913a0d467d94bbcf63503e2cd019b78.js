(function() {
  $.webshims.setOptions("basePath", "/assets/webshims/shims/");

  $.webshim.activeLang('en-AU');

  $.webshims.setOptions('forms-ext', {
    datepicker: {
      dateFormat: 'dd/mm/yy'
    },
    widgets: {
      startView: 2
    }
  });

  $.webshims.polyfill();

  $(document).on("page:load", function() {
    return $(this).updatePolyfill();
  });

}).call(this);
