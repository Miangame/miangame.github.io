package com.example.miguel.calculadorabasica;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText edText1;
    private EditText edText2;
    private TextView vText;
    private Button botonSuma;
    private Button botonResta;
    private Button botonMult;
    private Button botonDiv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edText1 = (EditText) findViewById(R.id.numero1);
        edText2 = (EditText) findViewById(R.id.numero2);
        vText = (TextView) findViewById(R.id.textViewResultado);
        botonSuma = (Button) findViewById(R.id.botonSuma);
        botonResta = (Button) findViewById(R.id.botonResta);
        botonMult = (Button) findViewById(R.id.botonMult);
        botonDiv = (Button) findViewById(R.id.botonDiv);

        botonSuma.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                suma();
            }
        });

        botonResta.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                resta();
            }
        });

        botonMult.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                multiplicacion();
            }
        });

        botonDiv.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                division();
            }
        });


    }

    public void suma() {
        double resultado;

        if (edText1.getText().toString().length() > 0 || edText2.getText().toString().length() > 0) {
            resultado = Double.valueOf(edText1.getText().toString()) + Double.valueOf(edText2.getText().toString());
            vText.setText("Resultado = " + resultado);
        }
    }

    public void resta() {
        double resultado;

        if (edText1.getText().toString().length() > 0 || edText2.getText().toString().length() > 0) {
            resultado = Double.valueOf(edText1.getText().toString()) - Double.valueOf(edText2.getText().toString());
            vText.setText("Resultado = " + resultado);
        }
    }

    public void multiplicacion() {
        double resultado;

        if (edText1.getText().toString().length() > 0 || edText2.getText().toString().length() > 0) {
            resultado = Double.valueOf(edText1.getText().toString()) * Double.valueOf(edText2.getText().toString());
            vText.setText("Resultado = " + resultado);
        }
    }

    public void division() {
        double resultado;

        if (edText1.getText().toString().length() > 0 || edText2.getText().toString().length() > 0) {
            resultado = Double.valueOf(edText1.getText().toString()) / Double.valueOf(edText2.getText().toString());
            vText.setText("Resultado = " + resultado);
        }
    }
}
