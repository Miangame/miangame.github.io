package com.example.miguel.exconversordivisas;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class ConversorActivity extends AppCompatActivity {

    private EditText numeroIntroducido;
    private Button boton;

    private TextView eurAUsd;
    private TextView eurAGbp;
    private TextView eurACny;

    private TextView usdAEur;
    private TextView usdAGbp;
    private TextView usdACny;

    private TextView gbpAEur;
    private TextView gbpAUsd;
    private TextView gbpACny;

    private TextView cnyAEur;
    private TextView cnyAUsd;
    private TextView cnyAGbp;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.conversor);

        numeroIntroducido = (EditText) findViewById(R.id.entradaDatos);

        eurAUsd = (TextView) findViewById(R.id.eurAUsd);

        boton = (Button) findViewById(R.id.convertir);

        eurAUsd = (TextView) findViewById(R.id.eurAUsd);
        eurAGbp = (TextView) findViewById(R.id.eurAGbp);
        eurACny = (TextView) findViewById(R.id.eurACNY);

        usdAEur = (TextView) findViewById(R.id.usdAEur);
        usdAGbp = (TextView) findViewById(R.id.usdAGbp);
        usdACny = (TextView) findViewById(R.id.usdACNY);

        gbpAEur = (TextView) findViewById(R.id.gbpAEur);
        gbpAUsd = (TextView) findViewById(R.id.gbpAUsd);
        gbpACny = (TextView) findViewById(R.id.gbpACNY);

        cnyAEur = (TextView) findViewById(R.id.cnyAEur);
        cnyAGbp = (TextView) findViewById(R.id.cnyAGbp);
        cnyAUsd = (TextView) findViewById(R.id.cnyAUsd);


        boton.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                convertir();
            }
        });
    }

    private void convertir() {
        eurAUsd.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 0.84812));
        eurAGbp.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 1.13514));
        eurACny.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 0.12823));

        usdAEur.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 1.17965));
        usdAGbp.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 1.33899));
        usdACny.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 0.15115));

        gbpAEur.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 0.88082));
        gbpAUsd.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 0.74679));
        gbpACny.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 0.11291));

        cnyAEur.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 7.80365));
        cnyAGbp.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 8.85819));
        cnyAUsd.setText(String.valueOf(Double.parseDouble(numeroIntroducido.getText().toString()) * 6.61640));
    }


}
