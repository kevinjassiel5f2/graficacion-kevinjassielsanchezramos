function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // Línea vertical central
  line(width/2, 0, width/2, height);

  // Línea horizontal central
  line(0, height/2, width, height/2);
}