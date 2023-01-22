// if logged in then innertext of account button will be user name
let loggedIn = localStorage.getItem("loggedIn");
let user = localStorage.getItem("loggedInUser");
// console.log(user)
let login_btn = document.querySelector("#login_btn");

if (loggedIn == "true") {
  document.querySelector("#account_btn").innerText = user;

  login_btn.innerText = "Logout";
  login_btn.addEventListener("click", () => {
    let ans = confirm("Are you sure you want to log out ?");

    if (ans) {
      alert("Logged out successfully");
      localStorage.setItem("loggedIn", "false");
      location.reload();
    }
  });
} else {
  document.querySelector("#account_btn").innerText = "Account";

  login_btn.innerText = "Login";
  login_btn.addEventListener("click", () => {
    window.location.href = "./login_user.html";
  });
}

// making the cart dynamic

let bag_btn = document.querySelector("#bag_btn");

let bag_items = localStorage.getItem("bag_items");

if (bag_items >= 1 && loggedIn == "true") {
  bag_btn.innerText = bag_items;
} else {
  bag_btn.style.display = "none";
}

//fetching data here
let url = "https://gifted-blue-binturong.cyclic.app/mens";
let globalData = [];

fetch(url)
  .then((res) => {
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
          <p>${
            item.product_card.aggregateRating.ratingValue + " ★★★★★" + " "
          }  <span>${
      "(" + item.product_card.aggregateRating.reviewCount + ")"
    }</span></p>
        </div>
      </div>
    </div>
      `;
  });
}

//    search functionality here
let search_content = document.querySelector("#search_content");

let search_input = document.querySelector("#search_input");
search_input.addEventListener("input", searchFilter);

document.querySelector("body").addEventListener("click", () => {
  search_content.style.display = "none";
});

let data_length = document.querySelector("#data_length");

function searchFilter() {
  console.log("success");
  let filtered_data = globalData.filter((item, index) => {
    return item.product_card.name
      .toUpperCase()
      .includes(search_input.value.toUpperCase());
  });
  data_length.innerText = `${filtered_data.length} search results found`;

  search_content.style.display = "block";
  displayData(filtered_data);

  // console.log(filtered_data)
}
