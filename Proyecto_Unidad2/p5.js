<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Ejemplo p5.js</title>
  <!-- Cargar la librería p5.js desde CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
</head>
<body>
<script>
  // Función que se ejecuta una vez al inicio
  function setup() {
    createCanvas(400, 400); // Crear lienzo de 400x400 píxeles
    background(220);        // Color de fondo gris claro
  }

  // Función que se ejecuta en bucle
  function draw() {
    background(220);
    fill(100, 150, 255);    // Color de relleno
    noStroke();             // Sin borde
    ellipse(mouseX, mouseY, 50, 50); // Círculo que sigue el ratón
  }
</script>
</body>
</html>