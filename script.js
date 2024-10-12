document.addEventListener("mousemove", (event) => {
    const background = document.querySelector(".background");
    const background2 = document.querySelector("#background2");
    const moveX = (event.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (event.clientY / window.innerHeight - 0.5) * 20;
    background.style.transform = `translate(${moveX*1.5}px, ${moveY*1.5}px)`;
    background2.style.transform = `translate(${moveX*1.5}px, ${moveY*1.5}px)`;
});

