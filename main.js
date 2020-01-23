const game = new Game();
let screen = 0;

function preload() {
  game.init();
  this.startImg = loadImage("Assets/menu/start.jpg");
  this.endImg = loadImage("Assets/menu/gameover.jpg");
}

function setup() {
  //screen = 0; // for start screen before game starts
  createCanvas(960, 540);
  game.setup();
}
function draw() {
  if (screen == 0) {
    // game.playSound();
    if (!game.introSound.isPlaying()) {
      game.introSound.play();
    }
    image(startImg, 0, 0);
  } else if (screen == 1) {
    game.introSound.stop();

    if (!game.spaceSound.isPlaying()) {
      game.spaceSound.play();
      game.spaceSound.setVolume(0.1);
    }

    // game.playSound();
    game.draw();
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    screen = 1;
  }
  if (keyCode === 13 && game.gameOver) {
    document.location.reload();
  }
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
