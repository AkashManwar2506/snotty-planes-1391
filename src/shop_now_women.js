let url = "https://gifted-blue-binturong.cyclic.app/women"
async function getData(url) {
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data)
        showCard(data)
    } catch (error) {
        console.error(error);
    }

}
getData(url);
let menu = document.getElementById('menu');

function showCard(arr) {
    arr.map((e) => {
        let card = document.createElement('div');
        card.setAttribute("class", "card");
        card.setAttribute("id", "card" + e.id)

        let img = document.createElement('img');
        img.src = e.productImage;

        let colorTxt = document.createElement('span');
        colorTxt.innerHTML = e.sc_ckEbSK;

        let title = document.createElement('span');
        title.innerHTML = e.product_card.name;

        let price = document.createElement('span');
        price.innerHTML = Math.abs(+e.fullPrice);

        let startDiv = createStars();

        card.append(img, colorTxt, title, price, startDiv);
        menu.append(card);

    });
}

function createStars() {
    let star1 = document.createElement('span');
    star1.className = "fa fa-star";

    let star2 = document.createElement('span');
    star2.className = "fa fa-star";

    let star3 = document.createElement('span');
    star3.className = "fa fa-star";

    let star4 = document.createElement('span');
    star4.className = "fa fa-star";

    let star5 = document.createElement('span');
    star5.className = "fa fa-star";

    let div = document.createElement('div');
    div.append(star1, star2, star3, star4, star5);
    return div;
}

function showBrands(arr) {
    let brandDiv = document.getElementById('brand');
    arr.map((e) => {

        let img = document.createElement('img');
        img.src = e.img;

        brandDiv.append(img);
    });

}
let brandsArr = [
    {
        img: "https://i.pinimg.com/736x/1b/e7/4b/1be74b1feb2335ef6bdbc88ac29aba8a.jpg"
    },
    {
        img: "https://i.pinimg.com/originals/d1/3f/c5/d13fc592b435d7a594998d04e1cd0801.jpg"
    },
    {
        img: "https://static.vecteezy.com/system/resources/previews/010/994/248/original/puma-logo-white-symbol-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg"
    },
    {
        img: "https://logodix.com/logo/411011.gif"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdjr4Rmm3IVmaipkqzJpvIRfP5i7KsqJKrKc6PE4-ZjeQF0Sw_px32zt0wkkePm0xVcc&usqp=CAU"
    },
    {
        img: "https://th.bing.com/th/id/OIP.DvP-LdJhwkppilBqZn5c3QHaHa?pid=ImgDet&rs=1"
    },
    {
        img: "https://i.pinimg.com/originals/f3/59/14/f35914599927dca060d2038aa174e504.png"
    },
    {
        img: "https://i1.sndcdn.com/artworks-000123540159-jnxs7u-t500x500.jpg"
    },
    {
        img: "https://logos-download.com/wp-content/uploads/2016/10/The_North_Face_logo_black.png"
    },
    {
        img: "https://cdn2.stormgrounds.com/stormgrounds-cdn/media/Under-Armor-Logo.jpg"
    }


]
showBrands(brandsArr);

let sizeArr = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 17]

function showSizeBoxes(arr) {
    let sizeDiv = document.getElementById('size');
    arr.map((e) => {
        let numDiv = document.createElement('div');
        numDiv.setAttribute("class", "num-div");

        let number = document.createElement('span');
        number.innerHTML = e;

        numDiv.append(number);
        sizeDiv.append(numDiv);
    });

}
showSizeBoxes(sizeArr);

let priceArr = ["Under $50", "$50-$100", "$100-$150", "$150-$200", "$200-$250", "Over $250"]

function showPrice(arr) {
    let priceDivContainer = document.getElementById('price');
    arr.map((e) => {
        let priceDiv = document.createElement('div');
        priceDiv.setAttribute("class", "price-div");

        let price = document.createElement('span');
        price.innerHTML = e;

        let checkBox = document.createElement('input')
        checkBox.type = "checkBox";

        priceDiv.append(price, checkBox);
        priceDivContainer.append(priceDiv);

    });

}
showPrice(priceArr);

let colorsArr = ["Black", "Grey", "White", "Blue", "Green", "Red", "Beige", "Off-White", "Orange", "Multi Color", "Brown", "Pink", "Purple", "Yellow", "Metallic"]

function showColors(arr) {
    let colorContainer = document.getElementById('color');
    arr.map((e) => {
        let colorDiv = document.createElement('div');

        let color = document.createElement('div');
        color.setAttribute("class", "color-div");
        color.style.backgroundColor = e.toLowerCase();

        let colorName = document.createElement('span')
        colorName.innerHTML = e;

        colorDiv.append(color, colorName);
        colorContainer.append(colorDiv);

    });
}
showColors(colorsArr);

let collectionsArr = ["Nike Air Max", "Nike Air Vapormax", "Nike Air Max 97", "Nike Air Max 95", "Nike Air Max 270", "Nike Air Max 90", "Nike Huarache", "Nike React", "Nike Pegasus", "adidas Boost", "adidas UltraBOOST", "adidas NMD", "adidas Originals", "Reebok Classics", "New Balance Classics", "Nike Sportswear",]

function showCollection(arr) {
    let collectionContainerDiv = document.getElementById('collection');
    arr.map((e) => {
        let collectionDiv = document.createElement('div');
        collectionDiv.setAttribute("class", "collection-div");

        let collection = document.createElement('span');
        collection.innerHTML = e;

        let checkBox = document.createElement('input')
        checkBox.type = "checkBox";

        collectionDiv.append(collection, checkBox);
        collectionContainerDiv.append(collectionDiv);

    });

}
showCollection(collectionsArr);

