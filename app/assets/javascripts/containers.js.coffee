# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery ->
    oTable = $('#containers').dataTable()
    
    #sort by date
    oTable.fnSort( [ [1,'desc'] ] )
