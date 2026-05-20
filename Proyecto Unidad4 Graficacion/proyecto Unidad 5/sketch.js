let trail = [];
let velocidad = 0.02;

function setup() {

  createCanvas(900, 500, WEBGL);

}

function draw() {

  background(0);

  orbitControl();

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  ambientLight(60);

  pointLight(255,255,255,locX,locY,300);

  // Movimiento esfera
  let x = sin(frameCount * velocidad) * 250;

  trail.push(x);

  if(trail.length > 25){
    trail.shift();
  }

  // Trails
  for(let i = 0; i < trail.length; i++){

    push();

    let alpha = map(i,0,trail.length,10,255);

    ambientMaterial(100,200,255,alpha);

    translate(trail[i],0,0);

    sphere(20);

    pop();
  }

  // Esfera principal
  push();

  translate(x,0,0);

  specularMaterial(255);

  sphere(70);

  pop();

  // Cubo
  push();

  rotateX(frameCount * 0.01);

  rotateY(frameCount * 0.01);

  normalMaterial();

  box(100);

  pop();

  // Toroide rojo
  push();

  translate(-250,-120,0);

  rotateY(frameCount * 0.02);

  ambientMaterial(255,0,0);

  torus(90,25);

  pop();

  // Toroide blanco
  push();

  translate(-250,120,0);

  rotateX(frameCount * 0.02);

  specularMaterial(255);

  torus(90,25);

  pop();

  // Cilindro neon
  push();

  translate(250,-100,0);

  rotateZ(frameCount * 0.02);

  normalMaterial();

  cylinder(30,200);

  pop();

  // Cilindro blanco
  push();

  translate(250,120,0);

  rotateX(frameCount * 0.02);

  specularMaterial(255);

  cylinder(40,180);

  pop();
}