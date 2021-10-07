// ROOM -----------------------#

function consultar(){
    $.ajax({    
            url : 'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room',
            type : 'GET',
            dataType : 'json',
            success : function(json) {
                $("#resultado").empty();
                    for(i = 0;  i < json.items.length; i++){
                            $("#resultado").append(json.items[i].room+"<br>");
                    }
                    console.log(json),
                    alert("Peticion Exitosa"),
                    limpiarFormulario();
            }
        });
}

function guardar(){
    $.ajax({    
        url : 'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room',
        data : {
            id: $("#idBase").val(),
            room: $("#roomBase").val(),
            stars: $("#starsBase").val(),
            category_id: $("#categoryBase").val(),
            description: $("#descriptionBase").val() },
        type : 'POST',
        dataType: 'json',
        success : function(json) {
            console.log(json);
        },

        complete : function(xhr, status){
            alert("Guardado Correctamente");
        }
    });
}

function editar(){
    $.ajax({    
        url : 'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room',
        data : {
            id: $("#idBase").val(),
            room: $("#roomBase").val(),
            stars: $("#starsBase").val(),
            category_id: $("#categoryBase").val(),
            description: $("#descriptionBase").val() },
        type: 'PUT',
        dataType : 'json',
        success : function(json, textStatus, xhr) {
                console.log(json);
        }, 

        complete : function(xhr, status) {
            alert('Actualizado Correctamente '+xhr.status);
            limpiarFormulario();
        }
    });
}

function eliminar(){
    $.ajax({    
        url : 'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room',
        data : { 
                id: $("#idBase2").val() },
        dataType : 'json',
        type: 'DELETE',
        success : function(json, textStatus, xhr) {
                console.log(json);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema'+ xhr.status);
            
        },
        complete : function(xhr, status) {
            alert('Petición realizada '+xhr.status);
            limpiarFormulario();
        }
    });
}

function buscarPorID(id){
    $.ajax({    
        url : 'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room/:id'+id.val(),
        dataType : 'json',
        type : 'GET',
        success : function(json) {
                $("#resultado").empty();
                $("#resultado").append( json.items[0].room +" $"+json.items[0].stars + " $"+json.items[0].category_id + " $"+json.items[0].description);
                console.log(json);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema'+ xhr.status);
        },
        complete : function(xhr, status) {
            alert('Petición realizada '+xhr.status);
        }
    });
}


// CLIENT -----------------------#

// MESSAGE -----------------------#








function limpiarFormulario(){
    $("#idBase").val("");
    $("#roomBase").val("");
    $("#starsBase").val("");
    $("#categoryBase").val("");
    $("#descriptionBase").val("");
}

function soloLectura(){
    $("#id").prop("readonly",false);
}