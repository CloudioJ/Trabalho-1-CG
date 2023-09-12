
const ctx = document.getElementById('hud').getContext('2d')

const crosshair = new Image();
const winImg = new Image();
const loseImg = new Image();

winImg.src = './assets/win.png';
loseImg.src = './assets/lose.png';


ctx.font = "50px Arial";
ctx.fillStyle = "black";

function updateHUD() {
    crosshair.src = './assets/crosshair.png';
    var shotsCounter = `${shots}`
    var points = `${totalPoints}`
    
    ctx.fillText("Shots: ", 1150, 670);
    ctx.fillText("Points: ", 50, 50);
    crosshair.onload = () => {
        ctx.clearRect(0, 0, 1920, 1080);
        ctx.drawImage(crosshair, 700, 300, 100, 100);
        if(shots == 0 && totalPoints == 5){
            ctx.drawImage(winImg, 600, 200, 300, 300);
            ctx.fillText("You won!", 655, 500);
        }
        if(shots == 0 && totalPoints < 5){
            ctx.drawImage(loseImg, 600, 200, 300, 300);
            ctx.fillText("You lost", 660, 500);
        }
    };
    ctx.fillText(shotsCounter, 1300, 672)
    ctx.fillText(points, 210, 53)
}

function run() {
    if (shots >= 0) {
        updateHUD();
        requestAnimationFrame(run);
    }
}

run(); // Start the animation loop
 