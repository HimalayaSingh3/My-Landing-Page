let color=document.querySelector("#btn");
let mode="light";
color.addEventListener("click",() =>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
    console.log(mode);
})