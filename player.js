class Player {
  constructor(x, y, w, vX, vY, s) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.vX = vX;
    this.vY = vY;
    this.s = s;
  }

  render() {
    strokeWeight(4);
    fill(244, 32, 0);
    rect(this.x, this.y, this.w, this.w);

    if (this.x > 640) {
      this.x = 0;
    }
    if (this.x < -50) {
      this.x = 640;
    }

    player.x += player.vX;

    if (keyIsDown(LEFT_ARROW)) {
      if (player.vX < player.s) {
        player.vX -= 0.6;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      if (player.vX < player.s) {
        player.vX += 1;
      }
    }

    player.vY += global.gravity;
    player.vX *= global.friction;
    console.log(player.vX);
  }
}
