// ================= VARIABLES =================
let x = 400, y = 250;   // posición objeto
let angulo = 0;         // rotación
let escala = 1;         // tamaño

// curva
let p1x = 200, p1y = 100;
let p2x = 600, p2y = 100;

// ================= SETUP =================
function setup() {
  createCanvas(800, 500); // 🎨 CANVAS
}

// ================= DRAW =================
function draw() {
  background(220); // limpiar pantalla

  // ================= TEXTO =================
  fill(0);
  textSize(16);
  text("Proyecto Unidad 2", 20, 20);
  text("WASD mover | Q/E rotar | R/F escala", 20, 40);
  text("Mouse mueve curva", 20, 60);
  text("Tu Nombre", 20, 80);

  // ================= OBJETO + TRANSFORMACIONES =================
  push();
  translate(x, y);   // mover
  rotate(angulo);    // rotar
  scale(escala);     // escalar

  rectMode(CENTER);
  fill(100, 150, 255);
  rect(0, 0, 100, 60); // 🔷 FIGURA

  pop();

  // ================= ANIMACIÓN =================
  angulo += 0.02; // gira automáticamente

  // ================= CURVA =================
  noFill();
  stroke(0);
  bezier(100, 400, p1x, p1y, p2x, p2y, 700, 400);

  fill(255, 0, 0);
  circle(p1x, p1y, 10);
  circle(p2x, p2y, 10);

  // ================= FRACTAL =================
  push();
  translate(650, 480);
  fractal(80);
  pop();
}

// ================= FRACTAL =================
function fractal(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 10) {
    push();
    rotate(0.5);
    fractal(len * 0.7);
    pop();

    push();
    rotate(-0.5);
    fractal(len * 0.7);
    pop();
  }
}

// ================= INTERACCIÓN =================
function keyPressed() {
  // movimiento
  if (key === 'A') x -= 10;
  if (key === 'D') x += 10;
  if (key === 'W') y -= 10;
  if (key === 'S') y += 10;

  // escala
  if (key === 'R') escala += 0.1;
  if (key === 'F') escala -= 0.1;

  // rotación manual
  if (key === 'Q') angulo -= 0.1;
  if (key === 'E') angulo += 0.1;
}

// mover curva con mouse
function mouseDragged() {
  p1x = mouseX;
  p1y = mouseY;
}