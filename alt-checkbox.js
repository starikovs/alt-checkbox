jQuery(function($) {
    $(".alt-checkbox").hide().each(function() {
        var cb = $(this),
            cbAltClass = cb.attr("data-alt-class"),
            alt = $("<a href=\"#\" class=\"alt-checkbox-dress\">").addClass(cbAltClass).insertBefore(cb);

        alt.click(function(event) {
            var alt = $(this);
            if (alt.hasClass("checked")) {
                alt.removeClass("checked");
                cb.prop("checked", false);
            } else {
                alt.addClass("checked");
                cb.prop("checked", true);
            }
            event.preventDefault();
        }).bind("keyup", function(event) {
            if (event.keyCode === 32) {
                $(this).click();
            }
        });

        cb.bind("change", function() {
            alt.click();
        });

        alt.addClass(cb.is(":checked") ? "checked" : "");
    });
});