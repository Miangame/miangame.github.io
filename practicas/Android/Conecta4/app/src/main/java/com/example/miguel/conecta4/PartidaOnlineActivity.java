package com.example.miguel.conecta4;

import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.view.ContextThemeWrapper;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

/**
 * Created by miguel on 28/01/18.
 */

public class PartidaOnlineActivity extends AppCompatActivity {
    Game juego;
    ArrayList<String> arrayListaMovimientos = new ArrayList<String>();
    String movimiento = "";
    int ultimoTurno = 1;
    String idPartida = "";
    String jugador = "";
    Context myContext;
    int contador = 0;
    int contadorAuxiliar = 0;
    int estado;
    String ip = "http://192.168.1.38:8080";
    private int[][] arrayId = {{R.id.boton00, R.id.boton01, R.id.boton02, R.id.boton03, R.id.boton04, R.id.boton05, R.id.boton06},
            {R.id.boton10, R.id.boton11, R.id.boton12, R.id.boton13, R.id.boton14, R.id.boton15, R.id.boton16},
            {R.id.boton20, R.id.boton21, R.id.boton22, R.id.boton23, R.id.boton24, R.id.boton25, R.id.boton26},
            {R.id.boton30, R.id.boton31, R.id.boton32, R.id.boton33, R.id.boton34, R.id.boton35, R.id.boton36},
            {R.id.boton40, R.id.boton41, R.id.boton42, R.id.boton43, R.id.boton44, R.id.boton45, R.id.boton46},
            {R.id.boton50, R.id.boton51, R.id.boton52, R.id.boton53, R.id.boton54, R.id.boton55, R.id.boton56}};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_partida_online);
        juego = new Game(Game.JUGADOR);
        myContext = this;

        idPartida = getIntent().getStringExtra("ID_PARTIDA");
        jugador = getIntent().getStringExtra("JUGADOR");


        Timer T = new Timer();
        T.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        verJugadas(ip + "/test/ejercicios/php/conecta4Online/moves.php?game=" + idPartida, "move");
                        comprobarEstadoPartida();


                        if (estado == 2)
                            contador++;
                        if (contador == 1) {
                            if (ultimoTurno == 1)
                                ultimoTurno = 2;
                            else
                                ultimoTurno = 1;
                            juego.ganador = String.valueOf(ultimoTurno);

                            mostrarMensajeGanador();
                        }
                        if (estado == -1)
                            contadorAuxiliar++;
                        String test = "2";
                        /*Log.d("Valor del jugador", jugador);
                        Log.d("Valor de test", test);
                        Log.d("Condicion con string", String.valueOf(test == "2"));
                        Log.d("Condicion con enteros", String.valueOf(Integer.parseInt(jugador) == 2));*/
                        if (contadorAuxiliar == 1 && Integer.parseInt(jugador) == 2) {

                            partidaAbandonada();

                        }

                        //verJugadas("http://oschertar.16mb.com/conecta4Online/moves.php?game=" + idPartida, listaMovimientos, "move");

                    }
                });
            }
        }, 200, 500);
    }

    void pintarFicha(int k, int j, int turno) {
        ImageView iv = (ImageView) findViewById(arrayId[k][j]);
        if (turno == Game.JUGADOR)
            iv.setImageResource(R.drawable.fichaazul);
        else if (turno == Game.MAQUINA)
            iv.setImageResource(R.drawable.ficharoja);
    }

    private void verJugadas(String url, final String etiqueta) {
        RequestQueue queue = VolleySingleton.getInstance(this).getRequestQueue();
        StringRequest request = new StringRequest(url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {

                try {
                    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
                    DocumentBuilder db = dbf.newDocumentBuilder();
                    InputSource is = new InputSource();
                    is.setCharacterStream(new StringReader(response));
                    Document doc = db.parse(is);
                    NodeList nodes = doc.getElementsByTagName(etiqueta);
                    arrayListaMovimientos.clear();
                    for (int i = 0; i < nodes.getLength(); i++) {
                        Element element = (Element) nodes.item(i);
                        //                 NodeList name = element.getElementsByTagName("move");
                        //                 Element line = (Element) name.item(0);
                        //movimiento = "X:" + element.getAttribute("x") +" Y:"+element.getAttribute("y")+" Turno:"+element.getAttribute("color");
                        pintarFicha(Integer.parseInt(element.getAttribute("x")), Integer.parseInt(element.getAttribute("y")), Integer.parseInt(element.getAttribute("color")));
                        //arrayListaMovimientos.add(i, movimiento);

                        juego.setFicha(Integer.parseInt(element.getAttribute("x")), Integer.parseInt(element.getAttribute("y")));
                        juego.setTurno(Integer.parseInt(element.getAttribute("color")));


                    }
                    if (nodes.getLength() != 0) {
                        Element element = (Element) nodes.item(nodes.getLength() - 1);
                        ultimoTurno = Integer.parseInt(element.getAttribute("color"));
                        if (ultimoTurno == 1)
                            ultimoTurno = 2;
                        else
                            ultimoTurno = 1;


                    }

                } catch (Exception e) {
                    e.printStackTrace();
                }


            }
        }, new Response.ErrorListener() {

            @Override
            public void onErrorResponse(VolleyError error) {
                //something happened, treat the error.
            }
        });

        queue.add(request);


    }

    public void partidaAbandonada() {
        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(this, R.style.AppTheme));
        builder.setMessage("El oponente ha abandonado la partida...");
        builder.setTitle("Abandono");
        builder.setPositiveButton(R.string.dialogoSalir, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                PartidaOnlineActivity.this.finish();
            }
        });
        AlertDialog dialog = builder.create();
        dialog.show();

    }


    @Override
    public void onBackPressed() {
        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(this, R.style.AppTheme));
        builder.setMessage(R.string.mensajeSalidaOnline);
        builder.setTitle(R.string.tituloDialogoSalidaOnline);
        builder.setPositiveButton(R.string.dialogoCancelar, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {

            }
        });
        builder.setNegativeButton(R.string.dialogoSalir, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
                StringRequest request = new StringRequest(ip + "/test/ejercicios/php/conecta4Online/disableGame.php?id=" + idPartida + "&estado=-1", new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {


                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        //something happened, treat the error.
                    }
                });

                queue.add(request);

                PartidaOnlineActivity.this.finish();

            }
        });


        AlertDialog dialog = builder.create();
        dialog.show();

    }

    public void comprobarEstadoPartida() {
        RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
        StringRequest request = new StringRequest(ip + "/test/ejercicios/php/conecta4Online/getState.php?id=" + idPartida, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
                    DocumentBuilder db = dbf.newDocumentBuilder();
                    InputSource is = new InputSource();
                    is.setCharacterStream(new StringReader(response));
                    Document doc = db.parse(is);
                    NodeList nodes = doc.getElementsByTagName("game");

                    for (int i = 0; i < nodes.getLength(); i++) {
                        Element element = (Element) nodes.item(i);
                        estado = Integer.parseInt(element.getAttribute("estado"));

                    }


                } catch (Exception e) {
                    e.printStackTrace();
                }


            }
        }, new Response.ErrorListener() {

            @Override
            public void onErrorResponse(VolleyError error) {
                //something happened, treat the error.
            }
        });

        queue.add(request);
    }

    public void jugar(int j) {
        for (int k = 0; k < arrayId.length; k++) {//si es el ultimo || si la siguiente a esa no está vacio) && juego.isVacio(k,j)
            if ((k == (arrayId.length - 1) || !juego.isVacio(k + 1, j)) && juego.isVacio(k, j)) {
                if (juego.estado == "Jugando") {

                    if (ultimoTurno != Integer.parseInt(jugador))
                        Toast.makeText(myContext, "No es tu turno", Toast.LENGTH_SHORT).show();
                    else {
                        juego.setFicha(k, j);
                        pintarFicha(k, j, ultimoTurno);
                        RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
                        StringRequest request = new StringRequest(ip + "/test/ejercicios/php/conecta4Online/move.php?game=" + idPartida + "&x=" + k + "&y=" + j + "&color=" + ultimoTurno, new Response.Listener<String>() {
                            //StringRequest request = new StringRequest("http://oschertar.16mb.com/conecta4Online/move.php?game=" + idPartida + "&x="+numeroFila.getText()+"&y="+numeroColumna.getText()+"&color="+ultimoTurno, new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {

                            }
                        }, new Response.ErrorListener() {

                            @Override
                            public void onErrorResponse(VolleyError error) {
                                //something happened, treat the error.
                            }
                        });

                        queue.add(request);

                    }
                    if (juego.comprobarPartidaOnline(k, j)) {
                        mostrarMensajeGanador();
                        juego.estado = "Terminado";
                        RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
                        StringRequest request = new StringRequest(ip + "/test/ejercicios/php/conecta4Online/disableGame.php?id=" + idPartida + "&estado=2", new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {


                            }
                        }, new Response.ErrorListener() {

                            @Override
                            public void onErrorResponse(VolleyError error) {
                                //something happened, treat the error.
                            }
                        });

                        queue.add(request);
                    }

                } else if (juego.estado == "Terminado") {
                    mostrarMensajeGanador();
                    RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
                    StringRequest request = new StringRequest(ip + "/test/ejercicios/php/conecta4Online/disableGame.php?id=" + idPartida + "&estado=2", new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {


                        }
                    }, new Response.ErrorListener() {

                        @Override
                        public void onErrorResponse(VolleyError error) {
                            //something happened, treat the error.
                        }
                    });

                    queue.add(request);
                }
            }


        }
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


            }
        }
    }

    private void mostrarMensajeGanador() {
        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(this, R.style.AppTheme));
        if (juego.ganador == "1") {
            builder.setMessage(R.string.mensajeDialogoJugadorUnoGanaOnline);

        } else if (juego.ganador == "2") {
            builder.setMessage(R.string.mensajeDialogoJugadorDosGanaOnline);

        }
        builder.setTitle(R.string.tituloDialogo);
        builder.setPositiveButton(R.string.dialogoSalir, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                PartidaOnlineActivity.this.finish();
            }
        });


        AlertDialog dialog = builder.create();
        dialog.show();
    }
}