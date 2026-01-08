function updateTotal() {
    const price = 50; 
    const shipping = 30; 
    
    const qtySelect = document.querySelector('.qty-select');
    const qty = parseInt(qtySelect.value);

    const subtotal = price * qty;
    const total = subtotal + shipping;

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('final-total').innerText = total;
}
