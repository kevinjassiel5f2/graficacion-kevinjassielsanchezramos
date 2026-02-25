let x = 0;
let velocidad = 5;
let animando = true;

function setup() {
  createCanvas(800, 500); // Tamaño optimizado
}

function draw() {
  background(220);

  // 1. Marcos laterales (Snippet 1)
  stroke(0); line(30, 20, 185, 20); 
  stroke(255); line(185, 175, 30, 175);

  // 2. Casa (Snippet 5)
  noStroke();
  fill(200, 150, 100); rect(300, 250, 200, 150); // Base
  fill(150, 50, 50); triangle(300, 250, 400, 170, 500, 250); // Techo
  fill(0, 56, 147); rect(380, 320, 40, 80); // Puerta azul

  // 3. Animación de "Sol" con rebote (Snippet 2)
  fill(252, 209, 22); // Amarillo
  circle(x, 80, 50);
  
  if (animando) {
    x += velocidad;
    if (x > width || x < 0) {
      velocidad *= -1;
    }
  }

  // Instrucciones en pantalla
  fill(0); noStroke();
  text("Click: Reiniciar Sol | Tecla P: Pausar", 20, height - 20);
}

function mousePressed() { x = 0; } // Reinicia posición

function keyPressed() {
  if (key === 'p' || key === 'P') {
    animando = !animando; // Control del ciclo
  }
}