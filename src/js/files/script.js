// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


jQuery(document).ready(function ($) {
   initSwiper();


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
