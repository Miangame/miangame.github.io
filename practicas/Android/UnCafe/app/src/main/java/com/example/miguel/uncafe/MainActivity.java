package com.example.miguel.uncafe;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private TextView textoNombre;
    private CheckBox crema;
    private CheckBox chocolate;
    private Button botonMenos;
    private Button botonMas;
    private TextView contador;
    private Button pedido;
    private int suma;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textoNombre = (TextView) findViewById(R.id.nombre);
        crema = (CheckBox) findViewById(R.id.crema);
        chocolate = (CheckBox) findViewById(R.id.chocolate);
        botonMenos = (Button) findViewById(R.id.botonMenos);
        botonMas = (Button) findViewById(R.id.botonMas);
        contador = (TextView) findViewById(R.id.contador);
        pedido = (Button) findViewById(R.id.botonPedido);

        botonMas.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                sumarContador();
            }
        });

        botonMenos.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                restarContador();
            }
        });

        pedido.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                double precio = 3.5;
                precio *= suma;

                if (crema.isChecked()) {
                    precio += 0.5;
                }

                if (chocolate.isChecked()) {
                    precio += 0.5;
                }

                Context contexto = getApplicationContext();
                String mensaje = "Nombre: " + textoNombre.getText().toString() + "\n" +
                        "Añadir crema: " + crema.isChecked() + "\n" +
                        "Añadir chocolate: " + chocolate.isChecked() + "\n" +
                        "Cantidad: " + suma + "\n" +
                        "Precio: " + precio + "€\n" +
                        "Gracias!!";
                int duracion = Toast.LENGTH_LONG;
                Toast toast = Toast.makeText(contexto, mensaje, duracion);
                toast.show();
            }
        });
    }

    private void sumarContador() {
        suma = Integer.valueOf(this.contador.getText().toString());
        if (suma == 100) {
            return;
        }
        suma++;

        this.contador.setText(String.valueOf(suma));
    }

    private void restarContador() {
        suma = Integer.valueOf(this.contador.getText().toString());
        if (suma == 0) {
            return;
        }
        suma--;

        this.contador.setText(String.valueOf(suma));
    }
}
