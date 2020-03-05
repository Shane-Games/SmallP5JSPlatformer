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
