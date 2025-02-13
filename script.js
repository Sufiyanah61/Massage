// Function to show images one by one
const imageContainers = document.querySelectorAll('.image-container');
let delay = 0;

imageContainers.forEach((container, index) => {
    setTimeout(() => {
        container.classList.add('visible');
    }, delay);
    delay += 1000; // 1 second delay between each image
});

// Show final message after all images are visible
setTimeout(() => {
    document.querySelector('.final-message').classList.add('visible');
}, imageContainers.length * 1000);

// Flower falling animation
const flowersContainer = document.querySelector('.flowers');
const flowers = ['🌸', '🌼', '🌷', '💐', '🌺'];

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
    flowersContainer.appendChild(flower);

    // Remove flower after animation ends
    setTimeout(() => {
        flower.remove();
    }, 10000);
}

// Create flowers at regular intervals
setInterval(createFlower, 500);