const sctBlock = document.querySelector(".sct2-block");
const showMore = document.querySelector(".showMore");
const closeCart = document.querySelector(".closeCart");
const cartBack = document.querySelector(".cartBack");

const shoppingCart = document.querySelector(".shoppingCart");
const apiLink = "https://fakestoreapi.com/products";
let cartElements = []
let data;
const getData = async (link) => {
  const req = await fetch(link);
   data = await req.json();
  console.log(data);
  writeData(data);
};
getData(apiLink);

const writeData = (DB) => {
  DB.forEach((item) => {
    sctBlock.innerHTML += `
        
        <div class="sct2-card">
              <div class="hover-data">
                <div onclick="addProduct(${item.id})" class="addCart">Add to cart</div>
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
                  ${String(item.description).slice( 0, 120 )} ...
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
            </div>`  
  });
};

showMore.addEventListener("click", () => {
  sctBlock.classList.toggle("moreProduct");
  if (sctBlock.classList.contains("moreProduct")) {
    showMore.textContent = "Show less";
  } else {
    showMore.textContent = "Show more";
  }
});

shoppingCart.addEventListener("click", ()=>{
cartBack.classList.add("active")
})
closeCart.addEventListener("click", ()=>{
  cartBack.classList.remove("active")
})

const addProduct = (id)=>{
  data.forEach(item =>{
    if(item.id == id){
      cartElements.push(item)
      console.log(cartElements);
    }
  })
}
