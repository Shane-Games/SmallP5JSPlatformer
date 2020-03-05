let player;
let floor;
let global = { gravity: 4, friction: 0.9 };

function setup() {
  createCanvas(640, 480);

  player = new Player(12, 310, 50);
  player.vX = 0;
  player.vY = 0;
  // player.iJ = false;

  floor = new basicFloor(0, 360, 640, 360);
}

function render() {
  player.render();
  floor.render();
  player.s = 3.25;
  player.x += player.vX;
}

function draw() {
  background(255);
  frameRate(60);
  render();
}
