"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/script.js":
/*!********************************!*\
  !*** ./src/js/files/script.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів


jQuery(document).ready(function($) {
	initSwiper()
	initHoverNewsCard()
	initSearch()


	function initSearch() {
		$('.search-btn').click(function() {
			$('.bar').toggleClass('active')
			$('.menu__list').toggleClass('hide')
			$('.header__menu').toggleClass('active')
			$('.header__buttons').toggleClass('active')
			if ($('.bar').hasClass('active')) {
				$('.bar input').removeAttr('disabled')
				$(this).removeClass('_icon-MagnifyingGlass-1')
				$(this).addClass('_icon-X')
			} else {
				$('.bar input').attr('disabled', 'disabled')
				$(this).addClass('_icon-MagnifyingGlass-1')
				$(this).removeClass('_icon-X')
			}
			if ($(window).width() <= 1279) {
				$('.header__logo').toggleClass('hide')
			}
		})

		$('.search-btn-mobile').click(function() {
			$('.bar-mobile').toggleClass('active')
			$('.menu-button').toggleClass('hide')
			$('.header__menu').toggleClass('active')
			$('.header__logo').toggleClass('hide')
			if ($('.bar-mobile').hasClass('active')) {
				$('.bar-mobile input').removeAttr('disabled')
				$(this).removeClass('_icon-Search')
				$(this).addClass('_icon-X')
			} else {
				$('.bar-mobile input').attr('disabled', 'disabled')
				$(this).addClass('_icon-Search')
				$(this).removeClass('_icon-X')
			}
		})

	}

	function initSwiper() {

		let swiperClients = new Swiper('.slider-clients', {
			slidesPerView: 'auto',
			spaceBetween: 24,
			loop: true,
			speed: 4000,
			autoplay: {
				delay: 300,
				disableOnInteraction: false
			},
			// freeMode: true,
			// allowTouchMove: false,
			breakpoints: {
				1280: {
					spaceBetween: 48
				}
			}
		})

		let swiperCompleted = new Swiper('.slider-completed', {
			slidesPerView: 'auto',
			spaceBetween: 0,
			loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1280: {
					spaceBetween: 0
				}
			}
		})

		let swiperOffers = new Swiper('.slider-offers', {
			slidesPerView: 'auto',
			initialSlide: 1,
			spaceBetween: 16,
			loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1280: {
					spaceBetween: 24
					// slidesPerView: 'auto',
				}
			}
		})

		let swiperCarousel = new Swiper('.slider-carousel', {
			slidesPerView: 'auto',
			spaceBetween: 16,
			loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1280: {
					spaceBetween: 24
				}
			}
		})

		let swiperTeam = new Swiper('.slider-team', {
			slidesPerView: 'auto',
			spaceBetween: 16,
			loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1280: {
					spaceBetween: 24
				}
			}
		})

		let swiperCarouselInner = new Swiper('.slider-carousel-inner', {
			slidesPerView: 1,
			loop: true,
			speed: 1000,
			effect: 'fade',
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			breakpoints: {
				1280: {}
			}
		})

		let swiperHero = new Swiper('.slider-hero', {
			slidesPerView: 1,
			spaceBetween: 16,
			effect: 'fade',
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			on: {
				init: function() {
					const slide = this.slides[this.activeIndex]
					this.el.style.backgroundImage = `url(${slide.dataset.background})`
					checkSwiperButtons()
				},
				slideChange: function() {
					const slide = this.slides[this.activeIndex]
					this.el.style.backgroundImage = `url(${slide.dataset.background})`

				}
			}


		})
	}

	function initHoverNewsCard() {
		let windowWidth = $(window).width()
		if (windowWidth >= 1280) {
			$('.item-news').hover(
				function() { // При наведении курсора
					$(this).find('.item-news__text-holder-js').css('max-height', '158px') // Увеличиваем высоту
				},
				function() { // Когда курсор убирается
					$(this).find('.item-news__text-holder-js').css('max-height', '80px') // Возвращаем начальную высоту
				}
			)
		} else {

		}
	}

	function checkSwiperButtons() {
		let nextButton = $('.slider-hero .swiper-button-next')
		let prevButton = $('.slider-hero .swiper-button-prev')
		let sliderHero = $('.slider-hero')


		if (nextButton.length && prevButton.length && sliderHero.length) {
			if (nextButton.hasClass('swiper-button-lock') || prevButton.hasClass('swiper-button-lock')) {
				sliderHero.addClass('not-slider')
			} else {
				sliderHero.removeClass('not-slider')
			}
		}
	}

	$(document).ready(initStableWindowWidth)
	$(window).resize(initStableWindowWidth)

	function initStableWindowWidth() {
		if (window.matchMedia('(min-width: 1280px)').matches) {
			let originalWidth = $('.wrapper').width()
			$('[data-fancybox]').click(function() {
				$('.wrapper').width(originalWidth)
				$('.header').width(originalWidth)
			})
		}
	}

	if ($('[data-fancybox=""]').length > 0) {
		$('[data-fancybox=""]').fancybox({
			autoFocus: false,
			touch: false,
			afterClose: function() {
				$('.wrapper').width('100%')
				$('.header').width('100%')
			}
		})
	}

	$('a[href^="#"]').click(function(e) {
		e.preventDefault()

		let target = $(this.hash)
		if (target.length) {
			let headerHeight = $('.header').outerHeight()
			$('html, body').animate({
				scrollTop: target.offset().top - headerHeight
			}, 1000)
		}
	})

	$('.input-file input[type=file]').on('change', function() {
		let file = this.files[0]
		if (file) {
			let fileName = file.name
			if (fileName.length > 25) {
				fileName = fileName.substring(0, 22) + '...'
			}
			$(this).closest('.input-file').find('.input-file-btn').html(fileName)
		}
	})

})


document.addEventListener('DOMContentLoaded', function() {
	let acc = document.getElementsByClassName('accordion__title')
	let accClose = document.getElementsByClassName('accordion__close')
	let accCount = document.getElementsByClassName('accordion__count')
	let i

	function closeAllExcept(activeAcc) {
		for (let j = 0; j < acc.length; j++) {
			if (acc[j] !== activeAcc) {
				acc[j].classList.remove('active')
				acc[j].nextElementSibling.style.maxHeight = null
				acc[j].closest('.accordion__wrapper').classList.remove('accordion-active')
			}
		}
	}

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener('click', toggleAccordion)
	}

	for (i = 0; i < accClose.length; i++) {
		accClose[i].addEventListener('click', toggleAccordion)
	}

	for (i = 0; i < accCount.length; i++) {
		accCount[i].addEventListener('click', function() {
			toggleAccordion.call(this.parentNode.querySelector('.accordion__title'))
		})
	}

	function toggleAccordion() {
		let accordionContent = this.classList.contains('accordion__close') ?
			this.previousElementSibling.querySelector('.accordion__content') :
			this.nextElementSibling
		let isOpen = accordionContent.style.maxHeight
		let accordionWrapper = this.closest('.accordion__wrapper')

		closeAllExcept(accordionWrapper.querySelector('.accordion__title'))

		if (isOpen) {
			accordionWrapper.querySelector('.accordion__title').classList.remove('active')
			accordionContent.style.maxHeight = null
			accordionWrapper.classList.remove('accordion-active')
		} else {
			accordionWrapper.querySelector('.accordion__title').classList.add('active')
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			accordionWrapper.classList.add('accordion-active')
		}
	}


	// Меню бургер
	const menuButton = document.querySelector('.menu-button')
	const menuButtonIcon = document.querySelector('.menu-button__icon')
	const menuBody = document.querySelector('.menu__body')


	if (menuButton) {
		menuButton.addEventListener('click', function(e) {
			document.body.classList.toggle('_lock')
			menuButton.classList.toggle('_active')
			menuBody.classList.toggle('_active')
			if (menuButton.classList.contains('_active')) {
				menuButtonIcon.classList.remove('_icon-Menu')
				menuButtonIcon.classList.add('_icon-X')
			} else {
				menuButtonIcon.classList.add('_icon-Menu')
				menuButtonIcon.classList.remove('_icon-X')
			}
			let menuButtonText = menuButton.querySelector('span')
			if (menuButtonText.textContent === 'Меню') {
				menuButtonText.textContent = 'Закрити'
			} else {
				menuButtonText.textContent = 'Меню'
			}
		})
	}


	const buttonSubMenu = document.querySelectorAll('.header .spollers__title')
	const subMenus = document.querySelectorAll('.header .submenu')

	if (buttonSubMenu.length > 0) {
		buttonSubMenu.forEach((button, index) => {
			button.addEventListener('click', function(e) {
				subMenus.forEach((menu, menuIndex) => {
					if (menuIndex !== index) {
						menu.classList.remove('show')
						buttonSubMenu[menuIndex].classList.remove('active')
					}
				})
				const subMenu = subMenus[index]
				const isActive = subMenu.classList.contains('show')
				subMenu.classList.toggle('show')
				button.classList.toggle('active', !isActive)
			})
		})
	}

	document.querySelector('.clear-search-mobile').addEventListener('click', function() {
		document.querySelector('.search-input-mobile').value = ''
	})
	document.querySelectorAll('.form__clear-icon').forEach(function(clearIcon) {
		clearIcon.addEventListener('click', function() {
			// Очистка input
			let inputParent = this.closest('.form__input-holder')
			let inputField = inputParent ? inputParent.querySelector('input') : null
			if (inputField) {
				inputField.value = ''
			}

			// Очистка textarea
			let textareaParent = this.closest('.form__textarea-holder')
			let textareaField = textareaParent ? textareaParent.querySelector('textarea') : null
			if (textareaField) {
				textareaField.value = ''
			}
		})
	})
	document.querySelectorAll('.clear-search').forEach(function(clearButton) {
		clearButton.addEventListener('click', function() {
			let parent = this.closest('.bar__input-holder')
			parent.querySelector('.search-input').value = ''
		})
	})

})

























/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("17514bc8c4cade395ad6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZjE1ZjlkZDU0ZmE4ODc1ZGVmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7QUFDTCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDeGFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YTRg9C90LrRhtGW0L7QvdCw0LvRgyBcItCn0LXRgNGC0L7Qs9C4INCk0YDRltC70LDQvdGB0LXRgNCwXCJcclxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdC/0LjRgdC60YMg0LDQutGC0LjQstC90LjRhSDQvNC+0LTRg9C70ZbQslxyXG5cclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG5cdGluaXRTd2lwZXIoKVxyXG5cdGluaXRIb3Zlck5ld3NDYXJkKClcclxuXHRpbml0U2VhcmNoKClcclxuXHJcblxyXG5cdGZ1bmN0aW9uIGluaXRTZWFyY2goKSB7XHJcblx0XHQkKCcuc2VhcmNoLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuYmFyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdCQoJy5tZW51X19saXN0JykudG9nZ2xlQ2xhc3MoJ2hpZGUnKVxyXG5cdFx0XHQkKCcuaGVhZGVyX19tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdCQoJy5oZWFkZXJfX2J1dHRvbnMnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0aWYgKCQoJy5iYXInKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKCcuYmFyIGlucHV0JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKVxyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ19pY29uLU1hZ25pZnlpbmdHbGFzcy0xJylcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdfaWNvbi1YJylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcuYmFyIGlucHV0JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ19pY29uLU1hZ25pZnlpbmdHbGFzcy0xJylcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdfaWNvbi1YJylcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTI3OSkge1xyXG5cdFx0XHRcdCQoJy5oZWFkZXJfX2xvZ28nKS50b2dnbGVDbGFzcygnaGlkZScpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0JCgnLnNlYXJjaC1idG4tbW9iaWxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5iYXItbW9iaWxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdCQoJy5tZW51LWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdoaWRlJylcclxuXHRcdFx0JCgnLmhlYWRlcl9fbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHQkKCcuaGVhZGVyX19sb2dvJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKVxyXG5cdFx0XHRpZiAoJCgnLmJhci1tb2JpbGUnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKCcuYmFyLW1vYmlsZSBpbnB1dCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJylcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdfaWNvbi1TZWFyY2gnKVxyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ19pY29uLVgnKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJy5iYXItbW9iaWxlIGlucHV0JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ19pY29uLVNlYXJjaCcpXHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnX2ljb24tWCcpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdFN3aXBlcigpIHtcclxuXHJcblx0XHRsZXQgc3dpcGVyQ2xpZW50cyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY2xpZW50cycsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDI0LFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRzcGVlZDogNDAwMCxcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRkZWxheTogMzAwLFxyXG5cdFx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBmcmVlTW9kZTogdHJ1ZSxcclxuXHRcdFx0Ly8gYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEyODA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogNDhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0bGV0IHN3aXBlckNvbXBsZXRlZCA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY29tcGxldGVkJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcclxuXHRcdFx0fSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMjgwOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0bGV0IHN3aXBlck9mZmVycyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItb2ZmZXJzJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdGluaXRpYWxTbGlkZTogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxNixcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcclxuXHRcdFx0fSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMjgwOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI0XHJcblx0XHRcdFx0XHQvLyBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdGxldCBzd2lwZXJDYXJvdXNlbCA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY2Fyb3VzZWwnLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxNixcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcclxuXHRcdFx0fSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMjgwOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdGxldCBzd2lwZXJUZWFtID0gbmV3IFN3aXBlcignLnNsaWRlci10ZWFtJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHRcdFx0XHRkcmFnZ2FibGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTI4MDoge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyNFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRsZXQgc3dpcGVyQ2Fyb3VzZWxJbm5lciA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY2Fyb3VzZWwtaW5uZXInLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdHNwZWVkOiAxMDAwLFxyXG5cdFx0XHRlZmZlY3Q6ICdmYWRlJyxcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRkZWxheTogNDAwMCxcclxuXHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMjgwOiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdGxldCBzd2lwZXJIZXJvID0gbmV3IFN3aXBlcignLnNsaWRlci1oZXJvJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDE2LFxyXG5cdFx0XHRlZmZlY3Q6ICdmYWRlJyxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzbGlkZSA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdXHJcblx0XHRcdFx0XHR0aGlzLmVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbGlkZS5kYXRhc2V0LmJhY2tncm91bmR9KWBcclxuXHRcdFx0XHRcdGNoZWNrU3dpcGVyQnV0dG9ucygpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzbGlkZUNoYW5nZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzbGlkZSA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdXHJcblx0XHRcdFx0XHR0aGlzLmVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbGlkZS5kYXRhc2V0LmJhY2tncm91bmR9KWBcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpbml0SG92ZXJOZXdzQ2FyZCgpIHtcclxuXHRcdGxldCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpXHJcblx0XHRpZiAod2luZG93V2lkdGggPj0gMTI4MCkge1xyXG5cdFx0XHQkKCcuaXRlbS1uZXdzJykuaG92ZXIoXHJcblx0XHRcdFx0ZnVuY3Rpb24oKSB7IC8vINCf0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0LrRg9GA0YHQvtGA0LBcclxuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLml0ZW0tbmV3c19fdGV4dC1ob2xkZXItanMnKS5jc3MoJ21heC1oZWlnaHQnLCAnMTU4cHgnKSAvLyDQo9Cy0LXQu9C40YfQuNCy0LDQtdC8INCy0YvRgdC+0YLRg1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZnVuY3Rpb24oKSB7IC8vINCa0L7Qs9C00LAg0LrRg9GA0YHQvtGAINGD0LHQuNGA0LDQtdGC0YHRj1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5maW5kKCcuaXRlbS1uZXdzX190ZXh0LWhvbGRlci1qcycpLmNzcygnbWF4LWhlaWdodCcsICc4MHB4JykgLy8g0JLQvtC30LLRgNCw0YnQsNC10Lwg0L3QsNGH0LDQu9GM0L3Rg9GOINCy0YvRgdC+0YLRg1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjaGVja1N3aXBlckJ1dHRvbnMoKSB7XHJcblx0XHRsZXQgbmV4dEJ1dHRvbiA9ICQoJy5zbGlkZXItaGVybyAuc3dpcGVyLWJ1dHRvbi1uZXh0JylcclxuXHRcdGxldCBwcmV2QnV0dG9uID0gJCgnLnNsaWRlci1oZXJvIC5zd2lwZXItYnV0dG9uLXByZXYnKVxyXG5cdFx0bGV0IHNsaWRlckhlcm8gPSAkKCcuc2xpZGVyLWhlcm8nKVxyXG5cclxuXHJcblx0XHRpZiAobmV4dEJ1dHRvbi5sZW5ndGggJiYgcHJldkJ1dHRvbi5sZW5ndGggJiYgc2xpZGVySGVyby5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKG5leHRCdXR0b24uaGFzQ2xhc3MoJ3N3aXBlci1idXR0b24tbG9jaycpIHx8IHByZXZCdXR0b24uaGFzQ2xhc3MoJ3N3aXBlci1idXR0b24tbG9jaycpKSB7XHJcblx0XHRcdFx0c2xpZGVySGVyby5hZGRDbGFzcygnbm90LXNsaWRlcicpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2xpZGVySGVyby5yZW1vdmVDbGFzcygnbm90LXNsaWRlcicpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGluaXRTdGFibGVXaW5kb3dXaWR0aClcclxuXHQkKHdpbmRvdykucmVzaXplKGluaXRTdGFibGVXaW5kb3dXaWR0aClcclxuXHJcblx0ZnVuY3Rpb24gaW5pdFN0YWJsZVdpbmRvd1dpZHRoKCkge1xyXG5cdFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjgwcHgpJykubWF0Y2hlcykge1xyXG5cdFx0XHRsZXQgb3JpZ2luYWxXaWR0aCA9ICQoJy53cmFwcGVyJykud2lkdGgoKVxyXG5cdFx0XHQkKCdbZGF0YS1mYW5jeWJveF0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcud3JhcHBlcicpLndpZHRoKG9yaWdpbmFsV2lkdGgpXHJcblx0XHRcdFx0JCgnLmhlYWRlcicpLndpZHRoKG9yaWdpbmFsV2lkdGgpXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoJCgnW2RhdGEtZmFuY3lib3g9XCJcIl0nKS5sZW5ndGggPiAwKSB7XHJcblx0XHQkKCdbZGF0YS1mYW5jeWJveD1cIlwiXScpLmZhbmN5Ym94KHtcclxuXHRcdFx0YXV0b0ZvY3VzOiBmYWxzZSxcclxuXHRcdFx0dG91Y2g6IGZhbHNlLFxyXG5cdFx0XHRhZnRlckNsb3NlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcud3JhcHBlcicpLndpZHRoKCcxMDAlJylcclxuXHRcdFx0XHQkKCcuaGVhZGVyJykud2lkdGgoJzEwMCUnKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0JCgnYVtocmVmXj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHJcblx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpXHJcblx0XHRpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG5cdFx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KClcclxuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIGhlYWRlckhlaWdodFxyXG5cdFx0XHR9LCAxMDAwKVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJy5pbnB1dC1maWxlIGlucHV0W3R5cGU9ZmlsZV0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF1cclxuXHRcdGlmIChmaWxlKSB7XHJcblx0XHRcdGxldCBmaWxlTmFtZSA9IGZpbGUubmFtZVxyXG5cdFx0XHRpZiAoZmlsZU5hbWUubGVuZ3RoID4gMjUpIHtcclxuXHRcdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnN1YnN0cmluZygwLCAyMikgKyAnLi4uJ1xyXG5cdFx0XHR9XHJcblx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmlucHV0LWZpbGUnKS5maW5kKCcuaW5wdXQtZmlsZS1idG4nKS5odG1sKGZpbGVOYW1lKVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG59KVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuXHRsZXQgYWNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkaW9uX190aXRsZScpXHJcblx0bGV0IGFjY0Nsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkaW9uX19jbG9zZScpXHJcblx0bGV0IGFjY0NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkaW9uX19jb3VudCcpXHJcblx0bGV0IGlcclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VBbGxFeGNlcHQoYWN0aXZlQWNjKSB7XHJcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGFjYy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRpZiAoYWNjW2pdICE9PSBhY3RpdmVBY2MpIHtcclxuXHRcdFx0XHRhY2Nbal0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0XHRhY2Nbal0ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IG51bGxcclxuXHRcdFx0XHRhY2Nbal0uY2xvc2VzdCgnLmFjY29yZGlvbl9fd3JhcHBlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbi1hY3RpdmUnKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IgKGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRhY2NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBY2NvcmRpb24pXHJcblx0fVxyXG5cclxuXHRmb3IgKGkgPSAwOyBpIDwgYWNjQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdGFjY0Nsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWNjb3JkaW9uKVxyXG5cdH1cclxuXHJcblx0Zm9yIChpID0gMDsgaSA8IGFjY0NvdW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRhY2NDb3VudFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0b2dnbGVBY2NvcmRpb24uY2FsbCh0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fdGl0bGUnKSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGVBY2NvcmRpb24oKSB7XHJcblx0XHRsZXQgYWNjb3JkaW9uQ29udGVudCA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2Nsb3NlJykgP1xyXG5cdFx0XHR0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fY29udGVudCcpIDpcclxuXHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHRcdGxldCBpc09wZW4gPSBhY2NvcmRpb25Db250ZW50LnN0eWxlLm1heEhlaWdodFxyXG5cdFx0bGV0IGFjY29yZGlvbldyYXBwZXIgPSB0aGlzLmNsb3Nlc3QoJy5hY2NvcmRpb25fX3dyYXBwZXInKVxyXG5cclxuXHRcdGNsb3NlQWxsRXhjZXB0KGFjY29yZGlvbldyYXBwZXIucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fdGl0bGUnKSlcclxuXHJcblx0XHRpZiAoaXNPcGVuKSB7XHJcblx0XHRcdGFjY29yZGlvbldyYXBwZXIucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fdGl0bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHRhY2NvcmRpb25Db250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGxcclxuXHRcdFx0YWNjb3JkaW9uV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb24tYWN0aXZlJylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFjY29yZGlvbldyYXBwZXIucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fdGl0bGUnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0XHRhY2NvcmRpb25Db250ZW50LnN0eWxlLm1heEhlaWdodCA9IGFjY29yZGlvbkNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xyXG5cdFx0XHRhY2NvcmRpb25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbi1hY3RpdmUnKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC8vINCc0LXQvdGOINCx0YPRgNCz0LXRgFxyXG5cdGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKVxyXG5cdGNvbnN0IG1lbnVCdXR0b25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uX19pY29uJylcclxuXHRjb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19ib2R5JylcclxuXHJcblxyXG5cdGlmIChtZW51QnV0dG9uKSB7XHJcblx0XHRtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ19sb2NrJylcclxuXHRcdFx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJylcclxuXHRcdFx0bWVudUJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpXHJcblx0XHRcdGlmIChtZW51QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0bWVudUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnX2ljb24tTWVudScpXHJcblx0XHRcdFx0bWVudUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnX2ljb24tWCcpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWVudUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnX2ljb24tTWVudScpXHJcblx0XHRcdFx0bWVudUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnX2ljb24tWCcpXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IG1lbnVCdXR0b25UZXh0ID0gbWVudUJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJylcclxuXHRcdFx0aWYgKG1lbnVCdXR0b25UZXh0LnRleHRDb250ZW50ID09PSAn0JzQtdC90Y4nKSB7XHJcblx0XHRcdFx0bWVudUJ1dHRvblRleHQudGV4dENvbnRlbnQgPSAn0JfQsNC60YDQuNGC0LgnXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWVudUJ1dHRvblRleHQudGV4dENvbnRlbnQgPSAn0JzQtdC90Y4nXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3QgYnV0dG9uU3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXIgLnNwb2xsZXJzX190aXRsZScpXHJcblx0Y29uc3Qgc3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyIC5zdWJtZW51JylcclxuXHJcblx0aWYgKGJ1dHRvblN1Yk1lbnUubGVuZ3RoID4gMCkge1xyXG5cdFx0YnV0dG9uU3ViTWVudS5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRzdWJNZW51cy5mb3JFYWNoKChtZW51LCBtZW51SW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChtZW51SW5kZXggIT09IGluZGV4KSB7XHJcblx0XHRcdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcblx0XHRcdFx0XHRcdGJ1dHRvblN1Yk1lbnVbbWVudUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Y29uc3Qgc3ViTWVudSA9IHN1Yk1lbnVzW2luZGV4XVxyXG5cdFx0XHRcdGNvbnN0IGlzQWN0aXZlID0gc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKVxyXG5cdFx0XHRcdHN1Yk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXHJcblx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsICFpc0FjdGl2ZSlcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItc2VhcmNoLW1vYmlsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LW1vYmlsZScpLnZhbHVlID0gJydcclxuXHR9KVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19jbGVhci1pY29uJykuZm9yRWFjaChmdW5jdGlvbihjbGVhckljb24pIHtcclxuXHRcdGNsZWFySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyDQntGH0LjRgdGC0LrQsCBpbnB1dFxyXG5cdFx0XHRsZXQgaW5wdXRQYXJlbnQgPSB0aGlzLmNsb3Nlc3QoJy5mb3JtX19pbnB1dC1ob2xkZXInKVxyXG5cdFx0XHRsZXQgaW5wdXRGaWVsZCA9IGlucHV0UGFyZW50ID8gaW5wdXRQYXJlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSA6IG51bGxcclxuXHRcdFx0aWYgKGlucHV0RmllbGQpIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLnZhbHVlID0gJydcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g0J7Rh9C40YHRgtC60LAgdGV4dGFyZWFcclxuXHRcdFx0bGV0IHRleHRhcmVhUGFyZW50ID0gdGhpcy5jbG9zZXN0KCcuZm9ybV9fdGV4dGFyZWEtaG9sZGVyJylcclxuXHRcdFx0bGV0IHRleHRhcmVhRmllbGQgPSB0ZXh0YXJlYVBhcmVudCA/IHRleHRhcmVhUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykgOiBudWxsXHJcblx0XHRcdGlmICh0ZXh0YXJlYUZpZWxkKSB7XHJcblx0XHRcdFx0dGV4dGFyZWFGaWVsZC52YWx1ZSA9ICcnXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xlYXItc2VhcmNoJykuZm9yRWFjaChmdW5jdGlvbihjbGVhckJ1dHRvbikge1xyXG5cdFx0Y2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMuY2xvc2VzdCgnLmJhcl9faW5wdXQtaG9sZGVyJylcclxuXHRcdFx0cGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKS52YWx1ZSA9ICcnXHJcblx0XHR9KVxyXG5cdH0pXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE3NTE0YmM4YzRjYWRlMzk1YWQ2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9