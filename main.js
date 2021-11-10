$(document).ready(main);

var contador = 1;

function main () {
	$('.btn-menu').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenus').click(function(){
		$(this).children('.children').slideToggle();
	});
}