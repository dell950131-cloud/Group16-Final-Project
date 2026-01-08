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
// ---評論彈窗邏輯---//

// 打開彈窗
function openReviewModal() {
    document.getElementById('reviewModal').style.display = 'block';
}

// 關閉彈窗
function closeReviewModal() {
    document.getElementById('reviewModal').style.display = 'none';
}

// 點擊遮罩空白處也可以關閉
window.onclick = function(event) {
    const modal = document.getElementById('reviewModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 送出評論
function submitReview(event) {
    event.preventDefault();
    const name = document.getElementById('reviewName').value;
    alert("感謝您的評論，" + name + "！\n您的評論已送出，審核通過後將會顯示。");
    document.getElementById('reviewForm').reset();
    closeReviewModal();
}
