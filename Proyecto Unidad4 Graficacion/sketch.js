let angulo = 0;
let colorLuz = 255;
let mover = true;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(15);

  orbitControl();

  // Luces
  ambientLight(80);
  directionalLight(colorLuz, colorLuz, 255, 0, 0, -1);
  pointLight(255, 0, 0, mouseX - width / 2, mouseY - height / 2, 200);

  // Piso
  push();
  rotateX(HALF_PI);
  ambientMaterial(100);
  plane(900, 900);
  pop();

  // Esfera
  push();
  translate(-250, 0, 0);
  rotateY(angulo);
  specularMaterial(0, 0, 255);
  sphere(80);
  pop();

  // Cubo
  push();
  translate(0, 0, 0);
  rotateX(angulo);
  rotateY(angulo);
  ambientMaterial(0, 255, 100);
  box(120);
  pop();

  // Toroide
  push();
  translate(250, 0, 0);
  rotateZ(angulo);
  normalMaterial();
  torus(70, 25);
  pop();

  // Cono
  push();
  translate(0, -200, 0);
  rotateY(angulo);
  specularMaterial(255, 120, 0);
  cone(70, 150);
  pop();

}