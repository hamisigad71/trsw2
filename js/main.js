"use strict";
/**
 * General Custom JS Functions
 *
 * @author     Themovation <themovation@gmail.com>
 * @copyright  2014 Themovation INC.
 * @license    http://themeforest.net/licenses/regular
 * @version    1.5
 */
function UpdateQueryString(key, value, url) {
    if (!url) url = window.location.href; var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"), hash; if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3'); else {
                hash = url.split('#'); url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, ''); if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1]; return url
        }
    } else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?'; hash = url.split('#'); url = hash[0] + separator + key + '=' + value; if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1]; return url
        } else return url
    }
}
function themo_support_mobile_navigation() {
    if (Modernizr.mq('(max-width: 767px)')) { jQuery("li.dropdown .dropdown-toggle").attr("data-toggle", "dropdown"); jQuery("li.dropdown .dropdown-toggle").attr("data-target", "#") }
    if (Modernizr.mq('(min-width:768px)')) { jQuery("li.dropdown .dropdown-toggle").removeAttr("data-toggle", "dropdown"); jQuery("li.dropdown .dropdown-toggle").removeAttr("data-target", "#") }
}
function themo_is_touch_device(checkScreenSize) {
    if (typeof checkScreenSize === "undefined" || checkScreenSize === null) { checkScreenSize = !0 }
    var deviceAgent = navigator.userAgent.toLowerCase(); var isTouch = (deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i)); if (checkScreenSize) { var isMobileSize = Modernizr.mq('(max-width:767px)') } else { var isMobileSize = !1 }
    if (isTouch || isMobileSize) { return !0 }
    return !1
}
function themo_no_transparent_header_for_mobile(isTouch) { if (jQuery(".navbar[data-transparent-header]").length) { jQuery('.navbar').attr("data-transparent-header", "true") } }
function themo_start_scrollup() { jQuery.scrollUp({ animationSpeed: 200, animation: 'fade', scrollSpeed: 500, scrollImg: { active: !0, type: 'background', src: '../../images/top.png' } }) }
var nice = !1; (function () {
    if (!window.console) { window.console = {} }
    var m = ["log", "info", "warn", "error", "debug", "trace", "dir", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd", "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"]; for (var i = 0; i < m.length; i++) { if (!window.console[m[i]]) { window.console[m[i]] = function () { } } }
})(); jQuery(document).ready(function ($) {
    "use strict"; if (jQuery(".datepick").length) { }
    if (jQuery("#main-flex-slider")[0]) { setTimeout(function () { jQuery('body').addClass('loaded') }, 10000) } else { jQuery('body').addClass('loaded') }
    if (themo_is_touch_device()) { jQuery('body').addClass('th-touch') }
    themo_support_mobile_navigation($); jQuery("body").on("click", "ul.dropdown-menu .dropdown-submenu > a[data-toggle='dropdown']", function (event) { event.preventDefault(); event.stopPropagation(); jQuery(this).parents('ul.dropdown-menu .dropdown-submenu').toggleClass('open') }); jQuery('.navbar-collapse').on("click", 'a:not(.dropdown-toggle)', function () { jQuery('.navbar-collapse').css('height', '0'); jQuery('.navbar-collapse').removeClass('in') }); function scroll_if_anchor(href) {
        href = typeof (href) == "string" ? href : jQuery(this).attr("href"); var fromTop = 0; if (jQuery("header").hasClass("headhesive--clone")) { fromTop = jQuery(".headhesive--clone").height() }
        if (href.indexOf("#") == 0) { var $target = jQuery(href); if ($target.length) { jQuery('html, body').animate({ scrollTop: $target.offset().top - fromTop }, 500, 'linear', function () { }); if (history && "pushState" in history) { history.pushState({}, document.title, window.location.pathname + href); return !1 } } }
    }
    scroll_if_anchor(window.location.hash); jQuery(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addFilter('frontend/handlers/menu_anchor/scroll_top_distance', function (scrollTop) {
            var th_offset = 0; if (jQuery("header:visible:last").length) { var header_position_type = jQuery("header:visible:last").css('position'); if (header_position_type === 'absolute' || header_position_type === 'fixed') { th_offset = jQuery("header:visible:last").height() } }
            console.log('ELEM HOOK - Scroll offset ' + th_offset); return scrollTop - th_offset
        })
    })
}); jQuery(window).on('load', function ($) { "use strict"; var isTouch = themo_is_touch_device(); themo_no_transparent_header_for_mobile(isTouch); themo_start_scrollup(); jQuery('a[data-filter="*"]').trigger("click") }); jQuery(window).resize(function ($) { "use strict"; var isTouch = themo_is_touch_device(); themo_support_mobile_navigation(); themo_no_transparent_header_for_mobile(isTouch) })


jQuery(function (o) { o(".woocommerce-ordering").on("change", "select.orderby", function () { o(this).closest("form").trigger("submit") }), o("input.qty:not(.product-quantity input.qty)").each(function () { var e = parseFloat(o(this).attr("min")); e >= 0 && parseFloat(o(this).val()) < e && o(this).val(e) }); var e = "store_notice" + (o(".woocommerce-store-notice").data("noticeId") || ""); "hidden" === Cookies.get(e) ? o(".woocommerce-store-notice").hide() : o(".woocommerce-store-notice").show(), o(".woocommerce-store-notice__dismiss-link").on("click", function (s) { Cookies.set(e, "hidden", { path: "/" }), o(".woocommerce-store-notice").hide(), s.preventDefault() }), o(".woocommerce-input-wrapper span.description").length && o(document.body).on("click", function () { o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250) }), o(".woocommerce-input-wrapper").on("click", function (o) { o.stopPropagation() }), o(".woocommerce-input-wrapper :input").on("keydown", function (e) { var s = o(this).parent().find("span.description"); if (27 === e.which && s.length && s.is(":visible")) return s.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1 }).on("click focus", function () { var e = o(this).parent(), s = e.find("span.description"); e.addClass("currentTarget"), o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), s.length && s.is(":hidden") && s.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget") }), o.scroll_to_notices = function (e) { e.length && o("html, body").animate({ scrollTop: e.offset().top - 100 }, 1e3) }, o('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'), o(".woocommerce form input").filter(":password").parent("span").addClass("password-input"), o(".password-input").append('<span class="show-password-input"></span>'), o(".show-password-input").on("click", function () { o(this).hasClass("display-password") ? o(this).removeClass("display-password") : o(this).addClass("display-password"), o(this).hasClass("display-password") ? o(this).siblings(['input[type="password"]']).prop("type", "text") : o(this).siblings('input[type="text"]').prop("type", "password") }), o("a.coming-soon-footer-banner-dismiss").on("click", function (e) { var s = o(e.target); o.ajax({ type: "post", url: s.data("rest-url"), data: { meta: { woocommerce_coming_soon_banner_dismissed: "yes" } }, beforeSend: function (o) { o.setRequestHeader("X-WP-Nonce", s.data("rest-nonce")) }, complete: function () { o("#coming-soon-footer-banner").hide() } }) }) });