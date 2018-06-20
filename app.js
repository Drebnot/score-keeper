var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
p1button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
    }if(p1Score === winningScore) {
        p1Display.classList = ("winner");
        gameOver = true;
    }
    p1display.textContent = p1Score;
});
p2button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
    }if (p2Score === winningScore) {
        p2Display.classList = ("winner");
        gameOver = true;
    }
    p2Display.textContent = p2Score;
});
resetButton.addEventListener("click", function(){
    p1Score = 0;
    p1Display.textContent = 0;
    p2Score = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
});
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function reset() {
    p1Score = 0;
    p1Display.textContent = 0;
    p2Score = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false
}