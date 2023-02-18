const btn = document.querySelector(".btn");
let conta = document.querySelector(".container");



btn.addEventListener("click", ()=>{
    
    if(btn.className == "btn"){
       btn.className = "btnNight";
        conta.className = "containerNight";
        document.cookie = "reng1=red;expires=Thu, 01 Jan 2024 00:00:00 GMT;";
        /* document.cookie = "username=John Doe;18 Dec 2023 12:00:00 UTC"; */
    }else{
        btn.className = "btn";
        conta.className = "container";
        document.cookie = "reng1=green;expires=Thu, 01 Jan 2023 00:00:00 GMT;";
    }
});


if(document.cookie == "reng1=red"){
    btn.className = "btnNight1";
        conta.className = "containerNight1";
}else{
    btn.className = "btn";
        conta.className = "container";
}