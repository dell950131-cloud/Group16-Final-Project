let currentMainIndex = 0;
        
function changeMainImage(direction) {
    const slides = document.querySelectorAll('.main-slide');
    const totalSlides = slides.length;

    slides[currentMainIndex].classList.remove('active');

    currentMainIndex += direction;

    if (currentMainIndex >= totalSlides) {
        currentMainIndex = 0; 
    } else if (currentMainIndex < 0) {
        currentMainIndex = totalSlides - 1; 
    }

    slides[currentMainIndex].classList.add('active');
}

function addToCartWithDelay() {
    const btn = document.getElementById('cartBtn');
    const originalText = btn.textContent;
    
    btn.textContent = "處理中...";
    btn.style.backgroundColor = "#27ae60"; 
    btn.style.cursor = "wait"; 

    setTimeout(function() {
        window.location.href = 'cart.html'; 
    }, 500);
}

let currentIndex = 0;
const totalItems = 5; 
const itemsVisible = 3; 
const track = document.getElementById('track');

function moveSlide(direction) {
    const maxIndex = totalItems - itemsVisible;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const translateValue = -(currentIndex * (100 / itemsVisible));
    track.style.transform = `translateX(${translateValue}%)`;
}
