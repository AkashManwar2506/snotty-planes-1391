





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


// continue payment section
let paymentBtn = document.getElementById('continue-to-payment-btn')
let paypal = document.getElementById('paypal')
let visa = document.getElementById('visa')
let afterpay = document.getElementById('afterpay')
let klarna = document.getElementById('klarna')


paypal.addEventListener('click', () => {
    paymentBtn.innerHTML = `
        <div class="payment-btn-type" for="paypal">
            <img style="width: 60%; margin-left: 20px; " src="https://www.finishline.com/store/assets/images/PayPal.svg" alt="">
        </div>
    `
    paymentBtn.style.backgroundColor = "rgb(239, 239, 0)"
})

afterpay.addEventListener('click', () => {
    paymentBtn.innerHTML = `
        <div for="afterpay">
            <img style="width: 50%;" src="./afterpay.svg" alt="">
        </div>
    `
    paymentBtn.style.backgroundColor = "#b2fce4"
})

visa.addEventListener('click', () => {
    paymentBtn.innerHTML = `
        <div for="visa">
            <p>Place Order</p>
        </div>
    `
    paymentBtn.style.backgroundColor = '#fff'

})

klarna.addEventListener('click', () => {

    paymentBtn.innerHTML = `
        <div for="klarna">
            <img style="width: 20%;" src="./klarna.svg" alt="">
        </div>
    `
    paymentBtn.style.backgroundColor = "#f4b3c7"
})