function switchTab(type) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => form.classList.remove('active'));

    if (type === 'login') {
        tabs[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        tabs[1].classList.add('active');
        document.getElementById('registerForm').classList.add('active');
    }
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    if(email) {
        alert(`歡迎回來，${email}！\n即將為您跳轉至會員中心...`); 
        setTimeout(() => {
            window.location.href = 'memberdata.html';
        }, 500);
    } else {
        alert("請輸入帳號密碼！");
    }
}

function handleRegister() {
    const name = document.getElementById('reg-name').value;
    if(name) {
        alert(`註冊成功！歡迎加入 Slow Steep，${name}。\n請重新登入。`);
        switchTab('login'); 
    } else {
        alert("請填寫完整資訊！");
    }
}
