/*
 * jQuery.gravatar 1.0.1 (2009-01-08)
 *
 * Written by Zach Leatherman
 * http://zachleat.com
 *
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)
 *
 * Requires jQuery http://jquery.com (1.2.6 at time of release)
 * Requires https://github.com/blueimp/JavaScript-MD5
 */

+function($) {

  $.gravatar = function(emailAddress, overrides) {

    var options = $.extend({
      // By default, images are presented at 80px by 80px if no size parameter is supplied. You may request a specific image size, which will be dynamically delivered from Gravatar by using the `s=` or `size=` parameter and passing a single pixel dimension (since the images are square).
      // You may request images anywhere from 1px up to 2048px, however note that many users have lower resolution images, so requesting larger sizes may result in pixelation/low-quality images.
      // integer size: between 1 and 2048, default 80 (in pixels)
      size: '',

      // Gravatar allows users to self-rate their images so that they can indicate if an image is appropriate for a certain audience. By default, only 'G' rated images are displayed unless you indicate that you would like to see higher ratings
      // Rating: g (default), pg, r, x
      rating: '',

      // URL to define a default image. Can also be one of:
      // - 404
      // - mm (mystery-man)
      // - identicon
      // - monsterid
      // - wavatar
      // - retro
      // - blank
      image: 'mm',

      // If you're displaying Gravatars on a page that is being served over SSL (e.g. the page URL starts with HTTPS), then you'll want to serve your Gravatars via SSL as well, otherwise you'll get annoying security warnings in most browsers
      secure: true,

      // Support css on img element
      classes: ''
    }, overrides);

    var baseUrl = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';

    return $('<img src="' + baseUrl +
      md5(emailAddress) +
      '?' +
      (options.size ? 's=' + options.size + '&' : '') +
      (options.rating ? 'r=' + options.rating + '&' : '') +
      (options.image ? 'd=' + encodeURIComponent(options.image) : '') +
      '"' +
      (options.classes ? ' class="' + options.classes + '"' : '') +
      '>').bind('error', function()
      {
        $(this).remove();
      });
  };
}(jQuery);
