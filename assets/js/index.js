// 輪播
function startSlideshow(selector, intervalTime) {
    let current = 0;
    const slides = document.querySelectorAll(selector);
    const total = slides.length;

    if (total === 0) return;  // 如果找不到圖片就結束

    setInterval(() => {
        slides[current].classList.remove('active');

        current = (current + 1) % total;

        slides[current].classList.add('active');
    }, intervalTime);
}

startSlideshow('.intro-slideshow .slide', 3000);

startSlideshow('#ad-banner .slide', 4000);

// 左側視窗切換邏輯
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