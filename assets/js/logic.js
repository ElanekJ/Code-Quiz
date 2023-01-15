let timeEl = document.getElementById("time");
let timeLeft = 90;
let timer = setInterval(function(){
    timeLeft--;
    
    timeEl.textContent = timeLeft;

    if(timeLeft === 0)
    {
        clearInterval(timer);
    }


},1000)