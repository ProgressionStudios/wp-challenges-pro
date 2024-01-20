(function ($) {
    $(document).delegate(".toggle-icon-pro, .hidden-editor", "click", function () {
        $(this).parents(".title-accordion-pro").parents().toggleClass("hide");
    });
})(jQuery);
