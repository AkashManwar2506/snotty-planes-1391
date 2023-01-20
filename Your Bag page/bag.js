// let mensData = JSON.parse(localStorage.getItem(''))

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


// Button show and hide functionality

let moreBtn = document.querySelector('.continue-to-payment-btn:nth-child(3)')
let klaranbtn = document.querySelector('.continue-to-payment-btn:nth-child(4)')
let paypalbtn = document.querySelector('.continue-to-payment-btn:nth-child(5)')
let fewOptBtn = document.getElementById('show-less-opt')

document.getElementById('main-container').style.width = '90%'

moreBtn.addEventListener('click', () => {

    moreBtn.style.display = 'none'
    klaranbtn.style.display = 'block'
    paypalbtn.style.display = 'block'
    fewOptBtn.style.display = 'block'

})

fewOptBtn.addEventListener('click', () => {
    moreBtn.style.display = 'block'
    klaranbtn.style.display = 'none'
    paypalbtn.style.display = 'none'
    fewOptBtn.style.display = 'none'

})



// Display all the products added to the Cart

let productList = document.getElementById('product-list');
// console.log(productList)
let bag = JSON.parse(localStorage.getItem('bought-item')) || []

let mockProductData = [
    {
        id: 1,
        productName: "Men's Puma Team Official Emblem Graphic Crewneck Sweatshirt.",
        productImg: "https://media.finishline.com/s/finishline/53890001_001?$default$&h=150&w=150&bg=rgb(237,237,237)&fmt=webp",
        productSize: 'M',
        productColor: 'Black/Varsity Green',
        productPrice: 20,
    },
    {
        id: 2,
        productName: "Men's Puma Team Official Emblem Graphic Crewneck Sweatshirt.",
        productImg: "https://media.finishline.com/s/finishline/53890001_001?$default$&h=150&w=150&bg=rgb(237,237,237)&fmt=webp",
        productSize: 'M',
        productColor: 'Black/Varsity Green',
        productPrice: 20,
    }
]

// console.log(bag)
let productCardGenerator = () => {

        return (productList.innerHTML = mockProductData.map((item) => {
            let { id, productName, productImg, productSize, productColor, productPrice } = item
            let search = bag.find((x) => x.id === id) || []

            return `
            <div id=product-id-${id} class="products">
                <div>
                    <img src="${productImg}" alt="">
                </div>
                <div>
                    <div>
                        <p><b>${productName}</b></p>
                    </div>
                    <p>Size: ${productSize}</p>
                    <p>Color: ${productColor}</p>
                    <p><a href="#">Save for later</a></p>
                </div>
                <div>
                    <div class="qty-btn">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantiy" style="width: fit-content; height: fit-content;">Qty ${search.qty}</div>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div>
                    <div>
                        <p>$${productPrice}.00</p>
                    </div>
                </div>
                <div>
                    <a id="remove-item" href="#"><i class="fa-solid fa-xmark"></i></a>
                </div>
    
            </div>
        `
        }).join(""));


}
productCardGenerator()


// Quantity Increment and Decrement operation

let increment = (id) => {
    let selectedItem = id
    let search = bag.find((x) => x.id === selectedItem)

    if (search == undefined) {
        bag.push({
            id: selectedItem,
            qty: 1
        })
    } else {
        search.qty++
    }
    localStorage.setItem('bought-item', JSON.stringify(bag))
    // console.log(bag)
    update(selectedItem)
}
let decrement = (id) => {
    let selectedItem = id
    let search = bag.find((x) => x.id === selectedItem)

    if (search == undefined) return
    else if (search.qty == 0) return;
    else {
        search.qty--
    }
    // console.log(bag)
    update(selectedItem)
    bag = bag.filter((product) => product.qty !== 0)
    // productCardGenerator()
    localStorage.setItem('bought-item', JSON.stringify(bag))
}
let update = (id) => {
    let search = bag.find((x) => x.id == id)
    console.log(search.qty)
    document.getElementById(id).innerHTML = `Qty ${search.qty}`
}



// Purchase Summary section #billing calculation
let subTotal = document.getElementById('product-price')
let total = document.getElementById('total-bill')

// bag.map(item=>)
// console.log(subTotal.innerText,total.innerText)
// console.log(bag)
