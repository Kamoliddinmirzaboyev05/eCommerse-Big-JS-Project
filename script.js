// calling html elements
const sctBlock = document.querySelector(".sct2-block");
const showMore = document.querySelector(".showMore");
const closeCart = document.querySelector(".closeCart");
const cartBack = document.querySelector(".cartBack");
const shoppingCart = document.querySelector(".shoppingCart");
const cartProducts = document.querySelector(".cartProducts");
const subtotal = document.querySelector(".subtotal");
// empty array for cart products
const apiLink = "https://fakestoreapi.com/products";

let cartElements = [];
let data;
// getdata function
const getData = async (link) => {
  const req = await fetch(link);
  data = await req.json();
  console.log(data);
  writeData(data);
};
getData(apiLink);
let count = 8,
  i = 0;
let less = true;
showMore.addEventListener("click", () => {
  if (less) {
    less = false;
    count = 20;
    writeData(data);
  }else{
    less = true;
    count = 8;
    writeData(data);
  }
});
// writedata function
const writeData = (DB) => {
  sctBlock.innerHTML = "";
  i = 0;
  DB.forEach((item) => {
    if (i < count) {
      i = i + 1;
      console.log(i);
      sctBlock.innerHTML += `
        <div class="sct2-card">
              <div class="hover-data">
                <div onclick="addProduct(${
                  item.id
                })" class="addCart">Add to cart</div>
                <div class="hover-bottom">
                  <div class="hover-item">
                    <img src="img/share.svg" alt="" />
                    <p>Share</p>
                  </div>
                  <div class="hover-item">
                    <img src="img/compare.svg" alt="" />
                    <p>Compare</p>
                  </div>
                  <div class="hover-item">
                    <img src="img/like.svg" alt="" />
                    <p>Like</p>
                  </div>
                </div>
              </div>
              <div class="card-img">
                <img src="${item.image}" alt="" />
              </div>
              <div class="card-text">
                <h2>${String(item.title).slice(0, 20)} ...</h2>
                <p class="card-desc">
                  ${String(item.description).slice(0, 120)} ...
                </p>
                <div class="cardbottom">
                  <p class="price"><span class="key">Price:</span> 100$</p>
                  <p class="price"><span class="key">Count:</span> 22</p>
                  <p class="price">
                    <span class="key">Rate:</span> 4.4
                    <i class="fa-solid fa-star"></i>
                  </p>
                </div>
              </div>
            </div>`;
    }
  });
};

// show more button function

// open cart function
shoppingCart.addEventListener("click", () => {
  cartBack.classList.add("active");
});
closeCart.addEventListener("click", () => {
  cartBack.classList.remove("active");
});

const addProduct = (id) => {
  data.forEach((item) => {
    if (item.id == id) {
      cartElements.push(item);
      console.log(cartElements);
      writeCart(cartElements);
      calculateCart(cartElements);
    }
  });
};

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
              <img src="img/x.svg" alt="x" />
            </div>
          </div>
  `;
  });
};

const removeCart = (id) => {
  let filteredCart = cartElements.filter((item) => {
    return item.id != id;
  });
  cartElements = filteredCart;
  writeCart(cartElements);
  calculateCart(cartElements);
};

const calculateCart = (array) => {
  subtotal.textContent = 0;
  array.forEach((item) => {
    subtotal.textContent = Number(
      Number(subtotal.textContent) + item.price
    ).toFixed(2);
  });
};
