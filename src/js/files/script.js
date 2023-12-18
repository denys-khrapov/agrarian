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


