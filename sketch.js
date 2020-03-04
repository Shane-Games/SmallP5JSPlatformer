let player;
let floor;

class Player {
  constructor(x, y, w, v) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.v = v;
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
  }
}

class basicFloor {
  constructor(x, y, x2, y2) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.stroke = stroke;
  }

  render() {
    line(this.x, this.y, this.x2, this.y2);
  }
}

function setup() {
  createCanvas(640, 480);

  player = new Player(12, 310, 50);
  floor = new basicFloor(0, 360, 640, 360);
}

function render() {
  player.render();
  floor.render();

  if (keyIsDown(LEFT_ARROW)) {
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.v++;
    player.x += player.v;
  } else {
    if (player.v < 0) {
      player.v = 0;
    }

    player.v--;
  }

  if (keyIsDown(UP_ARROW)) {
    player.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.y += 5;
  }
}

function draw() {
  background(255);
  frameRate(60);
  render();
}
