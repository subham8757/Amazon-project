

let signupdata=JSON.parse(localStorage.getItem("signup"))
if(signupdata==null){
  signupdata=[]
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





document.getElementById("createbtn").addEventListener("click", function () {
  let a = document.createElement("a");
  a.setAttribute("href", "../sign up/signup.html");
  a.click();

  console.log("hello");
});




let myform = document.getElementById("form");

myform.addEventListener("submit", function (event) {
  event.preventDefault();

  let data = [];

  let emailornumber = document.getElementById("emailorphone").value;


  let flag=false;
  for(let i=0; i<allusers.length; i++){
      if(allusers[i].email===emailornumber || allusers[i].mobile===emailornumber){
        flag=true;
        break;
      }
  }

  if(flag){
    
  data.push(emailornumber);

  localStorage.setItem("currentuser", JSON.stringify(data));




  let a = document.createElement("a");
  a.setAttribute("href", "login2.html");
  a.click();

  }else{
    alert("User not found ")
  }

});
