function dibujarTransformaciones() {
  push();

  translate(200, 200);
  rotate(frameCount);
  scale(1.5);

  rectMode(CENTER);
  fill(100, 150, 255);
  rect(0, 0, 100, 50);

  pop();
}