<?php
$frameworks= array(
    "angular" => array(
        "nombre"=> "Angular",
        "url"=> "https://angularjs.org/",
        "imagen"=> "https://angular.io/assets/images/logos/angular/angular.png",
        "descripcion"=> "Framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles."
    ),
    "react" => array(
        "nombre"=> "React",
        "url"=> "https://reactjs.org/",
        "imagen"=> "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "descripcion"=> "Biblioteca Javascript de código abierto para crear interfaces de usuario con el objetivo de animar al desarrollo de aplicaciones en una sola página. Es mantenido por Facebook, Instagram y una comunidad de desarrolladores independientes y compañías."
    ),
    "ember" => array(
        "nombre"=> "Ember",
        "url"=> "https://www.emberjs.com/",
        "imagen"=> "https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png",
        "descripcion"=> "Ember.js es un framework de código libre que se basa en la arquitectura Modelo-Vista-Controlador. Permite crear SPA’s escalables incorporando data-binding bidireccional, propiedades computadas, templates de actualización automática y un manejador del estado de la aplicación."
    ),
    "backbone" => array(
        "nombre"=> "Backbone",
        "url"=> "http://backbonejs.org/",
        "imagen"=> "http://www.unixstickers.com/image/cache/data/stickers/backbone/backbone-js.sh-600x600.png",
        "descripcion"=> "Backbone es una herramienta de desarrollo/API para el lenguaje de programación Javascript con un interfaz RESTful por JSON , basada en el paradigma de diseño de aplicaciones Modelo Vista Controlador. Está diseñada para desarrollar aplicaciones de una única página2​ y para mantener las diferentes partes de las aplicaciones web (p.e. múltiples clientes y un servidor) sincronizadas."
    ),
    "mercury" => array(
        "nombre"=> "Mercury",
        "url"=> "https://github.com/Raynos/mercury",
        "imagen"=> "http://techbloghunting.com/wp-content/uploads/2016/10/en_js_mercury-js.png",
        "descripcion"=> "Mercury está muy orientado a los componentes en la raíz de la misma. En general, puedes escribir las aplicaciones como una serie de componentes que devuelven un estado (los datos de los componentes en cualquier punto dado) y proporciona una función de representación. La función de renderizado sabe cómo se debe representar el componente, incluida la estructura dom, los atributos/valores y los eventos/controladores de eventos (conocidos como canales en Mercury).            "
    ),
    "vue" => array(
        "nombre"=> "Vue",
        "url"=> "https://vuejs.org/",
        "imagen"=> "https://vuejs.org/images/logo.png",
        "descripcion"=> "Marco de JavaScript de código abierto progresivo para crear interfaces de usuario. La integración en proyectos que usan otras bibliotecas de JavaScript se hace más fácil con Vue porque está diseñada para ser adoptable incrementalmente. Vue también puede funcionar como un marco de aplicación web capaz de impulsar aplicaciones avanzadas de una sola página."
    ),
    "aurelia" => array(
        "nombre"=> "Aurelia",
        "url"=> "http://aurelia.io/",
        "imagen"=> "http://aurelia.io/styles/images/logo.svg",
        "descripcion"=> "Aurelia es un marco de cliente de JavaScript para web, móvil y escritorio que aprovecha convenciones simples para potenciar su creatividad."
    ),

);

if(isset($_GET["nombre"])){
    echo json_encode($frameworks[$_GET["nombre"]], JSON_FORCE_OBJECT);
}