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
	var iframeSrc = 'http://360k.rusic.dev/pintrest-clone/ideas/new';
	
	// Styles for the iframe.
	var iframeStyle = 'position: fixed; z-index: 999999; width: 760px; height: 590px; right: 20px; top: 20px; border: 5px solid #b33732; background-color: white; scrolling: "no"; -moz-box-shadow: 0px 0px 20px #000000; -webkit-box-shadow: 0px 0px 20px #000000; box-shadow: 0px 0px 20px #000000;';
	var closebtnStyle = "cursor:pointer; position: fixed;right: 773px;top: 8px;z-index: 999999;border-radius:40px;width:26px;height:26px;background-color: #f5f5f5;background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);background-image: linear-gradient(top, #ffffff, #e6e6e6);background-repeat: repeat-x;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);border-color: #e6e6e6 #e6e6e6 #bfbfbf;border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);border: 1px solid #ccc;border-bottom-color: #bbb;-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);line-height:26px;font-size:12px;text-align:center;font-family: Arial, sans-serif;font-weight: bold;color: #ccc;text-shadow: 1px 1px 0px #FFF;"

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
	
	closebtn.setAttribute('id', 'rusic-modal-close');
	closebtn.innerHTML = 'x';
	closebtn.setAttribute('style', closebtnStyle);
	closebtn.setAttribute('onclick', "document.body.removeChild(document.getElementById('rusic-modal')); document.body.removeChild(document.getElementById('rusic-modal-close'));");
	
	// Inject the iframe into the host page.
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(iframe);
	body.appendChild(closebtn);

}).call(this);


/*

javascript:((function()%7Bvar%20a=%22{{ space | link }}/ideas/new%22,b='position:%20fixed;%20z-index:%20999999;%20width:%20760px;%20height:%20590px;%20right:%2020px;%20top:%2020px;%20border:%205px%20solid%20#b33732;%20background-color:%20white;%20scrolling:%20%22no%22;%20-moz-box-shadow:%200px%200px%2020px%20#000000;%20-webkit-box-shadow:%200px%200px%2020px%20#000000;%20box-shadow:%200px%200px%2020px%20#000000;',c=%22cursor:pointer;%20position:%20fixed;right:%20773px;top:%208px;z-index:%20999999;border-radius:40px;width:26px;height:26px;background-color:%20#f5f5f5;background-image:%20-moz-linear-gradient(top,%20#ffffff,%20#e6e6e6);background-image:%20-ms-linear-gradient(top,%20#ffffff,%20#e6e6e6);background-image:%20-webkit-gradient(linear,%200%200,%200%20100%25,%20from(#ffffff),%20to(#e6e6e6));background-image:%20-webkit-linear-gradient(top,%20#ffffff,%20#e6e6e6);background-image:%20-o-linear-gradient(top,%20#ffffff,%20#e6e6e6);background-image:%20linear-gradient(top,%20#ffffff,%20#e6e6e6);background-repeat:%20repeat-x;filter:%20progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',%20endColorstr='#e6e6e6',%20GradientType=0);border-color:%20#e6e6e6%20#e6e6e6%20#bfbfbf;border-color:%20rgba(0,%200,%200,%200.1)%20rgba(0,%200,%200,%200.1)%20rgba(0,%200,%200,%200.25);filter:%20progid:DXImageTransform.Microsoft.gradient(enabled%20=%20false);border:%201px%20solid%20#ccc;border-bottom-color:%20#bbb;-webkit-box-shadow:%20inset%200%201px%200%20rgba(255,%20255,%20255,%200.2),%200%201px%202px%20rgba(0,%200,%200,%200.05);-moz-box-shadow:%20inset%200%201px%200%20rgba(255,%20255,%20255,%200.2),%200%201px%202px%20rgba(0,%200,%200,%200.05);box-shadow:%20inset%200%201px%200%20rgba(255,%20255,%20255,%200.2),%200%201px%202px%20rgba(0,%200,%200,%200.05);filter:%20progid:DXImageTransform.Microsoft.gradient(enabled%20=%20false);line-height:26px;font-size:12px;text-align:center;font-family:%20Arial,%20sans-serif;font-weight:%20bold;color:%20#ccc;text-shadow:%201px%201px%200px%20#FFF;%22,d=%5B%5D.slice.call(document.querySelectorAll(%22img%22));d=d.sort(function(a,b)%7Breturn%20a.height*a.width%3Cb.height*b.width?1:a.height*a.width%3Eb.height*b.width?-1:0%7D);var%20e=d.map(function(a)%7Breturn%20encodeURIComponent(a.src)%7D),f=document.createElement(%22iframe%22),g=document.createElement(%22div%22);f.setAttribute(%22src%22,a+%22?images%5B%5D=%22+e.slice(0,9).join(%22&images%5B%5D=%22)),f.setAttribute(%22id%22,%22rusic-modal%22),f.setAttribute(%22style%22,b),g.setAttribute(%22id%22,%22rusic-modal-close%22),g.innerHTML=%22x%22,g.setAttribute(%22style%22,c),g.setAttribute(%22onclick%22,%22document.body.removeChild(document.getElementById('rusic-modal'));%20document.body.removeChild(document.getElementById('rusic-modal-close'));%22);var%20h=document.getElementsByTagName(%22body%22)%5B0%5D;h.appendChild(f),h.appendChild(g)%7D)).call(this);

*/