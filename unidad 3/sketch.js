let angulo = 0;

function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(240);

  // Control de cámara
  orbitControl();

  //  LUZ (para que se vea mejor)
  ambientLight(150);
  directionalLight(255, 255, 255, 0.5, 1, 0);

  //  CUBO (rotación + traslación)
  push();
  translate(-200, 0, 0);
  rotateY(frameCount * 0.02);
  fill(255, 0, 0);
  box(80);
  pop();

  // ESFERA (escalamiento)
  push();
  translate(0, 0, 0);
  scale(1.5);
  fill(0, 100, 255);
  sphere(50);
  pop();

  //  TORO (rotación en X)
  push();
  translate(200, 0, 0);
  rotateX(frameCount * 0.02);
  fill(0, 255, 100);
  torus(50, 15);
  pop();

  //  CONO EXTRA (para subir puntos)
  push();
  translate(0, -150, 0);
  rotateZ(frameCount * 0.02);
  fill(255, 200, 0);
  cone(40, 80);
  pop();
}