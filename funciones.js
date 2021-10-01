function prueba(){
    $.ajax({
        url : 'direccion de la base de datos oracle',
        // data : { id : 123}
        type : 'GET',
        dataType : 'json',

        success : function(json) {
            $("#resultado").empty();    // resultado es la variable que se crea en el html donde se obtiene lo escrito por el usuario
            for(i = 0; i<json.items.length; i++){
                $("#resultado").append(json.items[i].nombre+"<br>");
            }
            console.log(json)
        },
        error : function(xhr, status){
            alert('Ha sucedido un problema, '+xhr,status);
        },
        complete : function(xhr, status){
            alert('Peticion realizada, '+xhr,status);
        }

    });

}