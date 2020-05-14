odoo.define('website.website', function (require) {
/* --- Locate the "[!]" string and show the alert banner --- */

if ($('h1:contains("[!]")').length>0 || $('table#cart_products:contains("[!]")').length>0) {
  $('.zynthian_alert_message').fadeIn(1000);
}

});