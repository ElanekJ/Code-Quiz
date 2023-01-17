let start = document.querySelector(".start");


let question = document.querySelector("#questions");
let startButton = document.querySelector("#start");
let timeEl = document.getElementById("time");
let timeLeft = 90;


startButton.addEventListener("click",function(){
    let timer = setInterval(function(){
   
        timeEl.textContent = timeLeft;

        start.setAttribute("class","hide");
        question.setAttribute("class","show");

        qa();

        timeLeft--;
        if(timeLeft === 0)
        {
            clearInterval(timer);
        }


    },1000)
})