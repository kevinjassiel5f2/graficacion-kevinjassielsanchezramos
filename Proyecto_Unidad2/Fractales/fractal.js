function dibujarFractal() {
  push();
  translate(650, 480);
  fractal(80);
  pop();
}

function fractal(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 10) {
    push();
    rotate(30);
    fractal(len * 0.7);
    pop();

    push();
    rotate(-30);
    fractal(len * 0.7);
    pop();
  }
}