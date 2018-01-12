package com.example.miguel.exconversordivisas;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class ConfiguracionActivity extends AppCompatActivity {

    private Button convertir;

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
        setContentView(R.layout.configuracion);

        convertir = (Button) findViewById(R.id.convertir);

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

        convertir.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent (v.getContext(), ConversorActivity.class);
                intent.putExtra("valorEurAUsd", eurAUsd.getText());
                startActivityForResult(intent, 0);
            }
        });
    }
}
