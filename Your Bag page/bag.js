

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


// Button functionality
let moreBtn = document.querySelector('.continue-to-payment-btn:nth-child(3)')
let klaranbtn = document.querySelector('.continue-to-payment-btn:nth-child(4)')
let paypalbtn = document.querySelector('.continue-to-payment-btn:nth-child(5)')
let fewOptBtn = document.getElementById('show-less-opt')

moreBtn.addEventListener('click', () => {

    moreBtn.style.display = 'none'
    klaranbtn.style.display = 'block'
    paypalbtn.style.display = 'block'
    fewOptBtn.style.display = 'block'

    document.getElementById('main-container').style.width = '90%'

})

fewOptBtn.addEventListener('click', () => {
    moreBtn.style.display = 'block'
    klaranbtn.style.display = 'none'
    paypalbtn.style.display = 'none'
    fewOptBtn.style.display = 'none'

})