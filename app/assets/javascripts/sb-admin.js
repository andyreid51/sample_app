$(function() {

    $('#side-menu').metisMenu({
        toggle: false
    });

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
$(function() {
    $(window).bind("load resize", function() {
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.sidebar-collapse').addClass('collapse')
        } else {
            $('div.sidebar-collapse').removeClass('collapse')
        }
    })
})

//Datatable script
$(document).ready(function() {
    $('#users').dataTable();
} );

$('.datatable').dataTable({
  "sPaginationType": "bootstrap"
});


//datetimepicker script
$(function () {
    $('#datetimepicker10').datetimepicker({
        language: 'en-au',
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down"
        }
    });
});

$(function () {
    $('#datetimepicker1').datetimepicker({
        language: 'en-au',
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down"
        }
    });
});

$(function () {
    $('#datedevan').datetimepicker({
        language: 'en-au',
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down"
        }
    });
});