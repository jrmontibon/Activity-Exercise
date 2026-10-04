class CanvasShape {
  drawShape() { return "Drawing shape"; }
  eraseShape() { return "Erasing shape"; }
}
class CanvasCircle extends CanvasShape {
  drawShape() { return "Drawing smooth circle"; }
  getCircleRadius() { return 5; }
}
const genericCanvasShape = new CanvasShape();
const specificCanvasCircle = new CanvasCircle();
console.log(genericCanvasShape.drawShape(), "|", specificCanvasCircle.drawShape());