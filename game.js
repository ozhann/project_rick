class Game {
  constructor() {
    this.obstacles = [];
    this.portals = [];
    this.gameLevel = 1;
    this.sound1 = true;
    this.gameOver = false;
  }

  init() {
    this.introSound = loadSound("Assets/introsound.mp3");
    this.spaceSound = loadSound("Assets/spacesound.mp3");
    this.wubbaSound = loadSound("Assets/WubbaLubba.mp3");
    this.wubbaSound2 = loadSound("Assets/OppositeWubba.mp3");

    this.background = new Background();
    this.player = new Player();
    this.obstacle = new Obstacle();
    this.portal = new Portal();
  }

  // playSound() {
  //   if (this.sound1) {
  //     if (!this.introSound.isPlaying()) {
  //       this.introSound.play();
  //     }
  //   } else {
  //     this.introSound.stop();
  //     this.spaceSound.setVolume(0.2);
  //     this.spaceSound.play();
  //   }
  // }

  gameOver() {
    if (this.obstacle.exploded()) {
      this.gameOver = true;
    }
  }

  draw() {
    //clear();
    this.background.draw();
    this.player.draw();

    if (frameCount % 60 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach(
      function(obstacle) {
        if (
          obstacle.collides(this.player) &&
          obstacle.x + obstacle.width >= 0
        ) {
          obstacle.exploded();
          //game over
          setTimeout(() => {
            noLoop();
            //game over screen
            image(endImg, 0, 0);
            this.gameOver = true;
          }, 500);
        }
      }.bind(this)
    );

    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });

    if (frameCount % 900 === 0) {
      this.portals.push(new Portal());
    }

    this.portals.forEach(
      function(portal, index) {
        if (portal.collides(this.player) && portal.x + portal.width >= 0) {
          portal.wubba();
          this.background.gameLevel++;
          this.portals.splice(index, 1);
        }
      }.bind(this)
    );

    this.portals.forEach(function(portal) {
      portal.draw();
    });
  }

  setup() {
    this.player.setup();
  }
}
