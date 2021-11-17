const cora = document.querySelector("#cora");

cora.addEventListener("click",(e)=>{
    if(e.target == cora){
        e.target.classList.toggle("red");
    }
})

const play = document.querySelector("#play");

play.addEventListener("click",(e)=>{
    if(e.target == play){
        e.target.classList.toggle("blue");
    }
});

