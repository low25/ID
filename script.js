document.addEventListener("mousemove", (event) => {
    const background = document.querySelector(".background");
    if(background != null){
        const moveX = (event.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (event.clientY / window.innerHeight - 0.5) * 20;
        background.style.transform = `translate(${moveX*2}px, ${moveY*2}px)`;
    }
});

document.addEventListener("click",(event) =>{
    
    if ( event.target.getAttribute("class") == "summary"){
        document.getElementsByTagName("body")[0].classList.add("hide_scroll");
        document.getElementsByClassName("analise_holder")[0].className = "analise_holder_open";
        document.getElementsByClassName("analise_holder_open")[0].innerHTML = event.target.querySelector(".desc").innerHTML;
    }
    
})

document.addEventListener("click", (event)=>{
    if ( event.target.getAttribute("class") == "esc"){
        document.getElementsByClassName("analise_holder_open")[0].className = "analise_holder";
        document.getElementsByTagName("body")[0].classList.remove("hide_scroll");
        document.getElementsByClassName("analise_holder")[0].innerHTML = "";
    }
})

document.addEventListener("keydown",(event) =>{
   if (event.key == "Escape"){
        event.preventDefault();
        document.getElementsByClassName("analise_holder_open")[0].className = "analise_holder";
        document.getElementsByTagName("body")[0].classList.remove("hide_scroll");
        document.getElementsByClassName("analise_holder")[0].innerHTML = "";
    }
})

document.addEventListener("mousemove", (event) => {
    const background2 = document.getElementById("background2");
    if(background2 != null){
        const moveX = (event.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (event.clientY / window.innerHeight - 0.5) * 20;
        background2.style.transform = `translate(${moveX*2}px, ${moveY*2}px)`;
    }
});



const dotContainer = document.getElementById('dot-container');

        // Function to create a single dot at a random position
        function createDot() {
            const dot = document.createElement('div');
            dot.classList.add('dots');
            dot.style.top = `${Math.random() * 100}%`;
            dot.style.left = `${Math.random() * 100}%`;
            dotContainer.appendChild(dot);
        }

        // Function to gradually create dots with random delays
        function createDotsSmoothly(numDots) {
            for (let i = 0; i < numDots; i++) {
                setTimeout(() => {
                    createDot();
                }, i * Math.random() * 1000); // Random delay up to 500ms
            }
        }
        
window.onload = createDotsSmoothly(100);

