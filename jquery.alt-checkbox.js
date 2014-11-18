/*
 * jQuery alt-checkbox plugin
 * Version 1.0
 * http://alt-checkbox.starikovs.com
 *
 * jQuery Javascript plugin which helps to style checkbox with custom css. It uses icon fonts and it's scaled well.
 *
 * Copyright (c) 2013 alt-checkbox.starikovs.com
 * Licensed under the MIT and GPL licenses.
 */

(function($) {
    var methods = {
        init: function (options) {
            var settings = $.extend({
                iconClass: "fa-check",
                sizeClass: "fa-2x",
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
                        .append(
                            $('<i>',{
                                'class': 'fa'
                            })
                            .addClass(settings.iconClass)
                            .addClass(settings.sizeClass)
                        )
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

                alt.on("click.alt-checkbox", function(event) {
                    event.preventDefault();

                    var alt = $(this),
                        isChecked = alt.hasClass('checked');
                    alt.toggleClass('checked', !isChecked );
                    cb
                    .prop("checked", !isChecked)
                    .change();
                }).on("keyup.alt-checkbox", function(event) {
                    if (event.keyCode === 32) {
                        $(this).click();
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }).on("keydown.alt-checkbox", function(event) {
                    if (event.keyCode === 32) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                });

                cb.on("change.alt-checkbox", function(e) {
                    alt.toggleClass('checked', $(this).prop('checked') );
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