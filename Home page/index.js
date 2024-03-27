document.getElementById("signinbtn").addEventListener("click", function () {
  let a = document.createElement("a");
  a.setAttribute("href", "../Authentication/login page/login.html");
  a.click();
});

let arr = [
  "Fresh",
  "Amazon miniTv",
  "Sell",
  "Best Sellers",
  "Mobiles",
  "Today's Deals",
  "Electronics",
  "Prime"
  
];

arr.forEach(function (element) {
  let div = document.createElement("div");
  div.setAttribute("class", "all");

  let p = document.createElement("p");
  p.innerText = element;

  div.append(p);

  document.getElementById("hamburger-content").append(div);
});

let click = document.getElementById("hamburger");
click.addEventListener("click", function () {
  let show = document.getElementById("slide-content");

  show.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";

  let hamburgershow = document.getElementById("hamburger-backgroud");
  hamburgershow.style.display = "block";
});

let click2 = document.getElementById("cross");
click2.addEventListener("click", function () {
  let hamburgershow = document.getElementById("hamburger-backgroud");
  hamburgershow.style.display = "none";
  document.querySelector("body").style.overflow = "auto";

  let show = document.getElementById("slide-content");
  show.style.display = "none";
});

let cardData = [
  {
    title: "Revamp your home in style",
    content: [
      {
        name: "Cushion covers, bedsheets & more",
        poster: "carddataimages/img1.jpg",
      },
      { name: "Figurines, vases and more", poster: "carddataimages/img2.jpg" },
      { name: "Home storage", poster: "carddataimages/img3.jpg" },
      { name: "Lighting solutions", poster: "carddataimages/img4.jpg" },
    ],
  },

  {
    title: "Appliances for your home | Up to 55% off",
    content: [
      { name: "Air conditioners", poster: "carddataimages/img5.jpg" },
      { name: "Refrigerators", poster: "carddataimages/img6.jpg" },
      { name: "Microwaves", poster: "carddataimages/img7.jpg" },
      { name: "Washing machines", poster: "carddataimages/img8.jpg" },
    ],
  },

  {
    title: "Up to 60% off | Styles for men",
    content: [
      { name: "Clothing", poster: "carddataimages/img9.jpg" },
      { name: "Footwear", poster: "carddataimages/img10.jpg" },
      { name: "Watches", poster: "carddataimages/img11.jpg" },
      { name: "BAGS & WALLETS", poster: "carddataimages/img12.jpg" },
    ],
  },

  {
    title: "Starting ₹99 | All your home improvement needs",
    content: [
      {
        name: "Cleaning Spin mops, wipes & more",
        poster: "carddataimages/img13.jpg",
      },
      {
        name: "Bath accessories Bathroom hardware & accessories",
        poster: "carddataimages/img14.jpg",
      },
      {
        name: "Hand tools Hammers, screwdrivers & more",
        poster: "carddataimages/img15.jpg",
      },
      {
        name: "Electricals Extension boards, plugs & more",
        poster: "carddataimages/img16.jpg",
      },
    ],
  },

  {
    title: "Up to 75% off | Headphones",
    content: [
      { name: "boAt Up to 75% off | boAt", poster: "carddataimages/img17.jpg" },
      {
        name: "boultUp to 75% off | boult",
        poster: "carddataimages/img18.jpg",
      },
      {
        name: "Noise Up to 75% off | Noise",
        poster: "carddataimages/img19.jpg",
      },
      {
        name: "Up to 75% off | Zebronics See",
        poster: "carddataimages/img20.jpg",
      },
    ],
  },

  {
    title: "Up to 60% off | Styles for women",
    content: [
      { name: "Women's Clothing", poster: "carddataimages/img21.jpg" },
      { name: "Footwear+Handbags", poster: "carddataimages/img22.jpg" },
      { name: "Watches", poster: "carddataimages/img23.jpg" },
      { name: "Fashion jewellery", poster: "carddataimages/img24.jpg" },
    ],
  },

  {
    title: "Shop TVs by Your Preferred Size | Starting ₹6,999",
    content: [
      {
        name: "Budget TVs | Up to 60% off",
        poster: "carddataimages/img25.jpg",
      },
      {
        name: "4K TVs | Up to 24 months No Cost EMI",
        poster: "carddataimages/img26.jpg",
      },
      {
        name: "Big Screens | Free installation",
        poster: "carddataimages/img27.jpg",
      },
      {
        name: "Ultra Premium TVs | Up to 50% off",
        poster: "carddataimages/img28.jpg",
      },
    ],
  },

  {
    title: "Revamp your home in style",
    content: [
      {
        name: "Cushion covers, bedsheets & more",
        poster: "carddataimages/img29.jpg",
      },
      { name: "Figurines, vases and more", poster: "carddataimages/img29.jpg" },
      { name: "Home storage", poster: "carddataimages/img30.jpg" },
      { name: "Lighting solutions", poster: "carddataimages/img31.jpg" },
    ],
  },
];

