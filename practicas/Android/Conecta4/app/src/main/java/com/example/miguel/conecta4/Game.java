package com.example.miguel.conecta4;

/**
 * Clase Game que contendrá el juego del conecta 4
 *
 * @author Miguel Ángel Gavilán Merino
 */
public class Game {
    int[][] tablero;
    static final int NFIL = 6;
    static final int NCOL = 7;
    static final int VACIO = 0;
    static final int JUGADOR = 2;
    static final int MAQUINA = 1;
    static final String JUGADORGANA = "2222";
    static final String MAQUINAGANA = "1111";
    String estado = "Jugando";
    String ganador = "";
    int turno;
    static final String PATRONGANADOR_A = "222";
    static final String PATRONGANADOR_B = "22";
    static final String PATRONGANADOR_C = "2022";

    Game(int jugador) {
        tablero = new int[NFIL][NCOL];
        setTurno(jugador);
        inicializarTablero();
    }

    void inicializarTablero() {

        for (int i = 0; i < NFIL; i++) {
            for (int j = 0; j < NCOL; j++) {
                tablero[i][j] = VACIO;
            }
        }
    }



    void cambiarTurno() {
        if (getTurno() == JUGADOR)
            turno = MAQUINA;
        else
            turno = JUGADOR;
    }

    void setTurno(int turno) {
        this.turno = turno;
    }

    int getTurno() {
        return turno;
    }

    boolean isVacio(int fila, int columna) {
        if (tablero[fila][columna] == VACIO)
            return true;
        return false;
    }

    void setFicha(int i, int j) {
        tablero[i][j] = this.turno;
    }




    String fila(int fila) {
        String cadena = "";
        for (int i = 0; i < NCOL; i++) {
            cadena += tablero[fila][i];



        }

        return cadena;
    }

    String columna(int columna) {
        String cadena = "";
        for (int i = 0; i < NFIL -1; i++) {
            for (int j = 0; j < NCOL; j++) {
                if (j == columna) {
                    cadena = "";
                    for (int k = 0; k < NFIL; k++) {
                        cadena += tablero[k][j];

                    }
                }



            }
        }

        return cadena;
    }

    String diagonalIzquierda(int fila, int columna) {
        String cadena = "";
        for (int i = fila, j= columna; i < NFIL && j < NCOL; i++, j++)
            cadena += tablero[i][j];
        for (int i = fila-1, j= columna - 1; j >= 0 && i >=0; i--, j--)
            cadena = tablero[i][j] + cadena;

        return cadena;
    }

    String diagonalDerecha(int fila, int columna) {
        String cadena = "";
        for (int i = fila, j= columna; i < NFIL && j >= 0; i++, j--)
            cadena += tablero[i][j];
        for (int i = fila-1, j= columna + 1; j < NCOL && i >=0; i--, j++)
            cadena = tablero[i][j] + cadena;

        return cadena;
    }

    boolean comprobarPartida(int fila, int columna) {
        if (fila(fila).contains(JUGADORGANA) || columna(columna).contains(JUGADORGANA) || diagonalDerecha(fila, columna).contains(JUGADORGANA) || diagonalIzquierda(fila, columna).contains(JUGADORGANA)) {
            ganador = "Jugador";
            return true;
        } else if (fila(fila).contains(MAQUINAGANA) || columna(columna).contains(MAQUINAGANA) || diagonalDerecha(fila, columna).contains(MAQUINAGANA) || diagonalIzquierda(fila, columna).contains(MAQUINAGANA)) {
            ganador = "Maquina";
            return true;
        }
        return false;
    }

    boolean comprobarPartidaOnline(int fila, int columna) {
        if (fila(fila).contains(JUGADORGANA) || columna(columna).contains(JUGADORGANA) || diagonalDerecha(fila, columna).contains(JUGADORGANA) || diagonalIzquierda(fila, columna).contains(JUGADORGANA)) {
            ganador = "2";
            return true;
        } else if (fila(fila).contains(MAQUINAGANA) || columna(columna).contains(MAQUINAGANA) || diagonalDerecha(fila, columna).contains(MAQUINAGANA) || diagonalIzquierda(fila, columna).contains(MAQUINAGANA)) {
            ganador = "1";
            return true;
        }
        return false;
    }

    int maquinaRespondeMovimientoA(int columna) {
        String fila;
        int col;


        for (int i = 0; i < NFIL; i++) {
            fila = "";
            for (int j = 0; j < NFIL; j++) {
                fila += tablero[i][j];
                col = j;

                if(fila.contains(PATRONGANADOR_A) && col!= (NCOL-1) && tablero[i][col + 1] == VACIO)
                    return col + 1;
                if(fila.contains(PATRONGANADOR_A) && (col-3)>=0 && tablero[i][col- 3 ] == VACIO)
                    return col - 3;

            }

        }


        return columna;
    }

    String mostrarTablero(){
        String cadena="";
        for (int i = 0; i < NFIL; i++) {
            for (int j = 0; j < NCOL; j++) {
                cadena+=  tablero[i][j];
            }

        }
        return cadena;
    }
    String tableroToString(){
        String cadena="";
        for (int i = 0; i < NFIL; i++) {
            for (int j = 0; j < NCOL; j++) {
                cadena+=  tablero[i][j];
            }

        }
        return cadena;
    }

    void StringToTablero(String cadena){

        int contador=0;
        for (int i = 0; i<NFIL; i++) {
            for (int j = 0; j < NCOL; j++) {
                tablero[i][j]=Integer.parseInt(cadena.substring(contador, contador+1));
                contador++;
            }

        }

    }

}