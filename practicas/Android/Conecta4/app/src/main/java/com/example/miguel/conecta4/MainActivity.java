package com.example.miguel.conecta4;

import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.ContextThemeWrapper;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;

public class MainActivity extends AppCompatActivity {
    Game juego;
    LinearLayout layout;
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

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle item selection
        switch (item.getItemId()) {
            case R.id.tituloAcercaDe:
                startActivity(new Intent(this, AboutActivity.class));
                return true;
            case R.id.tituloEnviarMensaje:
                Intent intent = new Intent(android.content.Intent.ACTION_SEND);
                intent.setType("text/plain");
                intent.putExtra(Intent.EXTRA_SUBJECT, "CONECTA 4");
                intent.putExtra(Intent.EXTRA_TEXT, "Nueva aplicación de Android");
                startActivity(intent);
                return true;
            case R.id.tituloAjustes:
                /*Toast mensaje = Toast.makeText(getApplicationContext(), "Opción no implementada", Toast.LENGTH_SHORT);
                mensaje.show();*/

                FragmentManager mFragmentManager = getFragmentManager();
                FragmentTransaction mFragmentTransaction = mFragmentManager
                        .beginTransaction();
                preferenciasFragment mPrefsFragment = new preferenciasFragment();
                mFragmentTransaction.replace(android.R.id.content, mPrefsFragment);
                mFragmentTransaction.addToBackStack(null);
                layout = (LinearLayout) findViewById(R.id.activity_main);
                layout.removeAllViewsInLayout();
                mFragmentTransaction.commit();


                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    @Override
    public void onSaveInstanceState(Bundle savedInstanceState) {
        savedInstanceState.putInt("TURNO",juego.getTurno());
        savedInstanceState.putString("TABLERO",juego.tableroToString());

        super.onSaveInstanceState(savedInstanceState);
    }

    @Override
    public void onRestoreInstanceState(Bundle savedInstanceState) {

        super.onRestoreInstanceState(savedInstanceState);


        juego.setTurno(savedInstanceState.getInt("TURNO"));
        juego.StringToTablero(savedInstanceState.getString("TABLERO"));
        pintarTablero();
    }

    @Override
    protected void onResume(){
        super.onResume();
        Boolean play = false;
        SharedPreferences sharedPreferences =
                PreferenceManager.getDefaultSharedPreferences(this);
        if (sharedPreferences.contains(Preferencias.PLAY_MUSIC_KEY))
            play = sharedPreferences.getBoolean(Preferencias.PLAY_MUSIC_KEY,
                    Preferencias.PLAY_MUSIC_DEFAULT);
        if (play == true)
            Music.play(this, R.raw.musica);
    }

    @Override
    protected void onPause(){
        super.onPause();
        //Music.stop(this);
    }

   /* @Override
    public void onBackPressed() {
        startActivity(getIntent());
        super.onBackPressed();
    }*/

    void pintarTablero(){
        for (int i = 0; i < arrayId.length; i++) {
            for (int j = 0; j < arrayId[i].length; j++) {
                pintarFicha(i,j,juego.tablero[i][j]);

            }
        }
    }

    void pintarFicha(int k, int j, int turno){
        ImageView iv = (ImageView) findViewById(arrayId[k][j]);
        if (turno == Game.JUGADOR)
            iv.setImageResource(R.drawable.fichaazul);
        else if(turno == Game.MAQUINA)
            iv.setImageResource(R.drawable.ficharoja);
    }
    /*public void pulsarFicha(View v) {
        for (int i = 0; i < arrayId.length; i++) {
            for (int j = 0; j < arrayId[i].length; j++) {
                if (v.getId() == arrayId[i][j]) {
                    //filaJuego = juego.filaSeleccionada(columna);
                    for (int k = 0; k < arrayId.length; k++) {//si es el ultimo || si la siguiente a esa no está vacio) && juego.isVacio(k,j)
                        if ((k == (arrayId.length - 1) || !juego.isVacio(k + 1, j)) && juego.isVacio(k, j)) {
                            if(juego.estado == "Jugando"){
                                    juego.setFicha(k, j);
                                    pintarFicha(k, j, juego.getTurno());
                                    if (juego.comprobarPartida(k, j)) {
                                        mostrarMensajeGanador();
                                        juego.estado = "Terminado";
                                        //Toast mensaje = Toast.makeText(getApplicationContext(), "Has ganado", Toast.LENGTH_SHORT);
                                        //mensaje.show();
                                    }
                                juego.cambiarTurno();
                            }else if(juego.estado == "Terminado"){
                                mostrarMensajeGanador();
                            }
                        }
                    }
                }
            }
        }
    }*/

    public void jugar(int j){
        for (int k = 0; k < arrayId.length; k++) {//si es el ultimo || si la siguiente a esa no está vacio) && juego.isVacio(k,j)
            if ((k == (arrayId.length - 1) || !juego.isVacio(k + 1,j)) && juego.isVacio(k, j)) {
                if(juego.estado == "Jugando"){
                    juego.setFicha(k, j);
                    pintarFicha(k, j, juego.getTurno());

                    if (juego.comprobarPartida(k, j)) {
                        mostrarMensajeGanador();
                        juego.estado = "Terminado";
                        //Toast mensaje = Toast.makeText(getApplicationContext(), "Has ganado", Toast.LENGTH_SHORT);
                        //mensaje.show();
                    }
                    juego.cambiarTurno();



                }else if(juego.estado == "Terminado"){
                    mostrarMensajeGanador();
                }
            }




        }
    }
    public void pulsarFicha(View v) {

        for (int i = 0; i < arrayId.length; i++) {
            for (int j = 0; j < arrayId[i].length; j++) {
                if (v.getId() == arrayId[i][j]){
                    if(juego.estado != "Terminado")
                        jugar(j);
                    else
                        mostrarMensajeGanador();
                }

                if(juego.getTurno() == juego.MAQUINA  && juego.estado != "Terminado"){
                    int col = juego.maquinaRespondeMovimientoA(j);
                    jugar(col);
                }

            }
        }
    }

    private void mostrarMensajeGanador() {
        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(this, R.style.AppTheme));
        if(juego.ganador == "Jugador") {
            builder.setMessage(R.string.mensajeDialogoJugador);

        }else if(juego.ganador == "Maquina"){
            builder.setMessage(R.string.mensajeDialogoMaquina);

        }
        builder.setTitle(R.string.tituloDialogo);
        builder.setPositiveButton(R.string.dialogoAceptar, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                Intent intent = getIntent();
                finish();
                startActivity(intent);
            }
        });
        builder.setNegativeButton(R.string.dialogoSalir, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                onBackPressed();
            }
        });



        AlertDialog dialog = builder.create();
        dialog.show();
    }
}