(function() {
  jQuery(function() {
    var oTable;
    oTable = $('#containers').dataTable();
    return oTable.fnSort([[1, 'desc']]);
  });

}).call(this);
