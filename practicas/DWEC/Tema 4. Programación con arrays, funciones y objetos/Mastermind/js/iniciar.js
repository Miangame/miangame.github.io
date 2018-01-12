{
    let iniciar;
    

    let init = function(){

        iniciar = document.getElementById("jugar");

        iniciar.addEventListener("click", function(){
            window.open("juego.html", "");
        });
    }

    window.onload = init;
}