display(cardData);

function display(data) {
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerText = data[i].title;

    let cardbottom = document.createElement("div");
    cardbottom.setAttribute("class", "cardbottom");

    let a = document.createElement("a");
    a.innerText = "Explore all";

    a.setAttribute("class", "explore");

    card.append(title, cardbottom, a);

    document.getElementById("card-content").append(card);

    for (let j = 0; j < data[i].content.length; j++) {
      let subcard = document.createElement("div");
      subcard.setAttribute("class", "subcard");

      let subcardimgdiv = document.createElement("div");
      subcardimgdiv.setAttribute("class", "subcardimgdiv");

      let img = document.createElement("img");
      img.setAttribute("src", data[i].content[j].poster);
      img.setAttribute("class", "cardbottomimg");

      subcardimgdiv.append(img);

      let title = document.createElement("p");
      title.innerText = data[i].content[j].name;
      title.setAttribute("class", "cardbottomtext");

      subcard.append(subcardimgdiv, title);

      cardbottom.append(subcard);
    }
  }
}

let mobiledata = [
  {
    poster: "mobiledataimg/img1.jpg",
    title: "Redmi 13C",
    deal: "Limited time deal",
    discount: "25% off",
  },
  {
    poster: "mobiledataimg/img2.jpg",
    title: "iQOO Neo9 Pro 5G",
    deal: "Limited time deal",
    discount: "20% off",
  },
  {
    poster: "mobiledataimg/img3.jpg",
    title: "iQOO Z7 Pro 5G",
    deal: "Limited time deal",
    discount: "15% off",
  },
  {
    poster: "mobiledataimg/img4.jpg",
    title: "iQOO 12 5G ",
    deal: "Limited time deal",
    discount: "28% off",
  },
  {
    poster: "mobiledataimg/img5.jpg",
    title: "realme narzo 60X 5G",
    deal: "Limited time deal",
    discount: "29% off",
  },
  {
    poster: "mobiledataimg/img6.jpg",
    title: "realme narzo 60 5G",
    deal: "Limited time deal",
    discount: "30% off",
  },
  {
    poster: "mobiledataimg/img7.jpg",
    title: "iQOO Z6 Lite 5G",
    deal: "Limited time deal",
    discount: "25% off",
  },
  {
    poster: "mobiledataimg/img8.jpg",
    title: "Redmi 12 5G ",
    deal: "Limited time deal",
    discount: "10% off",
  },
  {
    poster: "mobiledataimg/img9.jpg",
    title: "iQOO 12 5G ",
    deal: "Limited time deal",
    discount: "25% off",
  },
  {
    poster: "mobiledataimg/img10.jpg",
    title: "Redmi 13C",
    deal: "Limited time deal",
    discount: "5% off",
  },
];

mobiledatashow(mobiledata);

