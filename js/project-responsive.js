function menubutton(resizeLimit) {
	// Handle default parameter
	resizeLimit = typeof resizeLimit !== 'undefined' ? resizeLimit : 800;
	if ($(window).width() <= resizeLimit) {
		$('.menu-icon').show()
		$('.dropdown-menu').hide()
		$('.navbar').hide()
	} else if ($(window).width() > resizeLimit) {
		$('.menu-icon').hide()
		$('.dropdown-menu').hide()
		$('.navbar').show()
}};


function resizeimage(fullmargin, smallmargin, div, resizeLimit) {
	resizeLimit = typeof resizeLimit !== 'undefined' ? resizeLimit : 800;
	$(div).each(function() {
	if ($(this).width() <= parseInt($(this).css("min-width"))) {
			$(this).css({"float":"none", "margin":smallmargin});
		} else {
			$(this).css({"float":"left", "margin":fullmargin});
		}
	});
};


function toppage() {
	var header_size = $('header').offset().top + $('header').outerHeight();
	$('.main-wrapper').css({'padding-top': header_size});
}


function sliderimg() {
	$('.slider-img').each(function(i, obj) {
			obj.width = $(window).width() * 0.6;
			obj.height = obj.width * 0.666;
		});
}


function sliderfix() {
	$('#featured').unwrap();
	$('.timer').remove();
	$('.orbit-caption').remove();
	$('.slider-nav').remove()
	$('#featured').orbit({
		timer:false, 
		captions:false
	});
}

