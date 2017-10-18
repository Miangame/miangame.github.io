package com.example.miguel.sumarnumeros;

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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edText1 = (EditText) findViewById(R.id.numero1);
        edText2 = (EditText) findViewById(R.id.numero2);
        vText = (TextView) findViewById(R.id.textViewResultado);
        botonSuma = (Button) findViewById(R.id.botonSuma);

        botonSuma.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                double resultado = Double.valueOf(edText1.getText().toString()) + Double.valueOf(edText2.getText().toString());

                vText.setText("Resultado = " + resultado);
            }
        });
    }
}
