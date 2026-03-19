function dibujarTransformaciones() {
  push();

  // 1. Traslación (mueve al centro)
  translate(200, 200);

  // 2. Rotación (animación)
  rotate(frameCount);

  // 3. Escalamiento (aumenta tamaño)
  scale(1.5);

  rectMode(CENTER);
  fill(100, 150, 255);
  rect(0, 0, 100, 50);

  pop();
}