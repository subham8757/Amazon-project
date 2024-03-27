


let data=JSON.parse(localStorage.getItem("matchdata"))

productdisplay(data)


function productdisplay(data){
    
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let posterdiv = document.createElement("div");
    posterdiv.setAttribute("class", "posterdiv");
    card.append(posterdiv);

    let img = document.createElement("img");
    img.setAttribute("src", data[i].image);

    posterdiv.append(img);

    let title = document.createElement("p");
    title.innerText = data[i].title;
    title.setAttribute("class", "title");

    let price = document.createElement("p");
    price.innerText = `₹ ${data[i].price}`;
    price.setAttribute("class", "price");

    let rate = document.createElement("p");
    rate.innerText = `Ratings ${data[i].rating}`;
    rate.setAttribute("class", "rate");

    let primediv = document.createElement("div");
    primediv.setAttribute("class", "primediv");

    let text = document.createElement("p");
    text.innerText = "FREE Delivery over ₹499. Fulfilled by Amazon";
    text.setAttribute("class", "text");

    card.append(title, price, rate, primediv, text);

    let primeimg = document.createElement("img");
    primeimg.setAttribute("src", "prime.png");

    primediv.append(primeimg);

    document.getElementById("products").append(card);
  }



}



