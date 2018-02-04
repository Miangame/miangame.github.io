package com.example.miguel.conecta4;

import android.os.Bundle;
import android.preference.PreferenceActivity;

/**
 * Created by Miguel on 03/02/2018.
 */

public class Preferencias extends PreferenceActivity {
    public final static String PLAY_MUSIC_KEY = "actdes";
    public final static boolean PLAY_MUSIC_DEFAULT = true;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }


}