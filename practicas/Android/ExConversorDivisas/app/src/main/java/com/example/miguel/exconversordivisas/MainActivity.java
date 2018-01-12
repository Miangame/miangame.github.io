package com.example.miguel.exconversordivisas;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private Button configuracion;
    private Button convertir;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        configuracion = (Button) findViewById(R.id.configuracion);

        convertir = (Button) findViewById(R.id.convertir);

        configuracion.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(v.getContext(), ConfiguracionActivity.class);
                startActivityForResult(intent, 0);
            }
        });

        convertir.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(v.getContext(), ConversorActivity.class);
                startActivityForResult(intent, 0);
            }
        });
    }


}
