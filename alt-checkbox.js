jQuery(function($) {
    $(".alt-checkbox").hide().each(function() {
        var cb = $(this),
            cbIcon = cb.attr("data-icon"),
            cbSize = cb.attr("data-size"),
            alt = $("<a href=\"#\" class=\"alt-checkbox-dress\">").addClass(cbSize).insertBefore(cb);

        alt.click(function(event) {
            var alt = $(this);
            if (alt.hasClass("checked")) {
                alt.removeClass("checked " + cbIcon);
                cb.prop("checked", false);
            } else {
                alt.addClass("checked " + cbIcon);
                cb.prop("checked", true);
            }
            //alert(checkbox.is(":checked"));
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

    /*var cb = $(".alt-checkbox").hide(),
        alt = $("<a href=\"#\" class=\"alt-checkbox-dress\">").insertBefore(cb);

*/
/*
    alt.click(function(event) {
        var alt = $(this);
        if (alt.hasClass("checked")) {
            alt.removeClass("checked " + cbIcon);
            cb.prop("checked", false);
        } else {
            alt.addClass("checked " + cbIcon);
            cb.prop("checked", true);
        }
        //alert(checkbox.is(":checked"));
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
    */
});