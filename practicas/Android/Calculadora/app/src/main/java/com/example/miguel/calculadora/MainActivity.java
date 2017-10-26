package com.example.miguel.calculadora;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private Button btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnDiv, btnMult, btnRest, btnReset, btnComa, btnSuma, btnSigno, btnIgual;
    private TextView texto;
    private boolean suma, resta, mult, div = false;
    private double resultadoActual;
    private int i = 0;
    private String cadena = "";
    private int contadorComa = 0;
    private int contadorSigno = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        texto = (TextView) findViewById(R.id.texto);
        btn0 = (Button) findViewById(R.id.btn0);
        btn1 = (Button) findViewById(R.id.btn1);
        btn2 = (Button) findViewById(R.id.btn2);
        btn3 = (Button) findViewById(R.id.btn3);
        btn4 = (Button) findViewById(R.id.btn4);
        btn5 = (Button) findViewById(R.id.btn5);
        btn6 = (Button) findViewById(R.id.btn6);
        btn7 = (Button) findViewById(R.id.btn7);
        btn8 = (Button) findViewById(R.id.btn8);
        btn9 = (Button) findViewById(R.id.btn9);
        btnDiv = (Button) findViewById(R.id.btnDiv);
        btnMult = (Button) findViewById(R.id.btnMult);
        btnRest = (Button) findViewById(R.id.btnRest);
        btnReset = (Button) findViewById(R.id.btnReset);
        btnComa = (Button) findViewById(R.id.btnComa);
        btnSuma = (Button) findViewById(R.id.btnSuma);
        btnSigno = (Button) findViewById(R.id.btnSigno);
        btnIgual = (Button) findViewById(R.id.btnIgual);

        btn0.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 0;
                texto.setText(cadena);
            }
        });
        btn1.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 1;
                texto.setText(cadena);
            }
        });
        btn2.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 2;
                texto.setText(cadena);
            }
        });
        btn3.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 3;
                texto.setText(cadena);
            }
        });
        btn4.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 4;
                texto.setText(cadena);
            }
        });
        btn5.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 5;
                texto.setText(cadena);
            }
        });
        btn6.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 6;
                texto.setText(cadena);
            }
        });
        btn7.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 7;
                texto.setText(cadena);
            }
        });
        btn8.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 8;
                texto.setText(cadena);
            }
        });
        btn9.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                cadena += 9;
                texto.setText(cadena);
            }
        });
        btnComa.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                contadorComa++;
                if (contadorComa > 1) {
                    return;
                }
                cadena += ".";
                texto.setText(cadena);
            }
        });
        btnReset.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                texto.setText("0");
                cadena = "";
                resultadoActual = 0;
                contadorComa = 0;
                contadorSigno = 0;
                i = 0;
            }
        });
        btnSuma.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                i++;

                if (i >= 2) {
                    calcular();
                } else {
                    resultadoActual = Double.valueOf(texto.getText().toString());
                }
                suma = true;
                resta = false;
                mult = false;
                div = false;
                cadena = "";

                contadorComa = 0;
                contadorSigno = 0;
            }
        });
        btnRest.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                i++;

                if (i >= 2) {
                    calcular();
                } else {
                    resultadoActual = Double.valueOf(texto.getText().toString());
                }
                suma = false;
                resta = true;
                mult = false;
                div = false;
                cadena = "";
                contadorComa = 0;
                contadorSigno = 0;
            }
        });
        btnMult.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                i++;

                if (i >= 2) {
                    calcular();
                } else {
                    resultadoActual = Double.valueOf(texto.getText().toString());
                }
                suma = false;
                resta = false;
                mult = true;
                div = false;
                cadena = "";
                contadorComa = 0;
                contadorSigno = 0;
            }
        });
        btnDiv.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                i++;

                if (i >= 2) {
                    calcular();
                } else {
                    resultadoActual = Double.valueOf(texto.getText().toString());
                }
                suma = false;
                resta = false;
                mult = false;
                div = true;
                cadena = "";
                contadorComa = 0;
                contadorSigno = 0;
            }
        });

        btnIgual.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                calcular();
                i = 0;
                suma = false;
                resta = false;
                mult = false;
                div = false;
                contadorComa = 0;
                contadorSigno = 0;
            }
        });
        btnSigno.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                contadorSigno++;
                if (contadorSigno > 1) {
                    return;
                }
                if (resultadoActual == 0) {
                    texto.setText(String.valueOf("-" + texto.getText().toString()));
                } else {
                    resultadoActual = -resultadoActual;
                    texto.setText(String.valueOf(resultadoActual));
                }

            }
        });


    }

    private void calcular() {
        if (suma) {
            resultadoActual += Double.valueOf(texto.getText().toString());
            texto.setText(String.valueOf(resultadoActual));
            suma = false;
        }
        if (resta) {
            resultadoActual = resultadoActual - Double.valueOf(texto.getText().toString());
            texto.setText(String.valueOf(resultadoActual));
            resta = false;
        }
        if (mult) {
            resultadoActual = resultadoActual * Double.valueOf(texto.getText().toString());
            texto.setText(String.valueOf(resultadoActual));
            mult = false;
        }
        if (div) {
            resultadoActual = resultadoActual / Double.valueOf(texto.getText().toString());
            texto.setText(String.valueOf(resultadoActual));
            div = false;
        }
    }
}
