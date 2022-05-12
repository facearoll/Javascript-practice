const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

const plus = document.querySelector(".plus");
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

    let a = 0;

    plus.addEventListener("click", ()=>{
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        console.log(a);
    });

    minus.addEventListener("click", ()=>{
        if (a > 0){
            a--;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a; 
        }
    });