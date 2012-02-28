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
  var iframeStyle = 'position: fixed; z-index: 999999; width: 760px; height: 590px; right: 20px; top: 20px; border: 5px solid #b33732; background-color: white; scrolling: "no"; -moz-box-shadow: 0px 0px 20px #000000; -webkit-box-shadow: 0px 0px 20px #000000; box-shadow: 0px 0px 20px #000000;';
  var closebtnStyle = "position: fixed; right: 773px; top: 8px; z-index: 999999; border-radius:40px; width:26px; height:26px; background-color: #f5f5f5;background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);background-image: linear-gradient(top, #ffffff, #e6e6e6);background-repeat: repeat-x;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);border-color: #e6e6e6 #e6e6e6 #bfbfbf;border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);border: 1px solid #ccc;border-bottom-color: #bbb; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); filter: progid:DXImageTransform.Microsoft.gradient(enabled = false); line-height:26px; font-size:12px ; text-align:center; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333;"

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
  var closebtn = document.createElement('div');

  // Pass the current url across to the space.
  iframe.setAttribute('src', iframeSrc + '?images[]=' + pageImages.slice(0, 9).join('&images[]='));
  
  iframe.setAttribute('id', 'rusic-modal');
  iframe.setAttribute('style', iframeStyle);
  closebtn.innerHTML = 'x';
  closebtn.setAttribute('style', closebtnStyle);

  // Inject the iframe into the host page.
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(iframe);
  body.appendChild(closebtn);

}).call(this);
