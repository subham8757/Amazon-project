let data = JSON.parse(localStorage.getItem("matchdata"));

productdisplay(data);

function productdisplay(data) {
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


function starfilter(num){
    
     let matchdata=[]
    

     for(let i=0; i<data.length; i++){

        if(data[i].rating>=num){
             matchdata.push(data[i])
        }
      
     }

     
     document.getElementById("products").innerHTML=null
     productdisplay(matchdata)

}

// let star1flag=true;
// let star1=document.getElementById("star1")
// star1.addEventListener("click",function(){
//   let up= document.getElementById("star1up")
//      if(star1flag===true){
//           star1.style.fontSize="17px"
//           up.style.fontSize="13px"
//           up.style.fontWeight="600"
//           starfilter(4)
//           star1flag=false;
        
//      }else{
        
//          star1.style.fontSize="16px"
//          up.style.fontSize="12px"
//          up.style.fontWeight="normal"
//          productdisplay(data)
//          star1flag=true
         
//      }
     
// })



// let star2flag=true;
// let star2=document.getElementById("star2")
// star2.addEventListener("click",function(){
//   let up= document.getElementById("star2up")
//      if(star2flag===true){
//           star2.style.fontSize="17px"
//           up.style.fontSize="13px"
//           up.style.fontWeight="600"
//           starfilter(3)
//           star2flag=false;
//      }else{   
//          star2.style.fontSize="16px"
//          up.style.fontSize="12px"
//          up.style.fontWeight="normal"
//          productdisplay(data)
//          star2flag=true
//      }
     
// })




// let star3flag=true;
// let star3=document.getElementById("star3")
// star3.addEventListener("click",function(){
//   let up= document.getElementById("star3up")
//      if(star3flag===true){
//           star3.style.fontSize="17px"
//           up.style.fontSize="13px"
//           up.style.fontWeight="600"
//           starfilter(2)
//           star3flag=false;
//      }else{   
//          star3.style.fontSize="16px"
//          up.style.fontSize="12px"
//          up.style.fontWeight="normal"
//          productdisplay(data)
//          star3flag=true
//      }
     
// })



// let star4flag=true;
// let star4=document.getElementById("star4")
// star4.addEventListener("click",function(){
//   let up= document.getElementById("star4up")
//      if(star4flag===true){
//           star4.style.fontSize="17px"
//           up.style.fontSize="13px"
//           up.style.fontWeight="600"
//           starfilter(1)
//           star4flag=false;
//      }else{   
//          star4.style.fontSize="16px"
//          up.style.fontSize="12px"
//          up.style.fontWeight="normal"
//          productdisplay(data)
//          star4flag=true
//      }
     
// })

// let clickedStar = null;

// function applyStarFilter(event) {
//   console.log('mcoaiwuehfoac', event.target.parentElement.id)
  
//   let upId = document.getElementById(`${event.target.parentElement.id}-pre`)

//   if ( clickedStar === event.target.parentElement.id.split("-")[1] ) {
//     clickedStar = null
//     upId.style.fontSize = '10px'
//   } else {
//     clickedStar = event.target.parentElement.id.split("-")[1]
//     upId.style.fontSize = '20px'
//   }
  
//   console.log({clickedStar})
//   starfilter(clickedStar)
// } 

// function attachEventListnerToAllStar () {
//   document.getElementById("star-1").addEventListener('click', (event) => applyStarFilter(event))
// }
// attachEventListnerToAllStar()



let clickstar=null

function starClicked(event){

    let up=document.getElementById(`${event.target.parentElement.id}-pre`)
    
    if(clickstar===event.target.parentElement.id.split("-")[1]){
      clickstar=null
      up.style.fontSize="12px"
      up.style.fontWeight="normal"
      
    }else{
      up.style.fontSize="13px"
      up.style.fontWeight="600"
      clickstar=event.target.parentElement.id.split("-")[1]
    }

   console.log(clickstar)
   starfilter(clickstar)

}











// let star1 = document.getElementById("star1");
// star1.addEventListener("click", function () {
//   let fourstar = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].rating >= 4) {
//       fourstar.push(data[i]);
//     }
//   }

//   document.getElementById("products").innerHTML = null;
//   productdisplay(fourstar);
// });

// let star2 = document.getElementById("star2");
// star2.addEventListener("click", function () {
//   let fourstar = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].rating >= 2) {
//       fourstar.push(data[i]);
//     }
//   }

//   document.getElementById("products").innerHTML = null;
//   productdisplay(fourstar);
// });
// let star3 = document.getElementById("star3");
// star3.addEventListener("click", function () {
//   let fourstar = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].rating >= 2) {
//       fourstar.push(data[i]);
//     }
//   }

//   document.getElementById("products").innerHTML = null;
//   productdisplay(fourstar);
// });
// let star4 = document.getElementById("star4");
// star4.addEventListener("click", function () {
//   let fourstar = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].rating >= 1) {
//       fourstar.push(data[i]);
//     }
//   }

//   document.getElementById("products").innerHTML = null;
//   productdisplay(fourstar);
// });

let under300 = document.getElementById("under-300");

under300.addEventListener("click", function () {
  let pricematch = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price < 300) {
      pricematch.push(data[i]);
    }
  }

  document.getElementById("products").innerHTML = null;
  productdisplay(pricematch);
});

