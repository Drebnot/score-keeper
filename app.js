var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var h1 = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
    }if(p1Score === winningScore) {
        gameOver = true;
    }
    p1display.textContent = p1Score;
});
p2button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
    }if (p2Score === winningScore) {
        gameOver = true;
    }
    p2Display.textContent = p2Score;
});

