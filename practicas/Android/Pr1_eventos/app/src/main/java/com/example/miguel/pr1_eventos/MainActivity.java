package com.example.miguel.pr1_eventos;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private TextView vText;
    private Button boton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        vText = (TextView) findViewById(R.id.texto);
        boton = (Button) findViewById(R.id.boton);

        boton.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                vText.setText("Has pulsado el botón");
            }
        });

        boton.setOnLongClickListener(new Button.OnLongClickListener() {
            public boolean onLongClick(View v) {
                vText.setText("Has pulsado el botón de forma continua");
                
                return true;
            }
        });
    }

/*public void botonPulsar(View view){
vText.setText("Boton pulsado");
}*/
}