let under300_500 = document.getElementById("under-300-500");

under300_500.addEventListener("click", function () {
  let pricematch = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price > 300 && data[i].price < 500) {
      pricematch.push(data[i]);
    }
  }

  document.getElementById("products").innerHTML = null;
  productdisplay(pricematch);
});

let under500_1000 = document.getElementById("under-500-1000");

under500_1000.addEventListener("click", function () {
  let pricematch = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price > 500 && data[i].price < 1000) {
      pricematch.push(data[i]);
    }
  }

  document.getElementById("products").innerHTML = null;
  productdisplay(pricematch);
});

let under1000_1500 = document.getElementById("under-1000-1500");

under1000_1500.addEventListener("click", function () {
  let pricematch = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price > 1000 && data[i].price < 1500) {
      pricematch.push(data[i]);
    }
  }

  document.getElementById("products").innerHTML = null;
  productdisplay(pricematch);
});

let firstcheckbox = document.getElementById("ketch");

firstcheckbox.addEventListener("change", function () {
  let matchdata = [];
  if (this.checked) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === firstcheckbox.value) {
        matchdata.push(data[i]);
      }
    }
  }

  document.getElementById("allen").checked = false;
  document.getElementById("U.S. POLO ASSN.").checked = false;
  document.getElementById("Van heusen").checked = false;
  document.getElementById("SYMBOL").checked = false;

  document.getElementById("products").innerHTML = null;
  productdisplay(matchdata);
});

let secondcheckbox = document.getElementById("allen");

secondcheckbox.addEventListener("change", function () {
  let matchdata = [];
  if (this.checked) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === secondcheckbox.value) {
        matchdata.push(data[i]);
      }
    }
  }

  document.getElementById("ketch").checked = false;
  document.getElementById("U.S. POLO ASSN.").checked = false;
  document.getElementById("Van heusen").checked = false;
  document.getElementById("SYMBOL").checked = false;

  document.getElementById("products").innerHTML = null;
  productdisplay(matchdata);
});

let thirdcheckbox = document.getElementById("U.S. POLO ASSN.");

thirdcheckbox.addEventListener("change", function () {
  let matchdata = [];
  if (this.checked) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === thirdcheckbox.value) {
        matchdata.push(data[i]);
      }
    }
  }

  document.getElementById("ketch").checked = false;
  document.getElementById("allen").checked = false;
  document.getElementById("Van heusen").checked = false;
  document.getElementById("SYMBOL").checked = false;

  document.getElementById("products").innerHTML = null;
  productdisplay(matchdata);
});

let fourthcheckbox = document.getElementById("Van heusen");

fourthcheckbox.addEventListener("change", function () {
  let matchdata = [];
  if (this.checked) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === fourthcheckbox.value) {
        matchdata.push(data[i]);
      }
    }
  }

  document.getElementById("ketch").checked = false;
  document.getElementById("allen").checked = false;
  document.getElementById("U.S. POLO ASSN.").checked = false;
  document.getElementById("SYMBOL").checked = false;

  document.getElementById("products").innerHTML = null;
  productdisplay(matchdata);
});

let fifthcheckbox = document.getElementById("SYMBOL");

fifthcheckbox.addEventListener("change", function () {
  let matchdata = [];
  if (this.checked) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === fifthcheckbox.value) {
        matchdata.push(data[i]);
      }
    }
  }

  document.getElementById("ketch").checked = false;
  document.getElementById("allen").checked = false;
  document.getElementById("U.S. POLO ASSN.").checked = false;
  document.getElementById("Van heusen").checked = false;

  document.getElementById("products").innerHTML = null;
  productdisplay(matchdata);
});
