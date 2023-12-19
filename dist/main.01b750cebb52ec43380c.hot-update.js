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
/******/ 	__webpack_require__.h = () => ("013dd9a6ea455dd9279c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMWI3NTBjZWJiNTJlYzQzMzgwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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c3RhcnQvLi9zcmMvanMvZmlsZXMvc2NyaXB0LmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRhNGD0L3QutGG0ZbQvtC90LDQu9GDIFwi0KfQtdGA0YLQvtCz0Lgg0KTRgNGW0LvQsNC90YHQtdGA0LBcIlxyXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0L/QuNGB0LrRgyDQsNC60YLQuNCy0L3QuNGFINC80L7QtNGD0LvRltCyXHJcblxyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcblx0aW5pdFN3aXBlcigpXHJcblx0aW5pdEhvdmVyTmV3c0NhcmQoKVxyXG5cdGluaXRTZWFyY2goKVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gaW5pdFNlYXJjaCgpIHtcclxuXHRcdCQoJy5zZWFyY2gtYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5iYXInKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0JCgnLm1lbnVfX2xpc3QnKS50b2dnbGVDbGFzcygnaGlkZScpXHJcblx0XHRcdCQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0JCgnLmhlYWRlcl9fYnV0dG9ucycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRpZiAoJCgnLmJhcicpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQoJy5iYXIgaW5wdXQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpXHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnX2ljb24tTWFnbmlmeWluZ0dsYXNzLTEnKVxyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ19pY29uLVgnKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJy5iYXIgaW5wdXQnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnX2ljb24tTWFnbmlmeWluZ0dsYXNzLTEnKVxyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ19pY29uLVgnKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMjc5KSB7XHJcblx0XHRcdFx0JCgnLmhlYWRlcl9fbG9nbycpLnRvZ2dsZUNsYXNzKCdoaWRlJylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHQkKCcuc2VhcmNoLWJ0bi1tb2JpbGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLmJhci1tb2JpbGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0JCgnLm1lbnUtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKVxyXG5cdFx0XHQkKCcuaGVhZGVyX19tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdCQoJy5oZWFkZXJfX2xvZ28nKS50b2dnbGVDbGFzcygnaGlkZScpXHJcblx0XHRcdGlmICgkKCcuYmFyLW1vYmlsZScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQoJy5iYXItbW9iaWxlIGlucHV0JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKVxyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ19pY29uLVNlYXJjaCcpXHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnX2ljb24tWCcpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnLmJhci1tb2JpbGUgaW5wdXQnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnX2ljb24tU2VhcmNoJylcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdfaWNvbi1YJylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpbml0U3dpcGVyKCkge1xyXG5cclxuXHRcdGxldCBzd2lwZXJDbGllbnRzID0gbmV3IFN3aXBlcignLnNsaWRlci1jbGllbnRzJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMjQsXHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdHNwZWVkOiA0MDAwLFxyXG5cdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdGRlbGF5OiAzMDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGZyZWVNb2RlOiB0cnVlLFxyXG5cdFx0XHQvLyBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTI4MDoge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA0OFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRsZXQgc3dpcGVyQ29tcGxldGVkID0gbmV3IFN3aXBlcignLnNsaWRlci1jb21wbGV0ZWQnLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEyODA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRsZXQgc3dpcGVyT2ZmZXJzID0gbmV3IFN3aXBlcignLnNsaWRlci1vZmZlcnMnLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0aW5pdGlhbFNsaWRlOiAxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDE2LFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEyODA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjRcclxuXHRcdFx0XHRcdC8vIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0bGV0IHN3aXBlckNhcm91c2VsID0gbmV3IFN3aXBlcignLnNsaWRlci1jYXJvdXNlbCcsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDE2LFxyXG5cdFx0XHRsb29wOiBmYWxzZSxcclxuXHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEyODA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0bGV0IHN3aXBlclRlYW0gPSBuZXcgU3dpcGVyKCcuc2xpZGVyLXRlYW0nLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxNixcclxuXHRcdFx0bG9vcDogZmFsc2UsXHJcblx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcclxuXHRcdFx0fSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMjgwOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdGxldCBzd2lwZXJDYXJvdXNlbElubmVyID0gbmV3IFN3aXBlcignLnNsaWRlci1jYXJvdXNlbC1pbm5lcicsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDEwMDAsXHJcblx0XHRcdGVmZmVjdDogJ2ZhZGUnLFxyXG5cdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdGRlbGF5OiA0MDAwLFxyXG5cdFx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEyODA6IHt9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0bGV0IHN3aXBlckhlcm8gPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWhlcm8nLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMTYsXHJcblx0XHRcdGVmZmVjdDogJ2ZhZGUnLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleF1cclxuXHRcdFx0XHRcdHRoaXMuZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NsaWRlLmRhdGFzZXQuYmFja2dyb3VuZH0pYFxyXG5cdFx0XHRcdFx0Y2hlY2tTd2lwZXJCdXR0b25zKClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNsaWRlQ2hhbmdlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleF1cclxuXHRcdFx0XHRcdHRoaXMuZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NsaWRlLmRhdGFzZXQuYmFja2dyb3VuZH0pYFxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRIb3Zlck5ld3NDYXJkKCkge1xyXG5cdFx0bGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKClcclxuXHRcdGlmICh3aW5kb3dXaWR0aCA+PSAxMjgwKSB7XHJcblx0XHRcdCQoJy5pdGVtLW5ld3MnKS5ob3ZlcihcclxuXHRcdFx0XHRmdW5jdGlvbigpIHsgLy8g0J/RgNC4INC90LDQstC10LTQtdC90LjQuCDQutGD0YDRgdC+0YDQsFxyXG5cdFx0XHRcdFx0JCh0aGlzKS5maW5kKCcuaXRlbS1uZXdzX190ZXh0LWhvbGRlci1qcycpLmNzcygnbWF4LWhlaWdodCcsICcxNThweCcpIC8vINCj0LLQtdC70LjRh9C40LLQsNC10Lwg0LLRi9GB0L7RgtGDXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmdW5jdGlvbigpIHsgLy8g0JrQvtCz0LTQsCDQutGD0YDRgdC+0YAg0YPQsdC40YDQsNC10YLRgdGPXHJcblx0XHRcdFx0XHQkKHRoaXMpLmZpbmQoJy5pdGVtLW5ld3NfX3RleHQtaG9sZGVyLWpzJykuY3NzKCdtYXgtaGVpZ2h0JywgJzgwcHgnKSAvLyDQktC+0LfQstGA0LDRidCw0LXQvCDQvdCw0YfQsNC70YzQvdGD0Y4g0LLRi9GB0L7RgtGDXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNoZWNrU3dpcGVyQnV0dG9ucygpIHtcclxuXHRcdGxldCBuZXh0QnV0dG9uID0gJCgnLnNsaWRlci1oZXJvIC5zd2lwZXItYnV0dG9uLW5leHQnKVxyXG5cdFx0bGV0IHByZXZCdXR0b24gPSAkKCcuc2xpZGVyLWhlcm8gLnN3aXBlci1idXR0b24tcHJldicpXHJcblx0XHRsZXQgc2xpZGVySGVybyA9ICQoJy5zbGlkZXItaGVybycpXHJcblxyXG5cclxuXHRcdGlmIChuZXh0QnV0dG9uLmxlbmd0aCAmJiBwcmV2QnV0dG9uLmxlbmd0aCAmJiBzbGlkZXJIZXJvLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAobmV4dEJ1dHRvbi5oYXNDbGFzcygnc3dpcGVyLWJ1dHRvbi1sb2NrJykgfHwgcHJldkJ1dHRvbi5oYXNDbGFzcygnc3dpcGVyLWJ1dHRvbi1sb2NrJykpIHtcclxuXHRcdFx0XHRzbGlkZXJIZXJvLmFkZENsYXNzKCdub3Qtc2xpZGVyJylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzbGlkZXJIZXJvLnJlbW92ZUNsYXNzKCdub3Qtc2xpZGVyJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JChkb2N1bWVudCkucmVhZHkoaW5pdFN0YWJsZVdpbmRvd1dpZHRoKVxyXG5cdCQod2luZG93KS5yZXNpemUoaW5pdFN0YWJsZVdpbmRvd1dpZHRoKVxyXG5cclxuXHRmdW5jdGlvbiBpbml0U3RhYmxlV2luZG93V2lkdGgoKSB7XHJcblx0XHRpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyODBweCknKS5tYXRjaGVzKSB7XHJcblx0XHRcdGxldCBvcmlnaW5hbFdpZHRoID0gJCgnLndyYXBwZXInKS53aWR0aCgpXHJcblx0XHRcdCQoJ1tkYXRhLWZhbmN5Ym94XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy53cmFwcGVyJykud2lkdGgob3JpZ2luYWxXaWR0aClcclxuXHRcdFx0XHQkKCcuaGVhZGVyJykud2lkdGgob3JpZ2luYWxXaWR0aClcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICgkKCdbZGF0YS1mYW5jeWJveD1cIlwiXScpLmxlbmd0aCA+IDApIHtcclxuXHRcdCQoJ1tkYXRhLWZhbmN5Ym94PVwiXCJdJykuZmFuY3lib3goe1xyXG5cdFx0XHRhdXRvRm9jdXM6IGZhbHNlLFxyXG5cdFx0XHR0b3VjaDogZmFsc2UsXHJcblx0XHRcdGFmdGVyQ2xvc2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy53cmFwcGVyJykud2lkdGgoJzEwMCUnKVxyXG5cdFx0XHRcdCQoJy5oZWFkZXInKS53aWR0aCgnMTAwJScpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQkKCdhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuXHRcdGxldCB0YXJnZXQgPSAkKHRoaXMuaGFzaClcclxuXHRcdGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcblx0XHRcdGxldCBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKVxyXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0XHJcblx0XHRcdH0sIDEwMDApXHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0JCgnLmlucHV0LWZpbGUgaW5wdXRbdHlwZT1maWxlXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBmaWxlID0gdGhpcy5maWxlc1swXVxyXG5cdFx0aWYgKGZpbGUpIHtcclxuXHRcdFx0bGV0IGZpbGVOYW1lID0gZmlsZS5uYW1lXHJcblx0XHRcdGlmIChmaWxlTmFtZS5sZW5ndGggPiAyNSkge1xyXG5cdFx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUuc3Vic3RyaW5nKDAsIDIyKSArICcuLi4nXHJcblx0XHRcdH1cclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmlsZScpLmZpbmQoJy5pbnB1dC1maWxlLWJ0bicpLmh0bWwoZmlsZU5hbWUpXHJcblx0XHR9XHJcblx0fSlcclxuXHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdGxldCBhY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRpb25fX3RpdGxlJylcclxuXHRsZXQgYWNjQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRpb25fX2Nsb3NlJylcclxuXHRsZXQgYWNjQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRpb25fX2NvdW50JylcclxuXHRsZXQgaVxyXG5cclxuXHRmdW5jdGlvbiBjbG9zZUFsbEV4Y2VwdChhY3RpdmVBY2MpIHtcclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgYWNjLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGlmIChhY2Nbal0gIT09IGFjdGl2ZUFjYykge1xyXG5cdFx0XHRcdGFjY1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHRcdGFjY1tqXS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxyXG5cdFx0XHRcdGFjY1tqXS5jbG9zZXN0KCcuYWNjb3JkaW9uX193cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uLWFjdGl2ZScpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAoaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuXHRcdGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFjY29yZGlvbilcclxuXHR9XHJcblxyXG5cdGZvciAoaSA9IDA7IGkgPCBhY2NDbG9zZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0YWNjQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBY2NvcmRpb24pXHJcblx0fVxyXG5cclxuXHRmb3IgKGkgPSAwOyBpIDwgYWNjQ291bnQubGVuZ3RoOyBpKyspIHtcclxuXHRcdGFjY0NvdW50W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRvZ2dsZUFjY29yZGlvbi5jYWxsKHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX190aXRsZScpKVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcclxuXHRcdGxldCBhY2NvcmRpb25Db250ZW50ID0gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGlvbl9fY2xvc2UnKSA/XHJcblx0XHRcdHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19jb250ZW50JykgOlxyXG5cdFx0XHR0aGlzLm5leHRFbGVtZW50U2libGluZ1xyXG5cdFx0bGV0IGlzT3BlbiA9IGFjY29yZGlvbkNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0XHJcblx0XHRsZXQgYWNjb3JkaW9uV3JhcHBlciA9IHRoaXMuY2xvc2VzdCgnLmFjY29yZGlvbl9fd3JhcHBlcicpXHJcblxyXG5cdFx0Y2xvc2VBbGxFeGNlcHQoYWNjb3JkaW9uV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX190aXRsZScpKVxyXG5cclxuXHRcdGlmIChpc09wZW4pIHtcclxuXHRcdFx0YWNjb3JkaW9uV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX190aXRsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdGFjY29yZGlvbkNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxyXG5cdFx0XHRhY2NvcmRpb25XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbi1hY3RpdmUnKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWNjb3JkaW9uV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX190aXRsZScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdGFjY29yZGlvbkNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYWNjb3JkaW9uQ29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnXHJcblx0XHRcdGFjY29yZGlvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uLWFjdGl2ZScpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8g0JzQtdC90Y4g0LHRg9GA0LPQtdGAXHJcblx0Y29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpXHJcblx0Y29uc3QgbWVudUJ1dHRvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b25fX2ljb24nKVxyXG5cdGNvbnN0IG1lbnVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2JvZHknKVxyXG5cclxuXHJcblx0aWYgKG1lbnVCdXR0b24pIHtcclxuXHRcdG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnX2xvY2snKVxyXG5cdFx0XHRtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKVxyXG5cdFx0XHRtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJylcclxuXHRcdFx0aWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWN0aXZlJykpIHtcclxuXHRcdFx0XHRtZW51QnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdfaWNvbi1NZW51JylcclxuXHRcdFx0XHRtZW51QnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdfaWNvbi1YJylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtZW51QnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdfaWNvbi1NZW51JylcclxuXHRcdFx0XHRtZW51QnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdfaWNvbi1YJylcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgbWVudUJ1dHRvblRleHQgPSBtZW51QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxyXG5cdFx0XHRpZiAobWVudUJ1dHRvblRleHQudGV4dENvbnRlbnQgPT09ICfQnNC10L3RjicpIHtcclxuXHRcdFx0XHRtZW51QnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICfQl9Cw0LrRgNC40YLQuCdcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtZW51QnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICfQnNC10L3RjidcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdCBidXR0b25TdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlciAuc3BvbGxlcnNfX3RpdGxlJylcclxuXHRjb25zdCBzdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXIgLnN1Ym1lbnUnKVxyXG5cclxuXHRpZiAoYnV0dG9uU3ViTWVudS5sZW5ndGggPiAwKSB7XHJcblx0XHRidXR0b25TdWJNZW51LmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHN1Yk1lbnVzLmZvckVhY2goKG1lbnUsIG1lbnVJbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKG1lbnVJbmRleCAhPT0gaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuXHRcdFx0XHRcdFx0YnV0dG9uU3ViTWVudVttZW51SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb25zdCBzdWJNZW51ID0gc3ViTWVudXNbaW5kZXhdXHJcblx0XHRcdFx0Y29uc3QgaXNBY3RpdmUgPSBzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpXHJcblx0XHRcdFx0c3ViTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93JylcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgIWlzQWN0aXZlKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1zZWFyY2gtbW9iaWxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtbW9iaWxlJykudmFsdWUgPSAnJ1xyXG5cdH0pXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2NsZWFyLWljb24nKS5mb3JFYWNoKGZ1bmN0aW9uKGNsZWFySWNvbikge1xyXG5cdFx0Y2xlYXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vINCe0YfQuNGB0YLQutCwIGlucHV0XHJcblx0XHRcdGxldCBpbnB1dFBhcmVudCA9IHRoaXMuY2xvc2VzdCgnLmZvcm1fX2lucHV0LWhvbGRlcicpXHJcblx0XHRcdGxldCBpbnB1dEZpZWxkID0gaW5wdXRQYXJlbnQgPyBpbnB1dFBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIDogbnVsbFxyXG5cdFx0XHRpZiAoaW5wdXRGaWVsZCkge1xyXG5cdFx0XHRcdGlucHV0RmllbGQudmFsdWUgPSAnJ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDQntGH0LjRgdGC0LrQsCB0ZXh0YXJlYVxyXG5cdFx0XHRsZXQgdGV4dGFyZWFQYXJlbnQgPSB0aGlzLmNsb3Nlc3QoJy5mb3JtX190ZXh0YXJlYS1ob2xkZXInKVxyXG5cdFx0XHRsZXQgdGV4dGFyZWFGaWVsZCA9IHRleHRhcmVhUGFyZW50ID8gdGV4dGFyZWFQYXJlbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKSA6IG51bGxcclxuXHRcdFx0aWYgKHRleHRhcmVhRmllbGQpIHtcclxuXHRcdFx0XHR0ZXh0YXJlYUZpZWxkLnZhbHVlID0gJydcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGVhci1zZWFyY2gnKS5mb3JFYWNoKGZ1bmN0aW9uKGNsZWFyQnV0dG9uKSB7XHJcblx0XHRjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5jbG9zZXN0KCcuYmFyX19pbnB1dC1ob2xkZXInKVxyXG5cdFx0XHRwYXJlbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpLnZhbHVlID0gJydcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAxM2RkOWE2ZWE0NTVkZDkyNzljXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9