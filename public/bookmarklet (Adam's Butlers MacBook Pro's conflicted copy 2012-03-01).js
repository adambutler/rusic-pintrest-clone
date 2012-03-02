/**
 * Basic bookmarklet template.
 *
 * Change the `iframeSrc` variable to point to your space's new idea
 * page. You can adjust the iframe styles and position using the
 * `iframeStyle` variable.
 *
 * For turning this script into a bookmarklet, you should probably take
 * a look at https://gist.github.com/1856012.
 */
 
(function() {

  // This is the page that will display inside the iframe.
  var iframeSrc = 'http://360k.rusic.com/pintrest-clone/ideas/new';

  // Styles for the iframe.
  var iframeStyle = 'position: fixed; z-index: 999999; width: 800px; height: 600px; right: 0; top: 0; border: 5px solid #b33732; background-color: white;';

  var images = [].slice.call(document.querySelectorAll('img'));

  images = images.sort(function(imageA, imageB) {
    if ((imageA.height * imageA.width) < (imageB.height * imageB.width)) {
      return 1;
    } else if ((imageA.height * imageA.width) > (imageB.height * imageB.width)) {
      return -1;
    } else {
      return 0;
    }
  });

  var pageImages = images.map(function(img) { return encodeURIComponent(img.src); });

  // Create an iframe element and set some attributes.
  var iframe = document.createElement('iframe');

  // Pass the current url across to the space.
  iframe.setAttribute('src', iframeSrc + '?images[]=' + pageImages.slice(0, 12).join('&images[]='));
  
  iframe.setAttribute('id', 'rusic-modal');
  iframe.setAttribute('style', iframeStyle);

  // Inject the iframe into the host page.
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(iframe);

}).call(this);
