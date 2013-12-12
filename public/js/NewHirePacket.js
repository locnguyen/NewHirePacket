$(document).foundation();

var Navigation = function () {
    return {
        init: function () {
            $('#forms-menu li a').on('click', function () {
                $('#main-content form').hide();
                var formToShow = $(this).data('form-id');
                $('#' + formToShow).fadeIn(250);
            });


            $('#toggle-forms-btn').on('click', function() {
               $('#welcome:visible').slideUp();
            });
        }
    }
}();