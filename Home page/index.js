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
