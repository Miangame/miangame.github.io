package com.example.miguel.marcadorbaloncesto;

import android.content.pm.ActivityInfo;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView contadorLocal;
    private TextView contadorVisitante;
    private Button botonResetLocal;
    private Button botonResetVisitante;
    private Button sumar1Local;
    private Button sumar2Local;
    private Button sumar3Local;
    private Button sumar1Visitante;
    private Button sumar2Visitante;
    private Button sumar3Visitante;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);

        contadorLocal = (TextView) findViewById(R.id.contadorLocal);
        contadorVisitante = (TextView) findViewById(R.id.contadorVisitante);
        botonResetLocal = (Button) findViewById(R.id.resetLocal);
        botonResetVisitante = (Button) findViewById(R.id.resetVisitante);
        sumar1Local = (Button) findViewById(R.id.button1Local);
        sumar2Local = (Button) findViewById(R.id.button2Local);
        sumar3Local = (Button) findViewById(R.id.button3Local);
        sumar1Visitante = (Button) findViewById(R.id.button1Visitante);
        sumar2Visitante = (Button) findViewById(R.id.button2Visitante);
        sumar3Visitante = (Button) findViewById(R.id.button3Visitante);

        sumar1Local.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                contador++;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        sumar2Local.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                contador += 2;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        sumar3Local.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                contador += 3;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        sumar1Visitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                contador++;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });

        sumar2Visitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                contador+=2;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });

        sumar3Visitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                contador+=3;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });

        botonResetLocal.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                contadorLocal.setText("0");
            }
        });

        botonResetVisitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                contadorVisitante.setText("0");
            }
        });
    }
}
