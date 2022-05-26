const diceDiv = document.querySelector("#dice");
const diceImg = document.querySelector("#dice-image");
const btn = document.querySelector("#dice-btn");
let number = document.querySelector("#number");
const audio = document.querySelector("#audio");
btn.addEventListener("click", function () {
    diceDiv.style.webkitTransform += "rotate(2160deg)";
    dice.style.webkitTransform += "rotate3d(0.5, 1, 0.3, 2160deg)";
    let rnd = Math.floor(Math.random()*6+1);
    audio.play();
    setTimeout(function (){
        diceImg.setAttribute("src", `./images/dice${rnd}.png`)
    },1000);
    setTimeout(function (){
        number.innerHTML = `You've rolled the number ${rnd}`
    },1000);
    
})