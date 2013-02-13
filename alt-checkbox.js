(function($) {
    var settings = {
        uncheckedOutline: false
    };

    var methods = {
        init: function (options) {
            var settings = $.extend({
                outlineUnchecked: true
            }, options);

            return this.hide().each(function() {
                var cb = $(this);
                if (cb.prev(".alt-checkbox-dress").length > 0) {
                    return;
                }

                var cbAltClass = cb.attr("data-alt-class"),
                    alt = $("<a href=\"#\" class=\"alt-checkbox-dress\">")
                        .addClass(cbAltClass)
                        .addClass(settings.outlineUnchecked ? "outline-unchecked" : "")
                        .insertBefore(cb);

                alt.bind("click.alt-checkbox", function(event) {
                    var alt = $(this);
                    if (alt.hasClass("checked")) {
                        alt.removeClass("checked");
                        cb.prop("checked", false);
                    } else {
                        alt.addClass("checked");
                        cb.prop("checked", true);
                    }
                    event.preventDefault();
                }).bind("keyup.alt-checkbox", function(event) {
                    if (event.keyCode === 32) {
                        $(this).click();
                    }
                });

                cb.bind("change.alt-checkbox", function() {
                    alt.click();
                });

                alt.addClass(cb.is(":checked") ? "checked" : "");
            });
        },
        clear: function() {
            return this.each(function() {
                var cb = $(this),
                    alt = cb.prev(".alt-checkbox-dress");

                alt.unbind(".alt-checkbox").remove();
                cb.unbind(".alt-checkbox");
            }).show();
        }
    };

    $.fn.altCheckbox = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " +  method + " does not exist on jQuery.altCheckbox.");
        }
    };

})(jQuery);
