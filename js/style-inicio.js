var salva = {
    "salvador": [
        {
            "General": "El Salvador, oficialmente República de El Salvador, es un país soberano de América Central ubicado en el litoral del océano Pacífico con una extensión territorial de 21 041 km²",
            "Poblacion": "En el año 2021 contaba con una población estimada en 6 325 827 habitantes según una estimación realizada por la Dirección General de Estadísticas y Censos en compañía de la CEPAL",
            "Economia": "La economía salvadoreña ha experimentado una mezcla de resultados durante los sucesivos gobiernos del partido ARENA en las iniciativas del mercado libre y el modelo de gerencia fiscal que incluyen la privatización del sistema de actividades bancarias",
            "Turismo": "El turismo constituye uno de los mayores recursos para el desarrollo económico de El Salvador, El Salvador presenta, además, un potencial de excepción en el ámbito del turismo cultural, con más de 2,000 lugares arqueológicos reconocidos, muestras de las culturas maya y olmeca, principalmente"
        },
    ]
};
var div = document.getElementById("informacion");
div.innerHTML = CineDatos(salva.salvador);
function CineDatos(datos) {
    data+="<h1>Datos generales</h1>";
    data+= "<p>\n " + datos[i].General + "\n</p>\n";
    data+="<h1>Poblacion de El Salvador</h1>";
    data += "<p>Clasificación: " + datos[i].Poblacion + "</p>";
    data+="<h1>Economia de El Salvador</h1>";
    data += "<p>Formato de pelicula: " + datos[i].Economia + "</p>";
    data+="<h1>Turismo en El Salvador</h1>";
    data += "<p>" + datos[i].Turismo + "</p>";
    return data;
}