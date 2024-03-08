

document.getElementById("createbtn").addEventListener("click",function(){
    let a =document.createElement("a")
    a.setAttribute("href","../sign up/signup.html")
    a.click()

    console.log("hello")
})


let signupdata=JSON.parse(localStorage.getItem("signup"))

if(signupdata===null){
    signupdata=[]
}

let users=[
    {name:"suryakant",mobile:"1234567890",email:"abc@gmail.com",password:"123"}
]


let allusers=[]

allusers=[...signupdata,...users]

console.log(allusers)


let myform=document.getElementById("form")

myform.addEventListener("submit",function(event){
    event.preventDefault()

    let emailorphone=document.getElementById("emailorphone").value
    let password=document.getElementById("password").value

    for(let i=0; i<allusers.length; i++){
        if(allusers[i].email===emailorphone || allusers[i].mobile===emailorphone && allusers[i].password===password){
            let a =document.createElement("a")
            a.setAttribute("href","../../Home page/index.html")
            a.click()
        }
    }
})




