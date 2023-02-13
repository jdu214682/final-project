import products from "./products.json" assert { type: "json" };

const main = document.querySelector("main");


for (let i = 0; i < products.length; i++) {
  const product = document.createElement("div");
  product.classList.add('product')
  product.innerHTML =
  `
  <img src='images/${products[i].image}'> 
  <p class="text">
    ${products[i].name}
  </p>
  
  <p class="price">
    ${products[i].price} $
  </p> 

  <button class='add' data-id='${products[i].id}'>
  ${products[i].button}
  </button>
`
  main.append(product);
};


const aside = document.querySelector("aside"); 

document.querySelectorAll('.add').forEach(btn => {
  btn.addEventListener('click', buy)
})

function buy(event) {
  let id = event.target.dataset.id;
      for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
          let element = products[i];
          const product = document.createElement("div");
          product.classList.add('product')
          product.innerHTML =
            "<div class='aside-image'>"+
              "<img src='images/"+
                element.image +
              "' >"+
            "</div>"+
            "<div class='name'>"+
              "<p>"+
                element.name +
              "</p>"+
              "</div>"+
              "<div class='price'>"+
              "<p>"+
                element.price + " $"+
              "</p>"+
              "</div>"+

          "<div class='input'>"+
            '<label for="input">Numbers:</label>'+
            '<input name="input" type="number"  id="col" min="1" max="100" value="1" data-price='+element.price+'>'+
          "</div>"+

          "<div class='remove-trash'>"+
          "<i class='fa fa-trash remove'></i>"+
          "</div>"


          aside.append(product);
          
          let remove = document.querySelectorAll(".remove");
            remove = remove[remove.length - 1]
            remove.addEventListener("click", (e) => {
                e.target.parentNode.parentNode.remove()
            });

            // const init = () => {
            //   [...document.querySelectorAll('.product').forEach((productItem) => {
            //     totalCost += productItem.querySelector('.input').value * productItem.querySelector('.input').dataset.
            //   })]
            // }
          break;
        }
      }
}


