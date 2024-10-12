document.addEventListener("mousemove", (event) => {
    const background = document.querySelector(".background");
    const moveX = (event.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (event.clientY / window.innerHeight - 0.5) * 20;
    background.style.transform = `translate(${moveX*1.5}px, ${moveY*1.5}px)`;
});

document.addEventListener("mousemove", (event) => {
    const background2 = document.getElementById("background2");
    const moveX = (event.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (event.clientY / window.innerHeight - 0.5) * 20;
    background2.style.transform = `translate(${moveX*1.5}px, ${moveY*1.5}px)`;
});

// Add random dots to the background
const dotContainer = document.getElementById('dot-container');

// Function to generate random dots
function createDots(numDots) {
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dots');
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.left = `${Math.random() * 100}%`;
        dotContainer.appendChild(dot);
    }
}

// Generate 50 dots
createDots(50);


