$(function () {
	var mixer = mixitup('.portfolio__galery', {
		"animation": {
			"duration": 708,
			"nudge": false,
			"reverseOut": true,
			"effects": "scale(0.01) translateX(-100%) translateY(-1%) translateZ(4px) rotateX(13deg) rotateY(8deg) rotateZ(8deg) stagger(48ms)"
		}
	});
});

$('.portfolio__link').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true,
	}
});

$('.reviews__video').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});



$('.btn__send').click(function () {
	if ($('ul.portfolio__galery').find('li')) {
		document.getElementsByClassName('portfolio__galery')[0].style.height = "765px";
		$(this).toggleClass('opnd_g');
		if ($(this).hasClass('opnd_g')) {
			document.getElementsByClassName('portfolio__galery')[0].style.height = "auto",
				$(this).html('Скрыть');
		} else {
			$(this).html('Загрузить ещё');
		}
	} else {
		$('.btn__send').hide();
	}
});