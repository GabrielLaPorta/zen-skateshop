$(window).scroll(function(){
	if ($(window).scrollTop() >= 300) {
		$('#menu').addClass('fixed-header');
	}
	else {
		$('#menu').removeClass('fixed-header');
	}
});