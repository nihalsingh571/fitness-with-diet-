

let female_btn=document.getElementById("female");
let genderarr=[];
female_btn.onclick=()=>{
    genderarr.push("female")
    localStorage.setItem("gender",JSON.stringify(genderarr))
    window.location.replace("birth.html")
}
let male_btn=document.getElementById("male");
male_btn.onclick=()=>{
    genderarr.push("male")
    localStorage.setItem("gender",JSON.stringify(genderarr))
    window.location.replace("birth.html")
}