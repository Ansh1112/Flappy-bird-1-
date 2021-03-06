var bird;
var pipes = [];
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
}

function draw() {

    background(255)

    if (frameCount % 150 == 0) {
        pipes.push(new Pipe());
    }

    for (var pipe of pipes) {
        pipe.show();
        pipe.update();

        if (bird.touches(pipe)) {
            noLoop()
            console.log("GAME OVER")
            textSize(30)
            text("Game Over",width/2,height/2)
        }

    }

    bird.show();
    bird.update();
  // put drawing code here
}

function keyPressed() {
    if (keyCode === 32) {
        bird.fly();
    }

}
