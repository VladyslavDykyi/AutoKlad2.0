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


if ($(window).width() <= 768) {
	function mobDropMenu(e) {
		if($(e).hasClass('active')) {
			closeMenu();
		} else {
			closeMenu();
			dropMenu(e);
		}
	}
	function dropMenu(e) {
		$(e).addClass('active');
		$(e).siblings('.mob-drop-menu-cont').slideDown();
	}
	function closeMenu() {
		$('.mob-drop-menu').removeClass('active');
		$('.mob-drop-menu-cont').slideUp();
	}
	$(document).mouseup(function (e) {
		if (!$('.mob-drop-menu').is(e.target) // если клик был не по нашему блоку
			&& $('.mob-drop-menu').has(e.target).length === 0 &&
			!$('.mob-drop-menu-cont').is(e.target) // если клик был не по нашему блоку
			&& $('.mob-drop-menu-cont').has(e.target).length === 0) { // и не по его дочерним элементам
			$('.mob-drop-menu').removeClass('active');
			$('.mob-drop-menu-cont').slideUp();
		}
	});
}
