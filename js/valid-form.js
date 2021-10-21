function validar(){
    var formulario = document.form;

    if(form.nombre.value==0){
        alert("El campo Nombre esta vacio");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }
    if(form.telefono.value==0){
        alert("El campo Telefono esta vacio");
        form.telefono.value="";
        form.telefono.focus();
        return false;
    }
    if(form.correo.value==0){
        alert("El campo Correo esta vacio");
        form.correo.value="";
        form.correo.focus();
        return false;
    }
    if(form.mensaje.value==0){
        alert("El campo Mensaje esta vacio");
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }

}