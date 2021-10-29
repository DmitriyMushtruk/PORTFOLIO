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


// var str = 'Я, ты, он, она';
//    str = "<span>" + str.split(", ").join("</span> <span>") + "</span>";
//    alert(str)



var typedFirst = new Typed('.tagline', {
    strings: [".myName()"],
    typeSpeed: 150,
    showCursor: false
  });

  var typedSecond = new Typed('.tagline1', {
    strings: [".myRole()"],
    typeSpeed: 150,
    startDelay : 2000,
    showCursor: false
  });



// var c = document.getElementById("c");
// var ctx = c.getContext("2d");

// //making the canvas full screen
// c.height = window.innerHeight;
// c.width = window.innerWidth;

// //chinese characters - taken from the unicode charset
// var eng = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
// //converting the string into an array of single characters
// eng = eng.split("");

// var font_size = 14;
// var columns = c.width/font_size; //number of columns for the rain
// //an array of drops - one per column
// var drops = [];
// //x below is the x coordinate
// //1 = y co-ordinate of the drop(same for every drop initially)
// for(var x = 0; x < columns; x++)
// 	drops[x] = 1; 

// //drawing the characters
// function draw()
// {
// 	//Black BG for the canvas
// 	//translucent BG to show trail
// 	ctx.fillStyle = "rgba(34, 40, 49, 0.05)";
// 	ctx.fillRect(0, 0, c.width, c.height);
	
// 	ctx.fillStyle = "#fd7013"; //green text
// 	ctx.font = font_size + "px arial";
// 	//looping over drops
// 	for(var i = 0; i < drops.length; i++)
// 	{
// 		//a random chinese character to print
// 		var text = eng[Math.floor(Math.random()*eng.length)];
// 		//x = i*font_size, y = value of drops[i]*font_size
// 		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
// 		//sending the drop back to the top randomly after it has crossed the screen
// 		//adding a randomness to the reset to make the drops scattered on the Y axis
// 		if(drops[i]*font_size > c.height && Math.random() > 0.975)
// 			drops[i] = 0;
		
// 		//incrementing Y coordinate
// 		drops[i]++;
// 	}
// }

// setInterval(draw, 1000);