function mobiledatashow(data) {
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "mobile");

    let cardimgdiv = document.createElement("div");
    cardimgdiv.setAttribute("class", "cardimgdiv");

    let img = document.createElement("img");
    img.setAttribute("src", data[i].poster);
    img.setAttribute("class", "mobileimages");

    cardimgdiv.append(img);

    let deal = document.createElement("p");
    deal.innerText = data[i].discount;
    deal.setAttribute("class", "deal");

    let name = document.createElement("p");
    name.innerText = data[i].title;
    name.setAttribute("class", "mobilename");

    card.append(cardimgdiv, deal, name);

    document.getElementById("mobiledata-bottom").append(card);
  }
}

let left = document.getElementById("left-arrow");
let right = document.getElementById("right-arrow");

let slider = document.getElementById("slider-content");
let slidernumber = 0;
let sliderImages = [
  {
    src: "slider images/first.jpg",
    name: "poster",
  },
  {
    src: "slider images/second.jpg",
    name: "poster",
  },
  {
    src: "slider images/third.jpg",
    name: "poster",
  },
  {
    src: "slider images/fourth.jpg",
    name: "poster",
  },
  {
    src: "slider images/fifith.jpg",
    name: "poster",
  },
  {
    src: "slider images/sixth.jpg",
    name: "poster",
  },
];

setCurrenSliderImage(slidernumber);

function setCurrenSliderImage(index) {
  let currentImg = sliderImages[index];
  let className = `poster-${index}`;
  slider.innerHTML = `<img src="${currentImg.src}" alt=${currentImg.name} class="poster ${className}" />`;
}

console.log(sliderImages);

right.addEventListener("click", function () {
  if (slidernumber === sliderImages.length-1) {
    slidernumber = 0;
    setCurrenSliderImage(slidernumber);
    return;
  }
  slidernumber++;
  setCurrenSliderImage(slidernumber);
});

left.addEventListener("click", function () {
  if (slidernumber === 0 ) {
    slidernumber = sliderImages.length-1;
    setCurrenSliderImage(slidernumber);
    return;
  }
  slidernumber--;
  setCurrenSliderImage(slidernumber);
  return;
});



