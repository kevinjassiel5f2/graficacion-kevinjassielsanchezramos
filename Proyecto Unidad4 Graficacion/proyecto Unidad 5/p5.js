let trail = [];

function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {

  background(10);

  orbitControl();

  let x = sin(frameCount * 0.03) * 250;

  trail.push(x);

  if (trail.length > 30) {
    trail.shift();
  }

  // Trails
  for (let i = 0; i < trail.length; i++) {

    push();

    let alpha = map(i, 0, trail.length, 20, 255);

    ambientMaterial(100, 200, 255, alpha);

    translate(trail[i], 0, 0);

    sphere(20);

    pop();
  }

  // Esfera principal
  push();

  translate(x, 0, 0);

  specularMaterial(255);

  sphere(80);

  pop();
}