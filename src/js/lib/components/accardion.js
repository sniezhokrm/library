import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
        });
    }
};

$('.accordion-head').accordion();

// my attempt accordion with display none and with change path icons;
// $.prototype.accordion = function() {
//   let checkIcon = false;
//   for (let i = 0; i < this.length; i++) {
//     this[i].addEventListener('click', () => {
//       const arr = $(".accordion-content").eq(i);
//       console.log(arr);
//       arr.fadeToggle(300);
//       const src = checkIcon ? "/assets/icons/plus.png" : "/assets/icons/minus.png";
//       this[i].setAttribute('src', src);
//       checkIcon = !checkIcon;
//     });
//   }
// };
//
// $(".accordion-head").accordion();
