// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


jQuery(document).ready(function ($) {
   initSwiper();
	initHoverNewsCard();

	function initSwiper() {

      let swiperClients = new Swiper(".slider-clients", {
         slidesPerView: 'auto',
         spaceBetween: 24,
         loop: true,
			speed: 4000,
			autoplay: {
				delay: 300,
				disableOnInteraction: false,
			},
			// freeMode: true,
			// allowTouchMove: false,
			breakpoints: {
            1280: {
               spaceBetween: 48,
            },
         },
      });


		let swiperCompleted = new Swiper(".slider-completed", {
         slidesPerView: 'auto',
         spaceBetween: 0,
         loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
         breakpoints: {
            1280: {
               spaceBetween: 0,
            },
         },
      });

		let swiperOffers = new Swiper(".slider-offers", {
         slidesPerView: 'auto',
			initialSlide: 1,
         spaceBetween: 16,
         loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
         breakpoints: {
            1280: {
               spaceBetween: 24,
					// slidesPerView: 'auto',
            },
         },
      });

		var swiperHero = new Swiper('.slider-hero', {
			slidesPerView: 1,
			spaceBetween: 16,
			effect: 'fade',
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: '.swiper-pagination',
					clickable: true,
			},
			on: {
			init: function () {
				const slide = this.slides[this.activeIndex];
				this.el.style.backgroundImage = `url(${slide.dataset.background})`;
				checkSwiperButtons();
			},
			slideChange: function () {
				const slide = this.slides[this.activeIndex];
				this.el.style.backgroundImage = `url(${slide.dataset.background})`;
	
			}
			}
	
			
		});

// let mySwiper = new Swiper('.test-slider', {
// 	slidesPerView: 1,
// 	// Параметры слайдера
// 	autoplay: {
// 	  delay: 4000, // Задержка между прокруткой слайдов (4 секунды)
// 	},
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  type: 'bullets',
// 	  clickable: true,
// 	  // Собственный рендеринг буллетов пагинации
// 	//   renderBullet: function (index, className) {
// 	// 	 return '<span class="' + className + '">' + (index + 1) + '</span>';
// 	//   },
// 	},
// 	// Остальные параметры...
//  });

   }

	function initHoverNewsCard(){
		let windowWidth = $(window).width();
		if(windowWidth >= 1280) {
		$('.item-news').hover(
			 function() { // При наведении курсора
				  $(this).find('.item-news__text-holder-js').css('max-height', '158px'); // Увеличиваем высоту
			},
			 function() { // Когда курсор убирается
				  $(this).find('.item-news__text-holder-js').css('max-height', '80px'); // Возвращаем начальную высоту
			}
		);
			} else{
				
			}
	}

	function checkSwiperButtons() {
		var nextButton = $('.slider-hero .swiper-button-next');
		var prevButton = $('.slider-hero .swiper-button-prev');
		var sliderHero = $('.slider-hero');


		if (nextButton.length && prevButton.length && sliderHero.length) {
			 if (nextButton.hasClass('swiper-button-lock') || prevButton.hasClass('swiper-button-lock')) {
				  sliderHero.addClass('not-slider');
			 } else {
				  sliderHero.removeClass('not-slider');
			 }
		}
	}
});



document.addEventListener("DOMContentLoaded", function() {
	var acc = document.getElementsByClassName("accordion__title");
	var accClose = document.getElementsByClassName("accordion__close");
	var accCount = document.getElementsByClassName("accordion__count");
	var i;
	
	function closeAllExcept(activeAcc) {
		 for (var j = 0; j < acc.length; j++) {
			  if (acc[j] !== activeAcc) {
					acc[j].classList.remove("active");
					acc[j].nextElementSibling.style.maxHeight = null;
					acc[j].closest('.accordion__wrapper').classList.remove("accordion-active");
			  }
		 }
	}
	
	for (i = 0; i < acc.length; i++) {
		 acc[i].addEventListener("click", toggleAccordion);
	}
	
	for (i = 0; i < accClose.length; i++) {
		 accClose[i].addEventListener("click", toggleAccordion);
	}
	
	for (i = 0; i < accCount.length; i++) {
		 accCount[i].addEventListener("click", function() {
			  toggleAccordion.call(this.parentNode.querySelector('.accordion__title'));
		 });
	}
	
	function toggleAccordion() {
		 var accordionContent = this.classList.contains("accordion__close") ? 
			  this.previousElementSibling.querySelector(".accordion__content") : 
			  this.nextElementSibling;
		 var isOpen = accordionContent.style.maxHeight;
		 var accordionWrapper = this.closest('.accordion__wrapper');
	
		 closeAllExcept(accordionWrapper.querySelector('.accordion__title'));
	
		 if (isOpen) {
			  accordionWrapper.querySelector('.accordion__title').classList.remove("active");
			  accordionContent.style.maxHeight = null;
			  accordionWrapper.classList.remove("accordion-active");
		 } else {
			  accordionWrapper.querySelector('.accordion__title').classList.add("active");
			  accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
			  accordionWrapper.classList.add("accordion-active");
		 }
	}

});

