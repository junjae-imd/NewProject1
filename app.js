const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    desc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
    colors: [
      { code: "black", img: "./img/Product/air.png" },
      { code: "darkblue", img: "./img/Product/air2.png" },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    desc: "The Air Jordan revolutionized basketball shoes with its high-flying design and Michael Jordan's endorsement.",
    colors: [
      { code: "lightgray", img: "./img/Product/jordan.png" },
      { code: "green", img: "./img/Product/jordan2.png" },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    desc: "The Nike Blazer started as a basketball shoe in the '70s and now is a staple in skateboarding and streetwear.",
    colors: [
      { code: "lightgray", img: "./img/Product/blazer.png" },
      { code: "green", img: "./img/Product/blazer2.png" },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    desc: "The Crater is made with sustainable materials and features a futuristic recycled midsole.",
    colors: [
      { code: "black", img: "./img/Product/crater.png" },
      { code: "lightgray", img: "./img/Product/crater2.png" },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    desc: "The Space Hippie is Nike’s boldest leap toward zero carbon and zero waste with its radical design.",
    colors: [
      { code: "gray", img: "./img/Product/hippie.png" },
      { code: "black", img: "./img/Product/hippie2.png" },
    ],
  },
  {
    id: 6,
    title: "Decathlon",
    price: 99,
    desc: "The Decathlon is Malaysia’s cheapest sports brand to choose with its vibrant design.",
    colors: [
      { code: "gray", img: "./img/Product/decathlon.jpeg" },
      { code: "black", img: "./img/Product/decathlon2.png" },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.desc;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});