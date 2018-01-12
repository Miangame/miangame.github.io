package com.example.miguel.calculadoradivisas;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText entradaDatos;
    private Button eurosADolares, dolaresAEuros, eurosALibras, librasAEuros;
    private TextView total;
    private String bandera = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        entradaDatos = (EditText) findViewById(R.id.entradaDatos);
        eurosADolares = (Button) findViewById(R.id.eurosadolares);
        dolaresAEuros = (Button) findViewById(R.id.dolaresaeuros);
        eurosALibras = (Button) findViewById(R.id.eurosalibras);
        librasAEuros = (Button) findViewById(R.id.librasaeuros);
        total = (TextView) findViewById(R.id.total);

        eurosADolares.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                convertir();
                bandera = "eurosadolares";
            }
        });

        dolaresAEuros.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                convertir();
                bandera = "dolaresaeuros";
            }
        });

        eurosALibras.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                convertir();
                bandera = "eurosalibras";
            }
        });

        librasAEuros.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                convertir();
                bandera = "librasaeuros";
            }
        });
    }

    private void convertir() {
        double resultado;

        switch (bandera) {
            case "eurosadolares":
                resultado = Double.valueOf(entradaDatos.getText().toString()) * 1.17843;
                total.setText(String.valueOf(resultado) + "$");
                break;

            case "dolaresaeuros":

                break;

            case "eurosalibras":

                break;

            default:
        }
    }
}
