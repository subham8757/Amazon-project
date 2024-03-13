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
  "Prime",
  "Customer Service",
  "New Releases",
  "Home & Kitchen",
  "Gift Ideas",
  "Fashion",
  "Amazon Pay",
  "Computers",
  "Books",
  " Coupons",
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

  let hamburgershow = document.getElementById("hamburger-backgroud");
  hamburgershow.style.display = "block";
});

let click2 = document.getElementById("cross");
click2.addEventListener("click", function () {
  let hamburgershow = document.getElementById("hamburger-backgroud");
  hamburgershow.style.display = "none";

  let show = document.getElementById("slide-content");
  show.style.display = "none";
});

let carddata = [
  {
    title: "Revamp your home in style", 
    content: [
      { name: "Cushion covers, bedsheets & more", poster: "carddataimages/img1.jpg" },
      { name: "Figurines, vases and more", poster: "carddataimages/img2.jpg" },
      { name: "Home storage", poster: "carddataimages/img3.jpg" },
      { name: "Lighting solutions", poster: "carddataimages/img4.jpg" }
    ]
  },

  {
    title: "Appliances for your home | Up to 55% off", 
    content: [
      { name: "Air conditioners", poster: "carddataimages/img5.jpg" },
      { name: "Refrigerators", poster: "carddataimages/img6.jpg" },
      { name: "Microwaves", poster: "carddataimages/img7.jpg" },
      { name: "Washing machines", poster: "carddataimages/img8.jpg" }
    ]
  },

  {
    title: "Up to 60% off | Styles for men", 
    content: [
      { name: "Clothing", poster: "carddataimages/img9.jpg" },
      { name: "Footwear", poster: "carddataimages/img10.jpg" },
      { name: "Watches", poster: "carddataimages/img11.jpg" },
      { name: "BAGS & WALLETS", poster: "carddataimages/img12.jpg" }
    ]
  },


  {
    title: "Starting ₹99 | All your home improvement needs", 
    content: [
      { name: "Cleaning Spin mops, wipes & more", poster: "carddataimages/img13.jpg" },
      { name: "Bath accessories Bathroom hardware & accessories", poster: "carddataimages/img14.jpg" },
      { name: "Hand tools Hammers, screwdrivers & more", poster: "carddataimages/img15.jpg" },
      { name: "Electricals Extension boards, plugs & more", poster: "carddataimages/img16.jpg" }
    ]
  },

  {
    title: "Up to 75% off | Headphones", 
    content: [
      { name: "boAt Up to 75% off | boAt", poster: "carddataimages/img17.jpg" },
      { name: "boultUp to 75% off | boult", poster: "carddataimages/img18.jpg" },
      { name: "Noise Up to 75% off | Noise", poster: "carddataimages/img19.jpg" },
      { name: "Up to 75% off | Zebronics See", poster: "carddataimages/img20.jpg" }
    ]
  },

  {
    title: "Up to 60% off | Styles for women", 
    content: [
      { name: "Women's Clothing", poster: "carddataimages/img21.jpg" },
      { name: "Footwear+Handbags", poster: "carddataimages/img22.jpg" },
      { name: "Watches", poster: "carddataimages/img23.jpg" },
      { name: "Fashion jewellery", poster: "carddataimages/img24.jpg" }
    ]
  },


  {
    title: "Shop TVs by Your Preferred Size | Starting ₹6,999", 
    content: [
      { name: "Budget TVs | Up to 60% off", poster: "carddataimages/img25.jpg" },
      { name: "4K TVs | Up to 24 months No Cost EMI", poster: "carddataimages/img26.jpg" },
      { name: "Big Screens | Free installation", poster: "carddataimages/img27.jpg" },
      { name: "Ultra Premium TVs | Up to 50% off", poster: "carddataimages/img28.jpg" }
    ]
  },



  {
    title: "Revamp your home in style", 
    content: [
      { name: "Cushion covers, bedsheets & more", poster: "carddataimages/img29.jpg" },
      { name: "Figurines, vases and more", poster: "carddataimages/img29.jpg" },
      { name: "Home storage", poster: "carddataimages/img30.jpg" },
      { name: "Lighting solutions", poster: "carddataimages/img31.jpg" }
    ]
  },
];




display(carddata)

function display(data){

     for(let i=0; i<data.length; i++){

         let card=document.createElement("div")
         card.setAttribute("class","card")
         
         let title=document.createElement("p")
         title.setAttribute("class","title")
         title.innerText=data[i].title

         let cardbottom=document.createElement("div")
         cardbottom.setAttribute("class","cardbottom")

         let a=document.createElement("a")
         a.innerText="Explore all"

         a.setAttribute("class","explore")

         card.append(title,cardbottom,a)
      

         
         document.getElementById("card-content").append(card)

         for(let j=0; j<data[i].content.length; j++){
             
             let subcard=document.createElement("div")
             subcard.setAttribute("class","subcard")

             let subcardimgdiv=document.createElement("div")
             subcardimgdiv.setAttribute("class","subcardimgdiv")

             let img=document.createElement("img")
             img.setAttribute("src" ,data[i].content[j].poster)
             img.setAttribute("class","cardbottomimg")

             subcardimgdiv.append(img)

             let title=document.createElement("p")
             title.innerText=data[i].content[j].name
             title.setAttribute("class","cardbottomtext")

             subcard.append(subcardimgdiv,title)

             cardbottom.append(subcard)
         }

           
     }

    

    
     

     
}








