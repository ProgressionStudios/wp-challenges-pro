(function ($) {
    $(document).delegate(".toggle-icon-pro", "click", function () {
        $(this).parents(".title-accordion-pro").parents().toggleClass("hide");
    });
})(jQuery);
