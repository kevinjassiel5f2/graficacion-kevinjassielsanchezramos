function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
}

function draw() {
  background(240);

  // Texto
  fill(0);
  text("Proyecto Unidad 2", 20, 20);

  // Llamar funciones
  dibujarTransformaciones();
  dibujarCurva();
  dibujarFractal();
}