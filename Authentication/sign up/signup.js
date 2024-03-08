


let data=JSON.parse(localStorage.getItem("signup"))
if(data==null){
    data=[]
}

let myform=document.getElementById("form")


myform.addEventListener("submit",function(event){
    event.preventDefault()

    

    let name =document.getElementById("name").value
    let mobile=document.getElementById("mobile").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value


    let obj={
        name,
        mobile,
        email,
        password,
    }
    
    let flag=false
    for(let i=0; i<data.length; i++){
        if(data[i].mobile===mobile || data[i].email===email){
            flag=true;
            break;
        }
    }


    if(flag){
        alert("User already exist")
    }else{
        data.push(obj)
    
        localStorage.setItem("signup",JSON.stringify(data))
        let a=document.createElement("a")
        a.setAttribute("href","../Login page/login.html")
        a.click()
    }
    
    document.getElementById("name").value=""
    document.getElementById("mobile").value=""
    document.getElementById("email").value=""
    document.getElementById("password").value=""


    
})