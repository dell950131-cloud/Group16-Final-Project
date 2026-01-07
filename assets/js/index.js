let currentSlide = 0;
const slides = document.querySelectorAll('.intro-slideshow .slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function toggleSidebar() {
    const sidebar = document.getElementById('mySidebar');
    const icon = document.getElementById('toggle-icon');
    
    sidebar.classList.toggle('closed');
    
    if (sidebar.classList.contains('closed')) {
        icon.innerHTML = "▶"; 
    } else {
        icon.innerHTML = "◀";
    }
}

setInterval(nextSlide, 3000);

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
     window.scrollTo({
      top: 0,
      behavior: 'smooth' 
 });
}

window.addEventListener('click', function() {
    var audio = document.getElementById("bgMusic");
    audio.volume = 0.1;
    if (audio.paused) {
        audio.play();
    }
}, { once: true }); 