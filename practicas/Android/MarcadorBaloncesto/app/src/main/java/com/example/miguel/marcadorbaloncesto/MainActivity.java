package com.example.miguel.marcadorbaloncesto;

import android.content.DialogInterface;
import android.content.pm.ActivityInfo;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView contadorLocal;
    private TextView contadorVisitante;
    private Button botonReset;
    private Button sumar1Local;
    private Button sumar2Local;
    private Button sumar3Local;
    private Button sumar1Visitante;
    private Button sumar2Visitante;
    private Button sumar3Visitante;
    private Button botonRestarLocal, botonRestarVisitante;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);

        contadorLocal = (TextView) findViewById(R.id.contadorLocal);
        contadorVisitante = (TextView) findViewById(R.id.contadorVisitante);
        botonReset = (Button) findViewById(R.id.reset);
        sumar1Local = (Button) findViewById(R.id.button1Local);
        sumar2Local = (Button) findViewById(R.id.button2Local);
        sumar3Local = (Button) findViewById(R.id.button3Local);
        sumar1Visitante = (Button) findViewById(R.id.button1Visitante);
        sumar2Visitante = (Button) findViewById(R.id.button2Visitante);
        sumar3Visitante = (Button) findViewById(R.id.button3Visitante);
        botonRestarLocal = (Button) findViewById(R.id.buttonRestarLocal);
        botonRestarVisitante = (Button) findViewById(R.id.buttonRestarVisitante);

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
                contador += 2;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });

        sumar3Visitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                contador += 3;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });


        botonReset.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                AlertDialog.Builder builder = new AlertDialog.Builder(v.getContext());
                builder.setMessage("¿Estás seguro que quieres empezar otro partido (se borraran los contadores)?");

                builder.setPositiveButton("Continuar", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        contadorVisitante.setText("0");
                        contadorLocal.setText("0");
                    }
                });
                builder.setNegativeButton("Cancelar", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {

                    }
                });
                AlertDialog dialog = builder.create();
                builder.show();


            }

        });

        botonRestarLocal.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorLocal.getText().toString());
                if (contador <= 0) {
                    return;
                }
                contador = contador - 1;
                contadorLocal.setText(String.valueOf(contador));
            }
        });

        botonRestarVisitante.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                int contador = Integer.valueOf(contadorVisitante.getText().toString());
                if (contador <= 0) {
                    return;
                }
                contador = contador - 1;
                contadorVisitante.setText(String.valueOf(contador));
            }
        });
    }
}
