const prodUrl = "js/products.json";
const container = document.querySelector(".row") as HTMLDivElement;

fetch(prodUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    handleShadowballs(json);
    console.dir(json);
  })
  .catch(function () {
    container.innerHTML = `<img src="./img/error.svg" id="error-img">`;
  });

function handleShadowballs(shadowballs: []) {
  interface Shadowball {
    title: string;
    image: string;
    price: string | number;
  }
  shadowballs.forEach(function (product: Shadowball) {
    const title = product.title;
    const imgUrl = product.image;
    const price = product.price;
    container.innerHTML += `<div class="col-sm">
                                <div class="card">
                                    <a href="./shadowball-size-3-pro.html">
                                        <img src="${imgUrl}" class="card-img-top details-img" alt="${title}">
                                    </a>
                                    <div class="card-body">
                                        <a href="#" class="product-link">
                                            <p>${title}</p>
                                        </a>
                                        <div class="bottom-position">
                                            <h4>${price}</h4>
                                            <a href="#" class="btn btn-primary add-cart">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
  });
}