let data = [
  { title: "ketch", price: 269, rating: 3, image: "shirt/shirt1.webp" ,category:"shirt" },
  { title: "Allen solly", price: 495, rating: 4, image: "shirt/shirt2.webp" ,category:"shirt" },
  {
    title: "U.S. POLO ASSN.",
    price: 458,
    rating: 2,
    image: "shirt/shirt3.webp"
    ,category:"shirt",
  },
  { title: "Van heusen", price: 494, rating: 4, image: "shirt/shirt4.webp" 
  ,category:"shirt"},
  { title: "SYMBOL", price: 600, rating: 3, image: "shirt/shirt5.webp"
  ,category:"shirt" },
  { title: "Lymio", price: 700, rating: 3, image: "shirt/shirt6.webp" ,category:"shirt"},
  { title: "Majestic Man", price: 4, rating: 3, image: "shirt/shirt7.webp" ,category:"shirt" },
  { title: "Indo Primo", price: 401, rating: 2, image: "shirt/shirt8.webp",category:"shirt" },
  { title: "Lymio", price: 502, rating: 3, image: "shirt/shirt9.webp",category:"shirt" },
  { title: "ketch", price: 604, rating: 3, image: "shirt/shirt10.webp",category:"shirt" },
  {
    title: "Majestic Man",
    price: 1001,
    rating: 3,
    image: "shirt/shirt11.webp"
    ,category:"shirt",
  },
  { title: "Lymio", price: 602, rating: 4, image: "shirt/shirt12.webp" ,category:"shirt"},
  { title: "Van heusen", price: 583, rating: 3, image: "shirt/shirt13.webp" ,category:"shirt"},
  { title: "Indo Primo", price: 459, rating: 2, image: "shirt/shirt14.webp",category:"shirt" },
  { title: "ketch", price: 678, rating: 4, image: "shirt/shirt15.webp" ,category:"shirt"},
  { title: "Van heusen", price: 680, rating: 2, image: "shirt/shirt16.webp" ,category:"shirt"},
  { title: "ketch", price: 790, rating: 2, image: "shirt/shirt17.webp" ,category:"shirt"},
  { title: "ketch", price: 559, rating: 4, image: "shirt/shirt18.webp" ,category:"shirt"},
  { title: "Indo Primo", price: 302, rating: 3, image: "shirt/shirt19.webp" ,category:"shirt" },
  { title: "ketch", price: 602, rating: 3, image: "shirt/shirt20.webp" ,category:"shirt"},
  { title: "Van heusen", price: 590, rating: 2, image: "shirt/shirt21.webp" ,category:"shirt"},
  { title: "ketch", price: 580, rating: 3, image: "shirt/shirt22.webp" ,category:"shirt"},
  { title: "Indo Primo", price: 702, rating: 4, image: "shirt/shirt23.webp" ,category:"shirt"},
  { title: "ketch", price: 605, rating: 4, image: "shirt/shirt24.webp" ,category:"shirt" },
  { title: "Van heusen", price: 522, rating: 2, image: "shirt/shirt25.webp",category:"shirt"},


  { title: "SYMBOL", price: 702, rating: 5, image: "paint/paint1.webp",category:"paint"},
  { title: "Park Avenue", price: 802, rating: 4, image: "paint/paint2.webp",category:"paint"},
  { title: "Ben Martin", price: 900, rating: 5, image: "paint/paint3.webp",category:"paint"},
  { title: "Swadesi Stuff", price: 1002, rating:3, image: "paint/paint4.webp",category:"paint"},
  { title: "Peter England", price: 1100, rating: 2, image: "paint/paint5.webp",category:"paint"},
  { title: "Urbano fashion", price: 1200, rating: 2, image: "paint/paint6.webp",category:"paint"},
  { title: "Van heusen", price: 490, rating: 2, image: "paint/paint7.webp",category:"paint"},
  { title: "Ben Martin", price: 600, rating: 3, image: "paint/paint8.webp",category:"paint"},
  { title: "Van heusen", price: 690, rating: 2, image: "paint/paint9.webp",category:"paint"},
  { title: "Ben Martin", price: 800, rating: 3, image: "paint/paint10.webp",category:"paint"},
  { title: "Park Avenue", price: 790, rating: 4, image: "paint/paint11.webp",category:"paint"},
  { title: "Van heusen", price: 800, rating: 5, image: "paint/paint12.webp",category:"paint"},
  { title: "Swadesi Stuff", price: 602, rating: 5, image: "paint/paint13.webp",category:"paint"},
  { title: "Park Avenue", price: 678, rating: 4, image: "paint/paint14.webp",category:"paint"},
  { title: "Van heusen", price: 999, rating: 4, image: "paint/paint15.webp",category:"paint"},
  { title: "Ben Martin", price: 988, rating: 3, image: "paint/paint16.webp",category:"paint"},
  { title: "Van heusen", price: 789, rating: 2, image: "paint/paint17.webp",category:"paint"},
  { title: "Park Avenue", price: 560, rating: 1, image: "paint/paint18.webp",category:"paint"},
  { title: "Van heusen", price: 458, rating: 5, image: "paint/paint19.webp",category:"paint"},
  { title: "Park Avenue", price: 807, rating: 4, image: "paint/paint20.webp",category:"paint"}
];







let searchbutton=document.getElementById("searchbtn")


searchbutton.addEventListener("click",()=>{
  let searchproduct=document.getElementById("search").value

  let matchdata=[]

  for(let i=0; i<data.length; i++){

    if(searchproduct===data[i].category){
      matchdata.push(data[i])
    }

  }

  console.log(matchdata)

  
  localStorage.setItem("matchdata", JSON.stringify(matchdata))

  
    let a =document.createElement("a")
    a.setAttribute("href","../search-page/search.html")
    a.click()    
})