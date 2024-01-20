(function ($) {
    $(document).delegate(".title-accordion-pro", "click", function () {
        $(this).parent().toggleClass("hide");
    });
})(jQuery);
