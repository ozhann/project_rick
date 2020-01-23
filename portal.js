class Portal {
  constructor() {
    this.portal = loadImage("/Assets/portal.gif");
    this.width = 100;
    this.height = 100;

    this.x = width;
    this.y = random(0, height - this.height);
    this.wubbaSound = loadSound("/Assets/WubbaLubba.mp3");
    this.wubbaSound2 = loadSound("/Assets/OppositeWubba.mp3");
  }

  draw() {
    this.x -= 1;
    image(this.portal, this.x, this.y);
  }

  collides(obj) {
    // check if obj collides with self
    // self completely to the left || self completely to the right
    if (this.x + this.width < obj.x || obj.x + obj.width < this.x) {
      return false;
    }
    // self completely to the top || self completely to the bottom
    if (this.y + this.height < obj.y || obj.y + obj.height < this.y) {
      return false;
    }
    // collision detected -> we can play the sound
    // game.coinSound.play();
    return true;
  }
  wubba() {
    if (!this.wubbaSound.isPlaying()) {
      this.wubbaSound.play();
    }
  }
}
