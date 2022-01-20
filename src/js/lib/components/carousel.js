import $ from '../core';

$.prototype.carousel = function(created, autoPlay) {

  //corect bag when width of screen is change
  let savedWidth = document.documentElement.scrollWidth;

  window.addEventListener('resize', function() {
    if (document.documentElement.scrollWidth !== savedWidth) {
      savedWidth = document.documentElement.scrollWidth;
      window.location.reload();
    }
  });
  
  if (created) {
    for (let i = 0; i < this.length; i++) {
      const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
      const slides = this[i].querySelectorAll('.carousel-item');
      const slidesField = this[i].querySelector('.carousel-slides');
      const dots = this[i].querySelectorAll('.carousel-indicators li');
      const desc = this[i].querySelectorAll('.carousel-text');



      slidesField.style.width = 100 * slides.length + '%';
      slides.forEach(slide => {
        slide.style.width = width;
      });

      let offset = 0;
      let slideIndex = 0;
      let slideInt = 0;

      function setDesc() {
        for (var z = 0; z < desc.length; z++) {
          desc[z].style.display = 'none';
          desc[slideIndex].style.display = 'block';
        }
      }

      setDesc();

      function setInt(content, delay) {
        slideInt = setInterval(content, delay);
      }

      function clearInt(content) {
        clearInterval(content);
      }

      if (autoPlay) {
        const clickNextSlide = () => $(this[i].querySelector('[data-slide="next"]')).click();
        setInt(clickNextSlide, autoPlay);
        this[i].addEventListener('mouseover', () => {
          clearInt(slideInt);
        });
        this[i].addEventListener('mouseleave', () => {
          setInt(clickNextSlide, autoPlay);
        });
        //  });
      }

      $(this[i].querySelector('[data-slide="next"]')).click((e) => {
        e.preventDefault();
        if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
          offset = 0;
        } else {
          offset += +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length - 1) {
          slideIndex = 0;
        } else {
          slideIndex++;
        }
        if (dots.length !== 0) {
          dots.forEach(dot => dot.classList.remove('active'));
          dots[slideIndex].classList.add('active');
        }
        setDesc();

      });

      $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
        e.preventDefault();
        if (offset == 0) {
          offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
          offset -= +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 0) {
          slideIndex = slides.length - 1;
        } else {
          slideIndex--;
        }
        if (dots.length !== 0) {
          dots.forEach(dot => dot.classList.remove('active'));
          dots[slideIndex].classList.add('active');
        }

        setDesc();

      });

      const sliderId = this[i].getAttribute('id');
      const pathLi = (`#${sliderId} .carousel-indicators li`);

      $(`#${sliderId} .carousel-indicators li`).click(e => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;
        offset = +width.replace(/\D/g, '') * slideTo;

        slidesField.style.transform = `translateX(-${offset}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');

        setDesc();

      });
    }
  }
};


$.prototype.createCarousel = function({
  slides = {},
  dots = true,
  autoPlay = false,
  desc = {},
  length = 0
}) {

  for (let i = 0; i < this.length; i++) {
    let carousel = document.createElement('div');
    const date = Date.now();
    let id = "carusel" + date + 1;
    carousel.classList.add('carousel');
    carousel.setAttribute('id', id);
    carousel.setAttribute('data-toggle', 'carousel');

    const liItems = [];
    const slidesBlock = [];
    const textBlock = [];
    for (let j = 0; j < length; j++) {
      if (dots) {
        const li = document.createElement('li');
        if (j == 0) {
          li.classList.add('active');
        }
        li.setAttribute('data-slide-to', j);
        liItems.push(li);
      }

      const imgBlock = document.createElement('div');
      imgBlock.classList.add("carousel-item");
      const img = document.createElement('img');
      img.setAttribute('src', slides[j]);
      imgBlock.append(img);
      slidesBlock.push(imgBlock);

      const descBlock = document.createElement('div');
      descBlock.classList.add("carousel-text");
      descBlock.textContent = desc[j];
      textBlock.push(descBlock);

    }



    carousel.innerHTML = //<div class="carousel" id=${carouselId}>
      `   <ol class="carousel-indicators">

          </ol>
          <div class="carousel-inner">
              <div class="carousel-slides">

              </div>
          </div>
          <div class="carousel-desc">

          </div>
          <a href="#" class="carousel-prev" data-slide="prev">
              <span class="carousel-prev-icon">&lt;</span>
          </a>
          <a href="#" class="carousel-next" data-slide="next">
              <span class="carousel-next-icon">&gt;</span>
          </a>`;

    carousel.querySelector(".carousel-indicators").append(...liItems);
    carousel.querySelector(".carousel-slides").append(...slidesBlock);
    carousel.querySelector(".carousel-desc").append(...textBlock);
    if (!this[i].querySelector('.carousel')) {
      for (var k = 0; k < this.length; k++) {
        this[k].appendChild(carousel);
      }
    }
    $(`#${id}`).carousel(true, autoPlay);
  }

};





// my option of carousel

// import $ from '../core';
//
// $.prototype.carousel = function() {
//   for (var i = 0; i < this.length; i++) {
//     let arrowLeft = this[i].querySelector(".carousel-left"),
//       arrowRight = this[i].querySelector(".carousel-right"),
//       dotsBlock = this[i].querySelector(".carousel-dots"),
//       dots = dotsBlock.querySelectorAll(".carousel-dot"),
//       slidesBlock = this[i].querySelector(".carousel-inner"),
//       slides = slidesBlock.querySelectorAll("img");
//
//       this.slideIndex = 0;
//
//
//
//     const triggercarousel = () => {
//       for (var i = 0; i < slides.length; i++) {
//         $(slides[this.slideIndex]).siblings().fadeOut(1);
//         $(slides[this.slideIndex]).fadeIn(500);
//         slides[i].classList.remove("active");
//         slides[this.slideIndex].classList.add("active");
//         dots[i].classList.remove("active");
//         dots[this.slideIndex].classList.add("active");
//       }
//     };
//
//     const triggercarouselLeft = () => {
//       this.slideIndex--;
//       if (this.slideIndex < 0) {
//         this.slideIndex = slides.length - 1;
//       }
//
//       triggercarousel();
//     }
//
//     const triggercarouselRight = () => {
//       this.slideIndex++;
//       if (this.slideIndex > slides.length - 1) {
//         this.slideIndex = 0;
//       }
//       triggercarousel();
//     }
//
//     const triggercarouselDots = (e) => {
//       const target = e.target;
//       dots.forEach((item, i) => {
//         if (target === item) {
//           this.slideIndex = i;
//         }
//       });
//       triggercarousel();
//     }
//
//     $(arrowLeft).click(triggercarouselLeft);
//     $(arrowRight).click(triggercarouselRight);
//     dots.forEach((item) => {
//       $(item).click(triggercarouselDots);
//     });
//   }
// };
//
//
// $("#fir").carousel();
// $("#sec").carousel();
