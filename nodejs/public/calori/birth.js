let birth_btn=document.getElementById("datebtn");
let birtharr=[];

const birthdata=()=>{
    let birthdate=document.getElementById("birthdate").value;
    let obj={
        birthdate
    }
    birtharr.push(obj);
    localStorage.setItem("birthdate",JSON.stringify(birtharr));
    if(birthdate==""){
        alert("fill the data")
    }else{
        window.location.replace("weightloss.html")
    }
    
}
birth_btn.onclick=()=>{
    birthdata()
}