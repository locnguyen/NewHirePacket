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

var Signify = function () {
    return {
        init: function() {
            var template = document.querySelector('#signifyTmpl-2');
            var shadowHost = document.querySelector('.signify');
            var shadowRoot = shadowHost.webkitCreateShadowRoot();
            var content = template.content.cloneNode(true);
            shadowRoot.appendChild(content);
        }
    }
}();