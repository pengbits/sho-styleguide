var totalPages = $('.page-number').length;

$('.page-number').each(function(index){
	if (index === 0) {
		$(this).addClass('page-number--active').css('display', 'inline-flex');
	} else if (index < 3 || index === totalPages - 1) {
		$(this).css('display', 'inline-flex');
	}
})