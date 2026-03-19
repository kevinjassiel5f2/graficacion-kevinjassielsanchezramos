let p1x = 200, p1y = 100;
let p2x = 600, p2y = 100;

function dibujarCurva() {
  noFill();
  stroke(0);

  bezier(100, 400, p1x, p1y, p2x, p2y, 700, 400);

  fill(255, 0, 0);
  circle(p1x, p1y, 10);
  circle(p2x, p2y, 10);
}

// mover con mouse
function mouseDragged() {
  p1x = mouseX;
  p1y = mouseY;
}