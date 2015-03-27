/*
 * jQuery alt-checkbox plugin
 * Version 2.0.0
 * http://alt-checkbox.starikovs.com
 *
 * jQuery Javascript plugin which helps to style checkbox with custom css. It uses icon fonts and it's scaled well.
 *
 * Copyright (c) 2015 alt-checkbox.starikovs.com
 * Licensed under the MIT and GPL licenses.
 */

(function($) {
    var methods = {
        init: function (options) {
            var settings = $.extend({
                iconClass: "fa-check",
                sizeClass: "medium",
                customClass: "",
                labelSameSize: true,
                outlineUnchecked: true
            }, options);

            return this.hide().each(function() {
                var cb = $(this),
                    data = cb.data("alt-checkbox");

                if (data) {
                    return;
                }

                var alt = $("<a href=\"#\" class=\"alt-checkbox\">")
                        .addClass(settings.iconClass)
                        .addClass(settings.sizeClass)
                        .addClass(settings.customClass)
                        .addClass(settings.outlineUnchecked ? "outline-unchecked" : "")
                        .insertBefore(cb),
                    cbId = cb.attr("id"),
                    cbLabel = $("[for='" + cbId + "']");

                if (settings.labelSameSize) {
                    cbLabel.addClass("alt-checkbox-label").addClass(settings.sizeClass);
                }

                cb.data("alt-checkbox", {
                    alt: alt,
                    label: cbLabel,
                    labelSameSize: settings.labelSameSize,
                    sizeClass: settings.sizeClass
                });

                alt.bind("click.alt-checkbox", function(e) {
                    var alt = $(this);

                    if (alt.hasClass("checked")) {
                        alt.removeClass("checked");
                        cb.prop("checked", false);
                    } else {
                        alt.addClass("checked");
                        cb.prop("checked", true);
                    }

                    e.preventDefault();
                }).bind("keyup.alt-checkbox", function(e) {
                    if (e.keyCode === 32) {
                        $(this).click();

                        e.preventDefault();
                        e.stopPropagation();
                    }
                }).bind("keydown.alt-checkbox", function(e) {
                    if (e.keyCode === 32) {
                        e.preventDefault();
                        e.stopPropagation();
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
                    data = cb.data("alt-checkbox");

                if (!data) {
                    return;
                }

                data.alt.unbind(".alt-checkbox").remove();
                cb.unbind(".alt-checkbox");

                if (data.labelSameSize) {
                    data.label.removeClass(data.sizeClass).removeClass("alt-checkbox-label");
                }

                cb.removeData("alt-checkbox");
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

