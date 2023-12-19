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





















document.addEventListener('DOMContentLoaded', function(){




	
});

























/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b322dfddc8414a1fe7ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMTNkZDlhNmVhNDU1ZGQ5Mjc5Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDLHlCQUF5QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7QUFDTCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3BjQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGE0YPQvdC60YbRltC+0L3QsNC70YMgXCLQp9C10YDRgtC+0LPQuCDQpNGA0ZbQu9Cw0L3RgdC10YDQsFwiXHJcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHQv9C40YHQutGDINCw0LrRgtC40LLQvdC40YUg0LzQvtC00YPQu9GW0LJcclxuXHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcclxuXHRpbml0U3dpcGVyKClcclxuXHRpbml0SG92ZXJOZXdzQ2FyZCgpXHJcblx0aW5pdFNlYXJjaCgpXHJcblxyXG5cclxuXHRmdW5jdGlvbiBpbml0U2VhcmNoKCkge1xyXG5cdFx0JCgnLnNlYXJjaC1idG4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLmJhcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHQkKCcubWVudV9fbGlzdCcpLnRvZ2dsZUNsYXNzKCdoaWRlJylcclxuXHRcdFx0JCgnLmhlYWRlcl9fbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHQkKCcuaGVhZGVyX19idXR0b25zJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdGlmICgkKCcuYmFyJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCgnLmJhciBpbnB1dCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJylcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdfaWNvbi1NYWduaWZ5aW5nR2xhc3MtMScpXHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnX2ljb24tWCcpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnLmJhciBpbnB1dCcpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdfaWNvbi1NYWduaWZ5aW5nR2xhc3MtMScpXHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnX2ljb24tWCcpXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEyNzkpIHtcclxuXHRcdFx0XHQkKCcuaGVhZGVyX19sb2dvJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdCQoJy5zZWFyY2gtYnRuLW1vYmlsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuYmFyLW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHQkKCcubWVudS1idXR0b24nKS50b2dnbGVDbGFzcygnaGlkZScpXHJcblx0XHRcdCQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0JCgnLmhlYWRlcl9fbG9nbycpLnRvZ2dsZUNsYXNzKCdoaWRlJylcclxuXHRcdFx0aWYgKCQoJy5iYXItbW9iaWxlJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCgnLmJhci1tb2JpbGUgaW5wdXQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpXHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnX2ljb24tU2VhcmNoJylcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdfaWNvbi1YJylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcuYmFyLW1vYmlsZSBpbnB1dCcpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdfaWNvbi1TZWFyY2gnKVxyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ19pY29uLVgnKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRTd2lwZXIoKSB7XHJcblxyXG5cdFx0bGV0IHN3aXBlckNsaWVudHMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNsaWVudHMnLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyNCxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDQwMDAsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDMwMCxcclxuXHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gZnJlZU1vZGU6IHRydWUsXHJcblx0XHRcdC8vIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMjgwOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDQ4XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdGxldCBzd2lwZXJDb21wbGV0ZWQgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNvbXBsZXRlZCcsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHRcdFx0XHRkcmFnZ2FibGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTI4MDoge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdGxldCBzd2lwZXJPZmZlcnMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLW9mZmVycycsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRpbml0aWFsU2xpZGU6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHRcdFx0XHRkcmFnZ2FibGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTI4MDoge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyNFxyXG5cdFx0XHRcdFx0Ly8gc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRsZXQgc3dpcGVyQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNhcm91c2VsJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHRcdFx0XHRkcmFnZ2FibGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTI4MDoge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyNFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRsZXQgc3dpcGVyVGVhbSA9IG5ldyBTd2lwZXIoJy5zbGlkZXItdGVhbScsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDE2LFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEyODA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0bGV0IHN3aXBlckNhcm91c2VsSW5uZXIgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNhcm91c2VsLWlubmVyJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRzcGVlZDogMTAwMCxcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDQwMDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTI4MDoge31cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRsZXQgc3dpcGVySGVybyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItaGVybycsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxNixcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbjoge1xyXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmFjdGl2ZUluZGV4XVxyXG5cdFx0XHRcdFx0dGhpcy5lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2xpZGUuZGF0YXNldC5iYWNrZ3JvdW5kfSlgXHJcblx0XHRcdFx0XHRjaGVja1N3aXBlckJ1dHRvbnMoKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2xpZGVDaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmFjdGl2ZUluZGV4XVxyXG5cdFx0XHRcdFx0dGhpcy5lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2xpZGUuZGF0YXNldC5iYWNrZ3JvdW5kfSlgXHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdEhvdmVyTmV3c0NhcmQoKSB7XHJcblx0XHRsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKVxyXG5cdFx0aWYgKHdpbmRvd1dpZHRoID49IDEyODApIHtcclxuXHRcdFx0JCgnLml0ZW0tbmV3cycpLmhvdmVyKFxyXG5cdFx0XHRcdGZ1bmN0aW9uKCkgeyAvLyDQn9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC60YPRgNGB0L7RgNCwXHJcblx0XHRcdFx0XHQkKHRoaXMpLmZpbmQoJy5pdGVtLW5ld3NfX3RleHQtaG9sZGVyLWpzJykuY3NzKCdtYXgtaGVpZ2h0JywgJzE1OHB4JykgLy8g0KPQstC10LvQuNGH0LjQstCw0LXQvCDQstGL0YHQvtGC0YNcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZ1bmN0aW9uKCkgeyAvLyDQmtC+0LPQtNCwINC60YPRgNGB0L7RgCDRg9Cx0LjRgNCw0LXRgtGB0Y9cclxuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLml0ZW0tbmV3c19fdGV4dC1ob2xkZXItanMnKS5jc3MoJ21heC1oZWlnaHQnLCAnODBweCcpIC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdC8INC90LDRh9Cw0LvRjNC90YPRjiDQstGL0YHQvtGC0YNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2hlY2tTd2lwZXJCdXR0b25zKCkge1xyXG5cdFx0bGV0IG5leHRCdXR0b24gPSAkKCcuc2xpZGVyLWhlcm8gLnN3aXBlci1idXR0b24tbmV4dCcpXHJcblx0XHRsZXQgcHJldkJ1dHRvbiA9ICQoJy5zbGlkZXItaGVybyAuc3dpcGVyLWJ1dHRvbi1wcmV2JylcclxuXHRcdGxldCBzbGlkZXJIZXJvID0gJCgnLnNsaWRlci1oZXJvJylcclxuXHJcblxyXG5cdFx0aWYgKG5leHRCdXR0b24ubGVuZ3RoICYmIHByZXZCdXR0b24ubGVuZ3RoICYmIHNsaWRlckhlcm8ubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChuZXh0QnV0dG9uLmhhc0NsYXNzKCdzd2lwZXItYnV0dG9uLWxvY2snKSB8fCBwcmV2QnV0dG9uLmhhc0NsYXNzKCdzd2lwZXItYnV0dG9uLWxvY2snKSkge1xyXG5cdFx0XHRcdHNsaWRlckhlcm8uYWRkQ2xhc3MoJ25vdC1zbGlkZXInKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNsaWRlckhlcm8ucmVtb3ZlQ2xhc3MoJ25vdC1zbGlkZXInKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQkKGRvY3VtZW50KS5yZWFkeShpbml0U3RhYmxlV2luZG93V2lkdGgpXHJcblx0JCh3aW5kb3cpLnJlc2l6ZShpbml0U3RhYmxlV2luZG93V2lkdGgpXHJcblxyXG5cdGZ1bmN0aW9uIGluaXRTdGFibGVXaW5kb3dXaWR0aCgpIHtcclxuXHRcdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTI4MHB4KScpLm1hdGNoZXMpIHtcclxuXHRcdFx0bGV0IG9yaWdpbmFsV2lkdGggPSAkKCcud3JhcHBlcicpLndpZHRoKClcclxuXHRcdFx0JCgnW2RhdGEtZmFuY3lib3hdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLndyYXBwZXInKS53aWR0aChvcmlnaW5hbFdpZHRoKVxyXG5cdFx0XHRcdCQoJy5oZWFkZXInKS53aWR0aChvcmlnaW5hbFdpZHRoKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKCQoJ1tkYXRhLWZhbmN5Ym94PVwiXCJdJykubGVuZ3RoID4gMCkge1xyXG5cdFx0JCgnW2RhdGEtZmFuY3lib3g9XCJcIl0nKS5mYW5jeWJveCh7XHJcblx0XHRcdGF1dG9Gb2N1czogZmFsc2UsXHJcblx0XHRcdHRvdWNoOiBmYWxzZSxcclxuXHRcdFx0YWZ0ZXJDbG9zZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLndyYXBwZXInKS53aWR0aCgnMTAwJScpXHJcblx0XHRcdFx0JCgnLmhlYWRlcicpLndpZHRoKCcxMDAlJylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdCQoJ2FbaHJlZl49XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG5cdFx0bGV0IHRhcmdldCA9ICQodGhpcy5oYXNoKVxyXG5cdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHRcdFx0bGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpXHJcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSBoZWFkZXJIZWlnaHRcclxuXHRcdFx0fSwgMTAwMClcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQkKCcuaW5wdXQtZmlsZSBpbnB1dFt0eXBlPWZpbGVdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGZpbGUgPSB0aGlzLmZpbGVzWzBdXHJcblx0XHRpZiAoZmlsZSkge1xyXG5cdFx0XHRsZXQgZmlsZU5hbWUgPSBmaWxlLm5hbWVcclxuXHRcdFx0aWYgKGZpbGVOYW1lLmxlbmd0aCA+IDI1KSB7XHJcblx0XHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHJpbmcoMCwgMjIpICsgJy4uLidcclxuXHRcdFx0fVxyXG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5pbnB1dC1maWxlJykuZmluZCgnLmlucHV0LWZpbGUtYnRuJykuaHRtbChmaWxlTmFtZSlcclxuXHRcdH1cclxuXHR9KVxyXG5cclxufSlcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcblx0bGV0IGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGlvbl9fdGl0bGUnKVxyXG5cdGxldCBhY2NDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGlvbl9fY2xvc2UnKVxyXG5cdGxldCBhY2NDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGlvbl9fY291bnQnKVxyXG5cdGxldCBpXHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlQWxsRXhjZXB0KGFjdGl2ZUFjYykge1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBhY2MubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0aWYgKGFjY1tqXSAhPT0gYWN0aXZlQWNjKSB7XHJcblx0XHRcdFx0YWNjW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdFx0YWNjW2pdLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXHJcblx0XHRcdFx0YWNjW2pdLmNsb3Nlc3QoJy5hY2NvcmRpb25fX3dyYXBwZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb24tYWN0aXZlJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yIChpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xyXG5cdFx0YWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWNjb3JkaW9uKVxyXG5cdH1cclxuXHJcblx0Zm9yIChpID0gMDsgaSA8IGFjY0Nsb3NlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRhY2NDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFjY29yZGlvbilcclxuXHR9XHJcblxyXG5cdGZvciAoaSA9IDA7IGkgPCBhY2NDb3VudC5sZW5ndGg7IGkrKykge1xyXG5cdFx0YWNjQ291bnRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dG9nZ2xlQWNjb3JkaW9uLmNhbGwodGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX3RpdGxlJykpXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdG9nZ2xlQWNjb3JkaW9uKCkge1xyXG5cdFx0bGV0IGFjY29yZGlvbkNvbnRlbnQgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaW9uX19jbG9zZScpID9cclxuXHRcdFx0dGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2NvbnRlbnQnKSA6XHJcblx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nXHJcblx0XHRsZXQgaXNPcGVuID0gYWNjb3JkaW9uQ29udGVudC5zdHlsZS5tYXhIZWlnaHRcclxuXHRcdGxldCBhY2NvcmRpb25XcmFwcGVyID0gdGhpcy5jbG9zZXN0KCcuYWNjb3JkaW9uX193cmFwcGVyJylcclxuXHJcblx0XHRjbG9zZUFsbEV4Y2VwdChhY2NvcmRpb25XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX3RpdGxlJykpXHJcblxyXG5cdFx0aWYgKGlzT3Blbikge1xyXG5cdFx0XHRhY2NvcmRpb25XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX3RpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0YWNjb3JkaW9uQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXHJcblx0XHRcdGFjY29yZGlvbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uLWFjdGl2ZScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhY2NvcmRpb25XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX3RpdGxlJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHRcdFx0YWNjb3JkaW9uQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBhY2NvcmRpb25Db250ZW50LnNjcm9sbEhlaWdodCArICdweCdcclxuXHRcdFx0YWNjb3JkaW9uV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb24tYWN0aXZlJylcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvLyDQnNC10L3RjiDQsdGD0YDQs9C10YBcclxuXHRjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJylcclxuXHRjb25zdCBtZW51QnV0dG9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbl9faWNvbicpXHJcblx0Y29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYm9keScpXHJcblxyXG5cclxuXHRpZiAobWVudUJ1dHRvbikge1xyXG5cdFx0bWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdfbG9jaycpXHJcblx0XHRcdG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpXHJcblx0XHRcdG1lbnVCb2R5LmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKVxyXG5cdFx0XHRpZiAobWVudUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ19hY3RpdmUnKSkge1xyXG5cdFx0XHRcdG1lbnVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ19pY29uLU1lbnUnKVxyXG5cdFx0XHRcdG1lbnVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ19pY29uLVgnKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG1lbnVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ19pY29uLU1lbnUnKVxyXG5cdFx0XHRcdG1lbnVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ19pY29uLVgnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBtZW51QnV0dG9uVGV4dCA9IG1lbnVCdXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpXHJcblx0XHRcdGlmIChtZW51QnV0dG9uVGV4dC50ZXh0Q29udGVudCA9PT0gJ9Cc0LXQvdGOJykge1xyXG5cdFx0XHRcdG1lbnVCdXR0b25UZXh0LnRleHRDb250ZW50ID0gJ9CX0LDQutGA0LjRgtC4J1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG1lbnVCdXR0b25UZXh0LnRleHRDb250ZW50ID0gJ9Cc0LXQvdGOJ1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0IGJ1dHRvblN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyIC5zcG9sbGVyc19fdGl0bGUnKVxyXG5cdGNvbnN0IHN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlciAuc3VibWVudScpXHJcblxyXG5cdGlmIChidXR0b25TdWJNZW51Lmxlbmd0aCA+IDApIHtcclxuXHRcdGJ1dHRvblN1Yk1lbnUuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0c3ViTWVudXMuZm9yRWFjaCgobWVudSwgbWVudUluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobWVudUluZGV4ICE9PSBpbmRleCkge1xyXG5cdFx0XHRcdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG5cdFx0XHRcdFx0XHRidXR0b25TdWJNZW51W21lbnVJbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnN0IHN1Yk1lbnUgPSBzdWJNZW51c1tpbmRleF1cclxuXHRcdFx0XHRjb25zdCBpc0FjdGl2ZSA9IHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JylcclxuXHRcdFx0XHRzdWJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKVxyXG5cdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCAhaXNBY3RpdmUpXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLXNlYXJjaC1tb2JpbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1tb2JpbGUnKS52YWx1ZSA9ICcnXHJcblx0fSlcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9fY2xlYXItaWNvbicpLmZvckVhY2goZnVuY3Rpb24oY2xlYXJJY29uKSB7XHJcblx0XHRjbGVhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8g0J7Rh9C40YHRgtC60LAgaW5wdXRcclxuXHRcdFx0bGV0IGlucHV0UGFyZW50ID0gdGhpcy5jbG9zZXN0KCcuZm9ybV9faW5wdXQtaG9sZGVyJylcclxuXHRcdFx0bGV0IGlucHV0RmllbGQgPSBpbnB1dFBhcmVudCA/IGlucHV0UGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgOiBudWxsXHJcblx0XHRcdGlmIChpbnB1dEZpZWxkKSB7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC52YWx1ZSA9ICcnXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vINCe0YfQuNGB0YLQutCwIHRleHRhcmVhXHJcblx0XHRcdGxldCB0ZXh0YXJlYVBhcmVudCA9IHRoaXMuY2xvc2VzdCgnLmZvcm1fX3RleHRhcmVhLWhvbGRlcicpXHJcblx0XHRcdGxldCB0ZXh0YXJlYUZpZWxkID0gdGV4dGFyZWFQYXJlbnQgPyB0ZXh0YXJlYVBhcmVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpIDogbnVsbFxyXG5cdFx0XHRpZiAodGV4dGFyZWFGaWVsZCkge1xyXG5cdFx0XHRcdHRleHRhcmVhRmllbGQudmFsdWUgPSAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0pXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsZWFyLXNlYXJjaCcpLmZvckVhY2goZnVuY3Rpb24oY2xlYXJCdXR0b24pIHtcclxuXHRcdGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLmNsb3Nlc3QoJy5iYXJfX2lucHV0LWhvbGRlcicpXHJcblx0XHRcdHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykudmFsdWUgPSAnJ1xyXG5cdFx0fSlcclxuXHR9KVxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuXHJcblxyXG5cdFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMzIyZGZkZGM4NDE0YTFmZTdlY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==