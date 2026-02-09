// Studio form buradan acilacak


const openBtn = document.querySelector("[data-modal-open]");
const closeBtn = document.querySelector("[data-modal-close]");
const backdrop = document.querySelector("[data-modal]");

// send tiklanir form kapanir
openBtn.addEventListener("click", function (event) {
    event.preventDefault();
    backdrop.classList.remove("is-hidden");
});

// disa tiklama form kapanir
backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) {
        backdrop.classList.add("is-hidden");
    }
});

// x ile kapanma 
closeBtn.addEventListener("click", function () {
    backdrop.classList.add("is-hidden");
});

//esc ile form kapatma 
document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        backdrop.classList.add("is-hidden");
    }
});

// Studio form burada bitiyor