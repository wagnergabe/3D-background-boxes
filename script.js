const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125} ${-i * 125}`
            boxesContainer.appendChild(box)
        }
    }
}