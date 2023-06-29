
function main(){
    const revealElements = document.querySelectorAll("[data-reveal]");
    const scrollReveal = function(){
        for(let i = 0; i < revealElements.length; i++){
            const isElemOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
            if(isElemOnScreen){
                revealElements[i].classList.add("revealed");
            }else{
                revealElements[i].classList.remove("revealed");
            }
        }
    }
    window.addEventListener("scroll", scrollReveal);
    window.addEventListener("load", scrollReveal);

}

main();