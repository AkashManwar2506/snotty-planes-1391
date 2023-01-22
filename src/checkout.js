// Coupon show and hide field section.
document.getElementById("enter-coupon-code").addEventListener("click", () => {
  let showOrNot = document.getElementById("show-coupon-field");
  let couponField = document.getElementById("coupon-section");
  if (showOrNot.innerText == "—") {
    showOrNot.innerText = "+";
    couponField.style.display = "none";
  } else if ((showOrNot.innerText = "+")) {
    showOrNot.innerText = "—";
    couponField.style.display = "flex";
  }
});

// Purchase summary
let cartTotal = document.getElementById("cart-total");

let estimateShipping = document.getElementById("shipping-charges");

let radioBtns = document.querySelectorAll("input[name='delivery_method']");

let findSelected = () => {
  let selected = document.querySelector(
    "input[name='delivery_method']:checked"
  ).value;

  estimateShipping.innerHTML = `$ ${selected}`;
  cartTotal.innerHTML = `$ ${selected}`;
};

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelected);
});

findSelected();
