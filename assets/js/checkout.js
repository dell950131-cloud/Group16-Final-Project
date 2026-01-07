function finishOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    alert("感謝您的訂購，" + name + "！\n我們已收到您的訂單，將盡快為您出貨。");

    window.location.href = 'main.html';
}
