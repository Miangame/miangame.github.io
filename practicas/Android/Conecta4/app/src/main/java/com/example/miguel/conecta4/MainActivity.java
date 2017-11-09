package com.example.miguel.conecta4;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.ContextThemeWrapper;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {
    private Game juego;
    private int[][] arrayId = {{R.id.boton00, R.id.boton01, R.id.boton02, R.id.boton03, R.id.boton04, R.id.boton05, R.id.boton06},
            {R.id.boton10, R.id.boton11, R.id.boton12, R.id.boton13, R.id.boton14, R.id.boton15, R.id.boton16},
            {R.id.boton20, R.id.boton21, R.id.boton22, R.id.boton23, R.id.boton24, R.id.boton25, R.id.boton26},
            {R.id.boton30, R.id.boton31, R.id.boton32, R.id.boton33, R.id.boton34, R.id.boton35, R.id.boton36},
            {R.id.boton40, R.id.boton41, R.id.boton42, R.id.boton43, R.id.boton44, R.id.boton45, R.id.boton46},
            {R.id.boton50, R.id.boton51, R.id.boton52, R.id.boton53, R.id.boton54, R.id.boton55, R.id.boton56}};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        juego = new Game(Game.JUGADOR);
    }


    public void jugar(int j) {
        for (int k = 0; k < arrayId.length; k++) {//si es el ultimo || si la siguiente a esa no está vacio) && juego.isVacio(k,j)
            if ((k == (arrayId.length - 1) || !juego.isVacio(k + 1, j)) && juego.isVacio(k, j)) {
                if (juego.estado == "Jugando") {
                    juego.setFicha(k, j);
                    pintarFicha(k, j, juego.getTurno());

                    if (juego.comprobarPartida(k, j)) {
                        mostrarMensajeGanador();
                        juego.estado = "Terminado";
                    }
                    juego.cambiarTurno();


                } else if (juego.estado == "Terminado") {
                    mostrarMensajeGanador();
                }
            }


        }
    }

    private void mostrarMensajeGanador() {
        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(this, R.style.AppTheme));
        if (juego.ganador == "Jugador") {
            builder.setMessage("Has ganado!!");

        } else if (juego.ganador == "Maquina") {
            builder.setMessage("Has perdido!!");

        }
        builder.setTitle("Partida finalizada");
        builder.setPositiveButton("Nueva partida", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                Intent intent = getIntent();
                finish();
                startActivity(intent);
            }
        });
        builder.setNegativeButton("Salir", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                onBackPressed();
            }
        });


        AlertDialog dialog = builder.create();
        dialog.show();
    }

    void pintarFicha(int k, int j, int turno) {
        ImageView iv = (ImageView) findViewById(arrayId[k][j]);
        if (turno == Game.JUGADOR)
            iv.setImageResource(R.drawable.fichaazul);
        else if (turno == Game.MAQUINA)
            iv.setImageResource(R.drawable.ficharoja);
    }

    public void pulsarFicha(View v) {

        for (int i = 0; i < arrayId.length; i++) {
            for (int j = 0; j < arrayId[i].length; j++) {
                if (v.getId() == arrayId[i][j]) {
                    if (juego.estado != "Terminado")
                        jugar(j);
                    else
                        mostrarMensajeGanador();
                }

                if (juego.getTurno() == juego.MAQUINA && juego.estado != "Terminado") {
                    int col = juego.maquinaRespondeMovimientoA(j);
                    jugar(col);
                }

            }
        }
    }
}
