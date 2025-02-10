const writePlace = document.querySelector(".writePlace");

const apiLink = "https://fakestoreapi.com/products";

let data;
// getdata function
const getData = async (link) => {
  const req = await fetch(link);
  data = await req.json();
  console.log(data);
  writeData(data);
};
getData(apiLink);

const writeData = (DB) => {
    console.log(localStorage.getItem("productID"));
  DB.forEach((product) => {
    
    if (product.id == localStorage.getItem("productID")) {
      writePlace.innerHTML = `
              <div class="leftSide">
                      <div class="left-imgs">
                        <div class="img-box">
                          <img src="../img/main1.png" alt="" />
                        </div>
                        <div class="img-box">
                          <img src="../img/main2.png" alt="" />
                        </div>
                        <div class="img-box">
                          <img src="../img/main3.png" alt="" />
                        </div>
                        <div class="img-box">
                          <img src="../img/main4.png" alt="" />
                        </div>
                      </div>
                      <div class="main-img">
                        <img src="${product.image}" alt="" />
                      </div>
                    </div>
                    <div class="right-side">
                      <h2 class="product-title">${product.title}</h2>
                      <p class="product-price">$${product.price}</p>
                      <div class="rating">
                        <img src="../img/satrs.svg" alt="" />
                        <p>|</p>
                        <p>5 Customer Review</p>
                      </div>
                      <p class="product-info">
                        Setting the bar as one of the loudest speakers in its class, the
                        Kilburn is a compact, stout-hearted hero with a well-balanced
                        audio which boasts a clear midrange and extended highs for a
                        sound.
                      </p>
                      <p class="box-title">Size</p>
                      <div class="sizes">
                        <div class="size-box">
                          <p>L</p>
                        </div>
                        <div class="size-box">
                          <p>XL</p>
                        </div>
                        <div class="size-box">
                          <p>XS</p>
                        </div>
                      </div>
                      <p class="box-title">Color</p>
                      <div class="colors">
                        <div class="color blue"></div>
                        <div class="color black"></div>
                        <div class="color brown"></div>
                      </div>
                      <div class="mainBtns">
                        <div class="counter">
                          <button>-</button>
                          <p>1</p>
                          <button>+</button>
                        </div>
                        <button class="addToCart">Add To Cart</button>
                        <button class="compare">+ Compare</button>
                      </div>
                      <div class="line"></div>
                      <div class="characters">
                        <div class="col">
                          <p>SKU</p>
                          <p>Category</p>
                          <p>Tags</p>
                          <p>Share</p>
                        </div>
                        <div class="col">
                          <p>: &nbsp;SS001</p>
                          <p>: &nbsp;Sofas</p>
                          <p>: &nbsp;Sofa, Chair, Home, Shop</p>
                          <div class="socials">
                            <p>:</p>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-twitter"></i>
                          </div>
                        </div>
                      </div>
                    </div>
              
              `;
    }
  });
};
