const shoppingCart = document.querySelector(".shoppingCart");
const cartBack = document.querySelector(".cartBack");
const closeCart = document.querySelector(".closeCart");
const cartProducts = document.querySelector(".cartProducts");
const subtotal = document.querySelector(".subtotal");
// Main functions start
// Write cart function
const writeCart = (array) => {
  cartProducts.innerHTML = "";
  array.forEach((item) => {
    cartProducts.innerHTML += `
        <div class="product">
                <div class="aboutProduct">
                  <div class="productImg">
                    <img src="${item.image}" alt="" />
                  </div>
                  <div class="productData">
                    <h2 class="productTitle">${String(item.title).slice(
                      0,
                      20
                    )} ...</h2>
                    <div class="product-calc">
                      <p class="count">1</p>
                      <p>x</p>
                      <p class="productPrice">Rs. ${item.price}</p>
                    </div>
                  </div>
                </div>
                <div onclick="removeCart(${item.id})" class="close-product">
                  <img src="../img/x.svg" alt="x" />
                </div>
              </div>
      `;
  });
};
//   Remove cart function
const removeCart = (id) => {
  let filteredCart = cartProductsData.filter((item) => {
    return item.id != id;
  });
  cartProductsData = filteredCart;
  localStorage.setItem("cartProducts", JSON.stringify(cartProductsData));
  writeCart(cartProductsData);
  calculateCart(cartProductsData);
};
//   Calculate cart function
const calculateCart = (array) => {
  subtotal.textContent = 0;
  array.forEach((item) => {
    subtotal.textContent = Number(
      Number(subtotal.textContent) + item.price
    ).toFixed(2);
  });
};

// Main functions end
let cartProductsData;

shoppingCart.addEventListener("click", () => {
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("cartBack")) {
      cartBack.classList.remove("active");
    }
  });
  cartBack.classList.add("active");
  cartProductsData = JSON.parse(localStorage.getItem("cartProducts"));
  writeCart(cartProductsData);
});
closeCart.addEventListener("click", () => {
  cartBack.classList.remove("active");
});
