# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$.webshims.setOptions("basePath", "/assets/webshims/shims/")
$.webshim.activeLang 'en-AU'
$.webshims.setOptions('forms-ext'
     datepicker: dateFormat: 'dd/mm/yy'
     widgets: startView: 2 )


$.webshims.polyfill()
 
$(document).on "page:load", ->
    $(this).updatePolyfill()
