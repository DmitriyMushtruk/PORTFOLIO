const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu')

    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open"),
    menu.classList.toggle("active")
});

// const menu = document.querySelector('.menu')

// menu.addEventListener("click", () => {
//     menu.classList.toggle("active")
// });


// $(document).ready(function(){
// 	$('.hamburger').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

// const hamburger = document.querySelector('.hamburger'),
//       menu = document.querySelector('.menu'),
//       closeElem = document.querySelector('.menu__close')


// hamburger.addEventListener('click', () => {
//     hamburger.classList.add('open');
//     menu.classList.add('active')
// });

// // hamburger.addEventListener('click', () => {
// //     menu.classList.add('active')
// // });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active')
// });

const counters = document.querySelectorAll('.experience__ratings-counter'),
      lines = document.querySelectorAll('.experience__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {

            $('.pageup').fadeIn();

        } else {
            $('.pageup').fadeOut();
        }
    });

});