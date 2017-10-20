package com.example.miguel.merienda;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private TextView vText;
    private ImageView imagen;
    private Button boton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        vText = (TextView) findViewById(R.id.mensaje);
        imagen = (ImageView) findViewById(R.id.imagen);
        boton = (Button) findViewById(R.id.boton);

        boton.setOnClickListener(new Button.OnClickListener(){
            public void onClick(View v){
                vText.setText("Estoy lleno!");
                imagen.setImageResource(R.drawable.after_cookie);
            }
        });
    }
}
