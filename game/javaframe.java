import javax.swing.JFrame;


public class javaframe {

    public static final int WIDTH = 800;
    public static final int HEIGHT = 600;
    
    public static void main(String[] args)
    {
        JFrame appFrame = new JFrame();

        appFrame.setSize(WIDTH,HEIGHT);

        appFrame.setTitle("Maple Idle");

        appFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        appFrame.setVisible(true);
    }
}
