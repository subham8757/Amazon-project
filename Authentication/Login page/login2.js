let currectuser = JSON.parse(localStorage.getItem("currentuser"));

let current = document.getElementById("currectuser");
current.innerText = currectuser;

document.getElementById("createbtn").addEventListener("click", function () {
  let a = document.createElement("a");
  a.setAttribute("href", "../sign up/signup.html");
  a.click();

  console.log("hello");
});

let signupdata = JSON.parse(localStorage.getItem("signup"));

if (signupdata === null) {
  signupdata = [];
}

let users = [
  {
    name: "suryakant",
    mobile: "1234567890",
    email: "abc@gmail.com",
    password: "123",
  },
];

let allusers = [];

allusers = [...signupdata, ...users];

let myform = document.getElementById("form");

myform.addEventListener("submit", function (event) {
  event.preventDefault();

  let currectuser = JSON.parse(localStorage.getItem("currentuser"));

  let password = document.getElementById("password").value;

  for (let i = 0; i < allusers.length; i++) {
    if (
      allusers[i].email === currectuser[0] ||
      (allusers[i].mobile === currectuser[0] &&
        allusers[i].password === password)
    ) {
      let a = document.createElement("a");
      a.setAttribute("href", "../../Home page/index.html");
      a.click();

      console.log("match");
      console.log(currectuser);
    }else{
        
         document.getElementById("password").value=""
         console.log("not match")
         let password=document.getElementById("password")
         password.style.border="1px solid red"
         password.style.boxShadow="0 0 0 0.5px red, 0 1px 2px rgba(15,17,17,.5) inset"
         password.setAttribute("placeholder","Please check your password")
         
    }
  }
});
