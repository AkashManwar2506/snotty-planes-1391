//  JS for Nav section 

// if logged in then innertext of account button will be user name
let loggedIn = localStorage.getItem("loggedIn");
let user = localStorage.getItem("loggedInUser")
// console.log(user)

if (loggedIn == "true") {
        document.querySelector("#account_btn").innerText = user;
}

// making the cart dynamic 

let bag_btn = document.querySelector("#bag_btn");

let bag_items = localStorage.getItem("bag_items");

if (bag_items >= 1 && loggedIn == "true") {
        bag_btn.innerText = bag_items;
} else {
        bag_btn.style.display = "none"
}




//fetching data here
let url = "https://gifted-blue-binturong.cyclic.app/mens";
let globalData = []

fetch(url).then((res) => {
                return res.json();
        })
        .then((data) => {
                console.log(data);
                globalData = data;
                displayData(data);
        });



// mapping data here
let search_div = document.querySelector("#search_div");

function displayData(data) {
        search_div.innerHTML = null;
        data.map((item, index) => {

        search_div.innerHTML += `
                <div id="card">
                <div>
                        <img
                                src=${item.productImage}
                                alt=${item.product_name}
                        />
                </div>

                <div>
                        <h5>${item.product_card.name.substring(0, 33)}</h5>
                        <p> ${"$ " + item.fullPrice}</p>
                        <p>${item.product_card.aggregateRating.ratingValue + ' ★★★★★' + " "}  <span>${"(" + item.product_card.aggregateRating.reviewCount + ")"}</span></p>
                </div>
                </div>
                </div>
        `

        })

}


//    search functionality here
let search_content = document.querySelector("#search_content");

let search_input = document.querySelector("#search_input");
search_input.addEventListener("input", searchFilter);

document.querySelector("body").addEventListener("click", () => {
        search_content.style.display = "none";
})
// search_input.addEventListener("click",()=>{
//  search_content.style.display="none"
// })

let data_length = document.querySelector("#data_length")

function searchFilter() {
        console.log("success")
        let filtered_data = globalData.filter((item, index) => {

                return item.product_card.name.toUpperCase().includes(search_input.value.toUpperCase());


        })
        data_length.innerText = `${filtered_data.length} search results found`


        search_content.style.display = "block"
        displayData(filtered_data)

        // console.log(filtered_data)
}



















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
    if(bag.length !== 0){
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
    }else{
        productList.innerHTML = `
            <h2>Cart is empty</h2>
        `
    }
}
productCardGenerator()


// Quantity Increment and Decrement operation

let increment = (id) => {
    let selectedItem = id
    let search = bag.find((x) => x.id === selectedItem)
    // console.log(id)
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
    // console.log(search.qty)
    document.getElementById(id).innerHTML = `Qty ${search.qty}`
}



// Purchase Summary section #billing calculation
let subTotal = document.getElementById('product-price')
let total = document.getElementById('total-bill')

// bag.map(item=>)
// console.log(subTotal.innerText,total.innerText)
// console.log(bag)
