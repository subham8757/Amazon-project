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

  data.push(emailornumber);

  localStorage.setItem("currentuser", JSON.stringify(data));

  let a = document.createElement("a");
  a.setAttribute("href", "login2.html");
  a.click();
});
