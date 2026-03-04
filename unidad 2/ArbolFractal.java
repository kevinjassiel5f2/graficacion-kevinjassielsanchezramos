//el escalamiento (o scaling) es el proceso de cambiar 
//el tamaño de un objeto o imagen, aumentando o disminuyendo sus dimensiones,
//  sin alterar su forma original (si el escalamiento es proporcional).


//Escalamiento uniforme
//Se multiplica el ancho y el alto por el mismo factor.
// La figura mantiene sus proporciones.
//Ejemplo:
//Un cuadrado de 2×2
//Factor de escala = 3
//Nuevo tamaño = 6×6



//Escalamiento no uniforme
//Se usan factores diferentes para ancho y alto.

//La figura puede deformarse.

//Ejemplo:
//Ancho ×2
//Alto ×1
//Resultado: el objeto se estira horizontalmente

//En graficación digital (como en diseño, videojuegos o programación gráfica), el escalamiento se realiza multiplicando las coordenadas por un factor de escala:

//Si un punto es:

//(𝑥,𝑦)
//(x,y)
//Después de escalar:

//(𝑥′,𝑦′)=(𝑥⋅𝑆𝑥,  𝑦⋅𝑆𝑦)
//(x′,y′)=(x⋅Sx,y⋅Sy)
///Donde:

//Sx = factor de escala horizontal
//Sy = factor de escala vertical


//arbol practal
import javax.swing.*;
import java.awt.*;

public class ArbolFractal extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        
        g2d.setColor(Color.GREEN);
        dibujarArbol(g2d, getWidth() / 2, getHeight() - 100, -90, 100, 8);
    }

    private void dibujarArbol(Graphics2D g, int x1, int y1, double angulo, double longitud, int nivel) {
        if (nivel == 0) return;

        int x2 = x1 + (int) (Math.cos(Math.toRadians(angulo)) * longitud);
        int y2 = y1 + (int) (Math.sin(Math.toRadians(angulo)) * longitud);

        g.drawLine(x1, y1, x2, y2);

        dibujarArbol(g, x2, y2, angulo - 20, longitud * 0.7, nivel - 1);
        dibujarArbol(g, x2, y2, angulo + 20, longitud * 0.7, nivel - 1);
    }

    public static void main(String[] args) {
        JFrame ventana = new JFrame("Árbol Fractal");
        ArbolFractal panel = new ArbolFractal();

        ventana.add(panel);
        ventana.setSize(800, 600);
        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        ventana.setLocationRelativeTo(null);
        ventana.setVisible(true);
    }
}

