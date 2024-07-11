const targetText = "Nothing here, yet.";
const animationContainer = document.getElementById('animation-container');

const asciiChars = "!<>{}[]()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const frameRate = 50; // ms
const revealSpeed = 150; // ms per letter

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
