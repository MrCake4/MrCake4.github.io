const targetText = "Nothing here, yet.";
const animationContainer = document.getElementById('animation-container');

const asciiChars = "!<>{}[]()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const frameRate = 50; // ms
const revealSpeed = 100; // ms per letter

function getRandomChar() {
    return asciiChars[Math.floor(Math.random() * asciiChars.length)];
}

function revealText() {
    let currentText = '';
    let revealedChars = 0;

    function revealNextChar() {
        if (revealedChars >= targetText.length) {
            clearInterval(switchInterval);
            return;
        }

        let switchInterval = setInterval(() => {
            if (revealedChars < targetText.length) {
                currentText = targetText.slice(0, revealedChars) + getRandomChar();
                animationContainer.textContent = currentText;
            }
        }, frameRate);

        setTimeout(() => {
            clearInterval(switchInterval);
            currentText = targetText.slice(0, revealedChars + 1);
            animationContainer.textContent = currentText;
            revealedChars++;
            revealNextChar();
        }, revealSpeed);
    }

    revealNextChar();
}

revealText();

const tunnel = document.getElementById('tunnel');

function createDiamond() {
    const diamond = document.createElement('div');
    diamond.classList.add('diamond');
    tunnel.appendChild(diamond);

    setTimeout(() => {
        tunnel.removeChild(diamond);
    }, 10000); // Match the duration of the animation
}

setInterval(createDiamond, 3000); // Create a new diamond every 1.5 seconds
