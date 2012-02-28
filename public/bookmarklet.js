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
  var closebtnStyle = "position: fixed; right: 20px; top: 20px; z-index: 999999; border-radius:40px; width:26px; height:26px; background-color: #006dcc;background-image: -moz-linear-gradient(top, #0088cc, #0044cc);background-image: -ms-linear-gradient(top, #0088cc, #0044cc);background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0044cc));background-image: -webkit-linear-gradient(top, #0088cc, #0044cc);background-image: -o-linear-gradient(top, #0088cc, #0044cc);background-image: linear-gradient(top, #0088cc, #0044cc);background-repeat: repeat-x;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color: #0044cc #0044cc #002a80;border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false); line-height:26px; font-size:12px ; text-align:center; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #fff;"

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
