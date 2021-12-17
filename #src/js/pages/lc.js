@@include('_calendar.js');

function dropDown(e) {
	$(e).parent().addClass('active');
	$(e).addClass('active');
	$(e).siblings('.item-content').slideDown();
}
function dropDown2() {
	$('.item-row  ').removeClass('active');
	$('.item-content ').slideUp();
	$('.list-body-item ').removeClass('active');
}


function closeDropDown(e) {
	$(e).parent().parent().parent().parent().removeClass('active');
	$(e).parent().parent().parent().slideUp();
	$(e).parent().parent().parent().siblings().removeClass('active');
}

function slide(e) {
	if($(e).hasClass('active')) {
		dropDown2();
	} else {
		dropDown2();
		dropDown(e);
	}
}