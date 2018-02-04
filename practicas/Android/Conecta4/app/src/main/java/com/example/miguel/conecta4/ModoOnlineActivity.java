package com.example.miguel.conecta4;

import android.content.Context;
import android.content.Intent;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

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

public class ModoOnlineActivity extends AppCompatActivity {

    String jugada = "";
    ArrayList<String> listaPartidas = new ArrayList<String>();
    ArrayList<String> idListaPartidas = new ArrayList<String>();
    private ListView mostrarPartidas;
    FloatingActionButton annadirPartida;
    Context myContext;
    String ip = "http://192.168.1.38:8080";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_modo_online);
        myContext = this;
        annadirPartida = (FloatingActionButton) findViewById(R.id.annadirPartida);
        annadirPartida.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
                StringRequest request = new StringRequest(ip + "/test/ejercicios/php/conecta4Online/start.php", new Response.Listener<String>() {
                    //StringRequest request = new StringRequest("http://oschertar.16mb.com/conecta4Online/start.php", new Response.Listener<String>() {

                    @Override
                    public void onResponse(String response) {

                        try {
                            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
                            DocumentBuilder db = dbf.newDocumentBuilder();
                            InputSource is = new InputSource();
                            is.setCharacterStream(new StringReader(response));
                            Document doc = db.parse(is);
                            NodeList nodes = doc.getElementsByTagName("game");
                            String id = "";
                            for (int i = 0; i < nodes.getLength(); i++) {
                                Element element = (Element) nodes.item(i);

                                id = element.getAttribute("id");


                            }
                            Intent intent = new Intent(myContext, PartidaOnlineActivity.class);


                            intent.putExtra("ID_PARTIDA", id);
                            intent.putExtra("JUGADOR", "1");


                            startActivity(intent);
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
        });

        mostrarPartidas = (ListView) findViewById(R.id.listaPartidas);
        Timer T = new Timer();
        T.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        accederBD(ip + "/test/ejercicios/php/conecta4Online/games.php", mostrarPartidas);
                        //accederBD("http://oschertar.16mb.com/conecta4Online/games.php", mostrarPartidas);
                    }
                });
            }
        }, 2000, 2000);

        mostrarPartidas.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                //Toast.makeText(getApplicationContext(), "Ha pulsado el item " + position, Toast.LENGTH_SHORT).show();
                String idPartida = idListaPartidas.get(position);
                RequestQueue queue = VolleySingleton.getInstance(myContext).getRequestQueue();
                StringRequest request = new StringRequest(ip + "/test/ejercicios/php/conecta4Online/disableGame.php?id=" + idPartida + "&estado=1", new Response.Listener<String>() {
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
                Intent intent = new Intent(myContext, PartidaOnlineActivity.class);
                intent.putExtra("ID_PARTIDA", idPartida);
                intent.putExtra("JUGADOR", "2");
                startActivity(intent);
            }
        });


    }

    private void accederBD(String url, final ListView lista) {
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
                    NodeList nodes = doc.getElementsByTagName("game");
                    listaPartidas.clear();
                    idListaPartidas.clear();
                    for (int i = 0; i < nodes.getLength(); i++) {
                        Element element = (Element) nodes.item(i);
                        //                 NodeList name = element.getElementsByTagName("move");
                        //                 Element line = (Element) name.item(0);

                        jugada = "Partida con id: " + element.getAttribute("id");

                        listaPartidas.add(i, jugada);
                        idListaPartidas.add(i, element.getAttribute("id"));
                        //jugada =  getCharacterDataFromElement(line); //Utilizada para sacar la información de las etiquetas no de los atributos
                        //mostrarPartidas.setText(mostrarPartidas.getText().toString() + "\n" + jugada);


                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }

                ArrayAdapter<String> adaptador = new ArrayAdapter<String>(myContext, android.R.layout.simple_list_item_1, listaPartidas);

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

}