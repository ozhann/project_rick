class Player {
  constructor() {
    this.img = loadImage("Assets/player1.png");
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;

    this.x = 50;
    this.y = height - this.img.height;
  }

  draw() {
    image(this.img, this.x, this.y);

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }

    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.x >= width - this.width) {
      this.x = width - this.width;
    }
  }
}
