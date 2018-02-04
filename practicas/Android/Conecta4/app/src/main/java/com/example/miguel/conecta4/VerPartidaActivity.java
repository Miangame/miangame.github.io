package com.example.miguel.conecta4;

import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.view.ContextThemeWrapper;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
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

public class VerPartidaActivity extends AppCompatActivity {
    TextView letreroID;
    ArrayList<String> arrayListaMovimientos = new ArrayList<String>();
    String movimiento = "";
    private ListView listaMovimientos;
    FloatingActionButton annadirMovimiento;
    EditText numeroColumna, numeroFila;
    int ultimoTurno = 1;
    String idPartida= "";
    String jugador = "";
    Context myContext;
    String valorJugador = "";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ver_partida);
        myContext = this;
        letreroID = (TextView)findViewById(R.id.letreroID);
        idPartida =  getIntent().getStringExtra("ID_PARTIDA");
        jugador = getIntent().getStringExtra("JUGADOR");


        listaMovimientos = (ListView) findViewById(R.id.listaMovimientos);
        numeroColumna = (EditText) findViewById(R.id.numeroColumna);
        numeroFila = (EditText) findViewById(R.id.numeroFila);
        annadirMovimiento = (FloatingActionButton) findViewById(R.id.annadirMovimiento);
        letreroID.setText("Partida: " + idPartida);
        Timer T=new Timer();
        T.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                runOnUiThread(new Runnable()
                {
                    @Override
                    public void run()
                    {
                        verJugadas("http://192.168.1.33:8080/test/ejercicios/php/conecta4Online/moves.php?game=" + idPartida, listaMovimientos, "move");
                    }
                });
            }
        }, 100, 5000);

        annadirMovimiento.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (ultimoTurno!= Integer.parseInt(jugador))
                    Toast.makeText(myContext, "No es tu turno", Toast.LENGTH_SHORT).show();
                else {

                    RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
                    StringRequest request = new StringRequest("http://192.168.1.33:8080/test/ejercicios/php/conecta4Online/move.php?game=" + idPartida + "&x="+numeroFila.getText()+"&y="+numeroColumna.getText()+"&color="+jugador, new Response.Listener<String>() {
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
        });
    }


    private void verJugadas(String url, final ListView lista, final String etiqueta) {
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
                        movimiento = "X:" + element.getAttribute("x") +" Y:"+element.getAttribute("y")+" Turno:"+element.getAttribute("color");

                        arrayListaMovimientos.add(i, movimiento);
                        //jugada =  getCharacterDataFromElement(line); //Utilizada para sacar la información de las etiquetas no de los atributos
                        //mostrarPartidas.setText(mostrarPartidas.getText().toString() + "\n" + jugada);


                    }

                    Element element = (Element) nodes.item(nodes.getLength()-1);
                    ultimoTurno = Integer.parseInt(element.getAttribute("color"));
                    if(ultimoTurno==1)
                        ultimoTurno =2;
                    else
                        ultimoTurno=1;
                } catch (Exception e) {
                    e.printStackTrace();
                }

                ArrayAdapter<String> adaptador = new ArrayAdapter<String>(myContext, android.R.layout.simple_list_item_1,arrayListaMovimientos);
                lista.setAdapter(adaptador);


            }
        }, new Response.ErrorListener() {

            @Override
            public void onErrorResponse(VolleyError error) {
                //something happened, treat the error.
            }
        });

        queue.add(request);


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
                StringRequest request = new StringRequest("http://192.168.1.33:8080/test/ejercicios/php/conecta4Online/disableGame.php?id=" + idPartida+"&estado=-1", new Response.Listener<String>() {
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

                VerPartidaActivity.this.finish();

            }
        });



        AlertDialog dialog = builder.create();
        dialog.show();

    }




}
