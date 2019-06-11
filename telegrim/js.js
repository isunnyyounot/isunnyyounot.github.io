let image_container = document.getElementById("image-container");
let slides = document.getElementsByClassName("slider-image");
let dots = document.getElementsByClassName("dot");

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	console.log(n);
  let i;
  if (n > slides.length-1) {slideIndex = 0; n = 0;} 
  if (n < 0) {slideIndex = slides.length-1; n = slides.length-1;}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(n);
  image_container.style.left = +(-800*n) + "px"; 
  dots[slideIndex].className += " active";
}

let schedulee = document.getElementById('contact');

function schedule(){
	schedulee.style.border = "3px solid red";
	let border = 3;
	let id = setInterval(frame, 50);
	function frame(){
		if(border == 0)clearInterval(id);
		else {
			border-=0.3;
			schedulee.style.border = +border + "px solid red";
		}
	}
}