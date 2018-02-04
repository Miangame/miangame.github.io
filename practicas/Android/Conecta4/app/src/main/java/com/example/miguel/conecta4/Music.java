package com.example.miguel.conecta4;

import android.content.Context;
import android.media.MediaPlayer;

/**
 * Created by Miguel on 03/02/2018.
 */

public class Music {
    private static MediaPlayer player;


    public static void play(Context context, int id){
        player = MediaPlayer.create(context,id);
        player.setLooping(true);
        player.start();
    }


    public static void stop(Context context){
        if(player != null){
            player.stop();
            player.release();
            player = null;
        }
    }
}
