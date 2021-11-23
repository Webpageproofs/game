//@prepros-append script.js
//@prepros-append jq.js
// <ИЗОБРАЖЕНИЕ В HTML И В BACKGROUND URL>
function ibg(){

var ibg = document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

// </ИЗОБРАЖЕНИЕ В HTML И В BACKGROUND URL>

// <ОТОБРАЖЕНИЕ БУРГЕР-ИКОНКИ МЕНЮ>
var menu = document.querySelector('.icon-menu');
var menu__body = document.querySelector('.header__body');
menu.addEventListener('click', click_menu);

function click_menu() {
	menu.classList.toggle('active');
	menu__body.classList.toggle('active');
}

var link = document.querySelectorAll('.header__menu .menu__link');
for (i = 0; i < link.length; i++) {
	link[i].addEventListener('click', click_link);
}
function click_link() {
	menu.classList.toggle('active');
	menu__body.classList.toggle('active');
}
// </ОТОБРАЖЕНИЕ БУРГЕР-ИКОНКИ МЕНЮ>


// <ОТОБРАЖЕНИЕ кнопки наверх>
function scrollTo(to, duration = 700) {
	const
		 element = document.scrollingElement || document.documentElement,
		 start = element.scrollTop,
		 change = to - start,
		 startDate = +new Date(),
		 // t = current time
		 // b = start value
		 // c = change in value
		 // d = duration
		 easeInOutQuad = function (t, b, c, d) {
			  t /= d / 2;
			  if (t < 1) return c / 2 * t * t + b;
			  t--;
			  return -c / 2 * (t * (t - 2) - 1) + b;
		 },
		 animateScroll = function () {
			  const currentDate = +new Date();
			  const currentTime = currentDate - startDate;
			  element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			  if (currentTime < duration) {
					requestAnimationFrame(animateScroll);
			  }
			  else {
					element.scrollTop = to;
			  }
		 };
	animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelector('#toTop');
	window.addEventListener('scroll', function () {
		 // Если прокрутили дальше 599px, показываем кнопку
		 if (pageYOffset > 100) {
			  btn.classList.add('show');
			  // Иначе прячем
		 } else {
			  btn.classList.remove('show');
		 }
	});

	// При клике прокручиываем на самый верх
	btn.onclick = function (click) {
		 click.preventDefault();
		 scrollTo(0, 400);
	}
});

// </ОТОБРАЖЕНИЕ кнопки наверх>
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 14,
		// autoplay:true,
		navText: ["<img src=\"img/icons/arr-left.png\" alt=\"img\" >", "<img src=\"img/icons/arr-right.png\" alt=\"img\" >"],
		responsive: {
			0: {
				items: 5
			},
			600: {
				items: 9
			},
			1000: {
				items: 14
			}
		}
	});
	// адаптация стрелочек у слайдера
	var team_w = $('.owl-item.active').width();
	$('.owl-carousel .owl-nav button.owl-next, .owl-carousel .owl-nav button.owl-prev').width(team_w);

	$(window).resize(function () {
		location.reload();
	});

	// изменение должности по клику

	var articles = {
		"Header": [
			{ "id": "1", "title": "Tamara Bulic,", "text": "Project Manager " },
			{ "id": "2", "title": "Azalia Blanck,", "text": "Specialist" },
			{ "id": "3", "title": "Marta Clode,", "text": "Main specialist" },
			{ "id": "4", "title": "Jane Zolla,", "text": "Cretive manager" },
			{ "id": "5", "title": "Margo Bulic,", "text": "Project Manager " },
			{ "id": "6", "title": "Liliya Blanck,", "text": "Specialist" },
			{ "id": "7", "title": "Fathima Clode,", "text": "Main specialist" },
			{ "id": "8", "title": "Loza Zolla,", "text": "Cretive manager" },
			{ "id": "9", "title": "Lyiza Bulic,", "text": "Project Manager " },
			{ "id": "10", "title": "Felicita Blanck,", "text": "Specialist" },
			{ "id": "11", "title": "Clara Clode,", "text": "Main specialist" },
			{ "id": "12", "title": "Franciska Zolla,", "text": "Cretive manager" },
			{ "id": "13", "title": "Sara Clode,", "text": "Main specialist" },
			{ "id": "14", "title": "Blear Zolla,", "text": "Cretive manager" },
		],
	};

	$.each(articles, function (key, data) {
		// console.log('Раздел: ' + key);
		$.each(data, function (index, value) {
			// console.log('Статья: id = ' + value['id'] + '; Название = '+ value['title']+ 'Текст = '+ value['text']);
			$('.team__item' + value['id']).click(function () {
				// console.log('Статья: id = ' + value['id'] + '; Название = '+ value['title']+ 'Текст = '+ value['text']);
				$('.team__item').not($(this)).removeClass('team__item_active');
				$(this).addClass('team__item_active');
				$('.team__name').addClass('team__name'+ value['id']);
				$('.team__job').addClass('team__job'+ value['id']);
				$('.team__name' + value['id']).html(value['title']);
				$('.team__job' + value['id']).html(value['text']);
			});
		});
	});


});


