<?php
$arrayAlumnos = ["Miguel Ángel Gavilán", "Javier Ponferrada", "Jesús Mejias", "Juan Rueda", "Rafael Mellado", "Soledad Cruz", "Mario Ferrer", "Pablo León", "Nieves Borrero", "Rafael Carmona"];

foreach($arrayAlumnos as $alumno){
    echo "<option value='$alumno'></option>";
}