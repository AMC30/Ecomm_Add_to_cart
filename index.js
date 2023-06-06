var cart = [];

function addtocart(itemId) {
  var item = product[itemId];
  cart.push(item);
  displayCart();
}

function delElement(item){
    cart.splice(item, 1);
    displayCart();
}

function displayCart() {
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ "+0+".00";
  } else {
    document.getElementById('cartItem').innerHTML = cart.map((item) => {
      var { image, title, price } = item;
      total=total+price;
      document.getElementById("total").innerHTML = "$ "+total+".00";
      return (
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${image} />
          </div>
          <p style='font-size: 12px;'>${title}</p>
          <h2 style='font-size: 15px;'>${price}.00</h2>
          <i class='fas fa-trash' onclick='delElement(${j++})'></i>
        </div>`
      );
    }).join('');
  }
}

const product = [
  {
    id: 0,
    image: './pad.jpeg',
    title: 'Classy style cup',
    price: 120,
  },
  {
    id: 1,
    image: './pot.jpeg',
    title: 'Classy style pot',
    price: 99,
  },
  {
    id: 2,
    image: './cream.jpeg',
    title: 'Handcream',
    price: 200,
  },
  {
    id: 3,
    image: './shoe.jpeg',
    title: 'Classy Style shoe',
    price: 230,
  },
  {
    id: 4,
    image: './padbox.jpeg',
    title: 'PadBox',
    price: 120,
  },
  {
    id: 5,
    image: './cup.jpeg',
    title: 'Classy Style Cup',
    price: 300,
  }
];

const categories = [...new Set(product.map((item) => item))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${image} />
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>
        <button onclick='addtocart(${i++})'>Add to cart</button>
      </div>
    </div>`
  )
}).join('');


