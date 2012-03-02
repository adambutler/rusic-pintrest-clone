$(document).ready(function() {
	$('.sharrre-container #twitter').sharrre({
		share: {
			twitter: true
		},
		template: '<a class="box" href="#"><div class="count" href="#">{total}</div><div class="share"><span></span>Tweet</div></a>',
		enableHover: false,
		enableTracking: true,
		buttons: { twitter: {via: '_JulienH'}},
		click: function(api, options){
			api.simulateClick();
			api.openPopup('twitter');
		}
	});
	$('.sharrre-container #facebook').sharrre({
		share: {
			facebook: true
		},
		template: '<a class="box" href="#"><div class="count" href="#">{total}</div><div class="share"><span></span>Tweet</div></a>',
		enableHover: false,
		enableTracking: true,
		click: function(api, options){
			api.simulateClick();
			api.openPopup('facebook');
		}
	});
	$('.sharrre-container #googleplus').sharrre({
		share: {
			googlePlus: true
		},
		template: '<a class="box" href="#"><div class="count" href="#">{total}</div><div class="share"><span></span>Tweet</div></a>',
		enableHover: false,
		enableTracking: true,
		click: function(api, options){
			api.simulateClick();
			api.openPopup('googlePlus');
		}
	});
});