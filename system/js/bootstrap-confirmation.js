/*!
 * Bootstrap Confirmation 2.1.2
 * Copyright 2013 Nimit Suwannagate <ethaizone@hotmail.com>
 * Copyright 2014 Damien "Mistic" Sorel <http://www.strangeplanet.fr>
 * Licensed under the Apache License, Version 2.0 (the "License")
 */
! function(a) {
    "use strict";

    function b(a) {
        for (var b = window, c = a.split("."), d = c.pop(), e = 0, f = c.length; f > e; e++) b = b[c[e]];
        return function() {
            b[d].call(this)
        }
    }
    if (!a.fn.popover) throw new Error("Confirmation requires popover.js");
    var c = function(b, c) {
        this.init("confirmation", b, c);
        var d = this;
        this.options.selector || (this.$element.attr("href") && (this.options.href = this.$element.attr("href"), this.$element.removeAttr("href"), this.$element.attr("target") && (this.options.target = this.$element.attr("target"))), this.$element.on(d.options.trigger, function(a, b) {
            b || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation())
        }), this.$element.on("confirmed.bs.confirmation", function() {
            a(this).trigger(d.options.trigger, [!0])
        }), this.$element.on("show.bs.confirmation", function() {
            d.options.singleton && a(d.options._selector).not(a(this)).filter(function() {
                return void 0 !== a(this).data("bs.confirmation")
            }).confirmation("hide")
        })), this.options._isDelegate || (this.eventBody = !1, this.uid = this.$element[0].id || this.getUID("group_"), this.$element.on("shown.bs.confirmation", function() {
            if (d.options.popout && !d.eventBody) {
                {
                    a(this)
                }
                d.eventBody = a("body").on("click.bs.confirmation." + d.uid, function(b) {
                    a(d.options._selector).is(b.target) || (a(d.options._selector).filter(function() {
                        return void 0 !== a(this).data("bs.confirmation")
                    }).confirmation("hide"), a("body").off("click.bs." + d.uid), d.eventBody = !1)
                })
            }
        }))
    };
    c.DEFAULTS = a.extend({}, a.fn.popover.Constructor.DEFAULTS, {
        placement: "top",
        title: "Are you sure?",
        html: !0,
        rel: !1,
        popout: !1,
        singleton: !1,
        onConfirm: a.noop,
        onCancel: a.noop,
        btnOkClass: "btn-xs btn-primary",
        btnOkIcon: "glyphicon glyphicon-ok",
        btnOkLabel: "Yes",
        btnCancelClass: "btn-xs btn-default",
        btnCancelIcon: "glyphicon glyphicon-remove",
        btnCancelLabel: "No",
        template: '<div class="popover confirmation"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content text-center"><div class="btn-group"><a class="btn" data-apply="confirmation"></a><a class="btn" data-dismiss="confirmation"></a></div></div></div>'
    }), c.prototype = a.extend({}, a.fn.popover.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.init = function(b, c, d) {
        a.fn.popover.Constructor.prototype.init.call(this, b, c, d), this.options._isDelegate = !1, d.selector ? this.options._selector = this._options._selector = d._root_selector + " " + d.selector : d._selector ? (this.options._selector = d._selector, this.options._isDelegate = !0) : this.options._selector = d._root_selector
    }, c.prototype.setContent = function() {
        var b = this,
            c = this.tip(),
            d = this.options;
        c.find(".popover-title")[d.html ? "html" : "text"](this.getTitle()), c.find('[data-apply="confirmation"]').addClass(d.btnOkClass).html(d.btnOkLabel).prepend(a("<i></i>").addClass(d.btnOkIcon), " ").off("click").one("click", function() {
            b.getOnConfirm.call(b).call(b.$element), b.$element.trigger("confirmed.bs.confirmation"), b.leave(b)
        }), d.href && c.find('[data-apply="confirmation"]').attr({
            rel: d.href,
        }), c.find('[data-dismiss="confirmation"]').addClass(d.btnCancelClass).html(d.btnCancelLabel).prepend(a("<i></i>").addClass(d.btnCancelIcon), " ").off("click").one("click", function() {
            b.getOnCancel.call(b).call(b.$element), b.$element.trigger("canceled.bs.confirmation"), b.leave(b)
        }), c.removeClass("fade top bottom left right in"), c.find(".popover-title").html() || c.find(".popover-title").hide()
    }, c.prototype.getOnConfirm = function() {
        return this.$element.attr("data-on-confirm") ? b(this.$element.attr("data-on-confirm")) : this.options.onConfirm
    }, c.prototype.getOnCancel = function() {
        return this.$element.attr("data-on-cancel") ? b(this.$element.attr("data-on-cancel")) : this.options.onCancel
    };
    var d = a.fn.confirmation;
    a.fn.confirmation = function(b) {
        var d = "object" == typeof b && b || {};
        return d._root_selector = this.selector, this.each(function() {
            var e = a(this),
                f = e.data("bs.confirmation");
            (f || "destroy" != b) && (f || e.data("bs.confirmation", f = new c(this, d)), "string" == typeof b && f[b]())
        })
    }, a.fn.confirmation.Constructor = c, a.fn.confirmation.noConflict = function() {
        return a.fn.confirmation = d, this
    }
}(jQuery);