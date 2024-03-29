/*
***************************************************************************************
******************************* UTILIZANDO OBJETOS JSON *******************************
***************************************************************************************
*/
//se declara un objeto json para almacenar la información
// y se agrega la informacion a mostrar en la pagina de inicio
var Pelis = {
    "Peliculas": [
    {"General": "El Salvador, oficialmente República de El Salvador, es un país soberano de América Central ubicado en el litoral del océano Pacífico con una extensión territorial de 21 041 km²",
    "Poblacion": "En el año 2021 contaba con una población estimada en 6 325 827 habitantes según una estimación realizada por la Dirección General de Estadísticas y Censos en compañía de la CEPAL",
    "Economia": "La economía salvadoreña ha experimentado una mezcla de resultados durante los sucesivos gobiernos del partido ARENA en las iniciativas del mercado libre y el modelo de gerencia fiscal que incluyen la privatización del sistema de actividades bancarias",
    "Turismo": "El turismo constituye uno de los mayores recursos para el desarrollo económico de El Salvador, El Salvador presenta, además, un potencial de excepción en el ámbito del turismo cultural, con más de 2,000 lugares arqueológicos reconocidos, muestras de las culturas maya y olmeca, principalmente"

},
]};

    //se inicializa una variable y le al macenamos el id del DIV informacion que se encuentra en la pagina inicio
   var div = document.getElementById("informacion");
   // le agregamos a la variable el objeto a proyectar
   // y le asignamos los nombre de el objeto JSON declarado anteriormente
   div.innerHTML = CineDatos(Pelis.Peliculas);
   //declaramos la funcion y le asiganamos una variable la cual nos servira para asiganr los valores 
   function CineDatos(datos){
    //declaramos un variable para utilizar la en dado caso que aya más objetos y se repita tantas veces 
    // objetos esten 
    var total = datos.length;
    //declaramos las etiquetas HTML
    data = "<ul class=\"grid\">\n";
    //El ciclo for por si hay mas objetos JSON para que se puedan mostrar los que ayan
    for(var i=0; i<total; i++){

    data += "<div class=\"unido\">\n";

    data += "<div class=\"movie-cover1\"/>\n";
    data += "</div>\n";
    data += "<div class=\"box-movie-format\">\n";
    data +="<h2>Informacion General</h2>";
    //Asignamos los datos de el objeto JSON para mostrar los en el DIV y asi con todos los datos
    data += "<p>" + datos[i].General +"</p>";
    data += "<div>\n";
    data += "<div>\n";
    data += "</span>\n";
    data += "</span>\n";
    data += "</div>\n";
    data +="<h2>Poblacion en El Salvador</h2>";
    data += "<p>" + datos[i].Poblacion +"</p>";
    data += "<div>";
    data += "</div>\n";
    data += "</span>\n";
    data += "</div>\n";
    data +="<h2>Economia en El Salvador</h2>";
    data += "<p> "+datos[i].Economia+"</p>";
    data +="<br>";
    data +="<h2>Turismo en El Salvador</h2>";
    data += "<p> "+datos[i].Turismo+"</p>";

    data += "</div>\n";
    data += "</div>\n";
    }
    data += "</ul>\n";
    return data;
    //retornamos el data que va a contener toda la informacion que se pressentara en el DIV de inicio(HTML)
   }
