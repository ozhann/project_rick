class Obstacle {
  constructor() {
    this.meteor = loadImage("Assets/meteor.gif");
    this.width = 84;
    this.height = 60;
    this.explosion = loadImage("Assets/explosion.gif");
    this.explosionFX = loadSound("Assets/explosionFX.mp3");
    this.x = width;
    this.y = random(0, height - this.height);
  }

  draw() {
    this.x -= 5;
    image(this.meteor, this.x, this.y);
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

  exploded() {
    console.log("exploded");
    image(this.explosion, this.x - 50, this.y - 120);
    this.explosionFX.play();
  }
}
