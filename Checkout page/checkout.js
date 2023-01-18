// Coupon show and hide field section.
document.getElementById('enter-coupon-code').addEventListener('click', () => {
    let showOrNot = document.getElementById('show-coupon-field')
    let couponField = document.getElementById('coupon-section')
    if (showOrNot.innerText == '—') {
        showOrNot.innerText = '+'
        couponField.style.display = 'none'
    } else if (showOrNot.innerText = '+') {
        showOrNot.innerText = '—'
        couponField.style.display = 'flex'
    }
})

// Purchase summary
let estimateShipping = document.getElementById('shipping-charges')
let deliveryMethod = document.getElementsByClassName('myradio')

if(deliveryMethod.value == 'standard'){
    estimateShipping.innerText = 8.00;
}else if(deliveryMethod.value == 'upgraded'){
    estimateShipping.innerText = 10.99;
}else if(deliveryMethod.value == 'rush'){
    estimateShipping.innerText = 22.99;
}else if(deliveryMethod.value == 'express'){
    estimateShipping.innerText = 32.99;
}
