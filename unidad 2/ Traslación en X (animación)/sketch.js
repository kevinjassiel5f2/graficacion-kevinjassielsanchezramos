let tx = 0;
function setup() {
 createCanvas(600, 300);
}
function draw() {
 background(240);
 tx += 2; // tx crece 2 píxeles por frame
 rect(50 + tx, 120, 80, 50);
}
