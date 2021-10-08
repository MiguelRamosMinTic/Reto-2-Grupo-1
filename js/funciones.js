// ROOM -----------------------#

function consultar(){
    $.ajax({
        url:'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room',
        type:'GET',
        dataType: 'json',
        success:function(response) {
            var misItems = response.items;

            $("#miResultado").append("<td>ID</td>");
            $("#miResultado").append("<td>ROOM</td>");
            $("#miResultado").append("<td>STARS</td>");
            $("#miResultado").append("<td>CATEGORY_ID</td>");
            $("#miResultado").append("<td>DESCRIPTION</td>");
            $("#miResultado").append("<td>ELIMINAR</td>");
            for(i=0;i<misItems.length;i++){
                console.log(misItems[i]);
                $("#miResultado").append("<tr>");
                $("#miResultado").append("<td>"+misItems[i].id+"</td>");
                $("#miResultado").append("<td>"+misItems[i].room+"</td>");
                $("#miResultado").append("<td>"+misItems[i].stars+"</td>");
                $("#miResultado").append("<td>"+misItems[i].category_id+"</td>");
                $("#miResultado").append("<td>"+misItems[i].description+"</td>");
                $("#miResultado").append("<td><button onclick='eliminar("+misItems[i].id+")'>BORRAR</button></td>");
                $("#miResultado").append("</tr>");
            }
        },

        error: function(jqXHR, textStatus, errorThrown){

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
            limpiarFormulario();
            location.href = location.href;
        }
    });
}

function editar(){
    var elemento={
      id:$("#idBase").val(),
      room:$("#roomBase").val(),
      stars:$("#starsBase").val(),
      category_id:$("#categoryBase").val(),
      description:$("#descriptionBase").val()
      }
    
    
    var dataToSend=JSON.stringify(elemento);
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
          type:'PUT',
          
          success:function(response) {
            console.log(response);
          },

          complete : function(xhr, status){
            alert("Actualizado Correctamente");
            limpiarFormulario();
            location.href = location.href;
            },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }

function eliminar(idElemento){
    var elemento={
      id:idElemento
    };
    
    
    var dataToSend=JSON.stringify(elemento);
    $.ajax({
          dataType:'json',
          data:dataToSend,
          url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
          type:'DELETE',
          contentType:'application/json',
          success:function(response) {
            console.log(response);
            alert("Borrado Correctamente :)");
            location.href = location.href;
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    }

function buscarPorID(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room/"+idItem.val(),
        type:'GET',
        success:function(response) {
          console.log(response);
          var item=response.items[0];

          $("#resultado").empty();
          $("#resultado").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>ROOM</th><td>"+
          item.room +"</td></tr> "+"<tr><th>STARS</th><td>"+
          item.stars +"</td></tr> "+"<tr><th>CATEGORY_ID</th><td>"+
          item.category_id +"</td></tr> "+"<tr><th>DESCRIPTION</th><td>"+
          item.description +"</td></tr></table>");
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }




// CLIENT -----------------------#
function consultarClient(){
  $.ajax({
      url:'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
      type:'GET',
      dataType: 'json',
      success:function(response) {
          var misItems = response.items;

          $("#miResultadoClient").append("<td>ID</td>");
          $("#miResultadoClient").append("<td>NAME</td>");
          $("#miResultadoClient").append("<td>EMAIL</td>");
          $("#miResultadoClient").append("<td>AGE</td>");
          $("#miResultadoClient").append("<td>ELIMINAR</td>");
          for(i=0;i<misItems.length;i++){
              console.log(misItems[i]);
              $("#miResultadoClient").append("<tr>");
              $("#miResultadoClient").append("<td>"+misItems[i].id+"</td>");
              $("#miResultadoClient").append("<td>"+misItems[i].name+"</td>");
              $("#miResultadoClient").append("<td>"+misItems[i].email+"</td>");
              $("#miResultadoClient").append("<td>"+misItems[i].age+"</td>");
              $("#miResultadoClient").append("<td><button onclick='eliminarClient("+misItems[i].id+")'>BORRAR</button></td>");
              $("#miResultadoClient").append("</tr>");
          }
      },

      error: function(jqXHR, textStatus, errorThrown){

      }
  });
}

function guardarClient(){
  $.ajax({    
      url : 'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
      data : {
          id: $("#idClient").val(),
          name: $("#nameClient").val(),
          email: $("#emailClient").val(),
          age: $("#ageClient").val() },
      type : 'POST',
      dataType: 'json',
      success : function(json) {
          console.log(json);
      },

      complete : function(xhr, status){
          alert("Guardado Correctamente");
          limpiarFormulario();
          location.href = location.href;
      }
  });
}

function editarClient(){
  var elemento={
    id:$("#idClient").val(),
    name:$("#nameClient").val(),
    email:$("#emailClient").val(),
    age:$("#ageClient").val()
    }
  
  
  var dataToSend=JSON.stringify(elemento);
  $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:'PUT',
        
        success:function(response) {
          console.log(response);
        },

        complete : function(xhr, status){
          alert("Actualizado Correctamente");
          limpiarFormulario();
          location.href = location.href;
          },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }

function eliminarClient(idElemento){
  var elemento={
    id:idElemento
  };
  
  var dataToSend=JSON.stringify(elemento);
  $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
          console.log(response);
          alert("Borrado Correctamente :)");
          location.href = location.href;
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  }

function buscarPorIDClient(idItem){
  $.ajax({
      dataType: 'json',
      url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/"+idItem.val(),
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#resultadoClient").empty();
        $("#resultadoClient").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>NAME</th><td>"+
        item.name +"</td></tr> "+"<tr><th>EMAIL</th><td>"+
        item.email +"</td></tr> "+"<tr><th>AGE</th><td>"+
        item.age +"</td></tr></table>");
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

// MESSAGE -----------------------#

function consultarMessage(){
  $.ajax({
      url:'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
      type:'GET',
      dataType: 'json',
      success:function(response) {
          var misItems = response.items;

          $("#miResultadoMessage").append("<td>ID</td>");
          $("#miResultadoMessage").append("<td>MESSAGETEXT</td>");
          $("#miResultadoMessage").append("<td>ELIMINAR</td>");
          for(i=0;i<misItems.length;i++){
              console.log(misItems[i]);
              $("#miResultadoMessage").append("<tr>");
              $("#miResultadoMessage").append("<td>"+misItems[i].id+"</td>");
              $("#miResultadoMessage").append("<td>"+misItems[i].messagetext+"</td>");
              $("#miResultadoMessage").append("<td><button onclick='eliminarMessage("+misItems[i].id+")'>BORRAR</button></td>");
              $("#miResultadoMessage").append("</tr>");
          }
      },

      error: function(jqXHR, textStatus, errorThrown){

      }
  });
}

function guardarMessage(){
  $.ajax({    
      url : 'https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
      data : {
          id: $("#idMessage").val(),
          messagetext: $("#message").val() },
      type : 'POST',
      dataType: 'json',
      success : function(json) {
          console.log(json);
      },

      complete : function(xhr, status){
          alert("Guardado Correctamente");
          limpiarFormulario();
          location.href = location.href;
      }
  });
}

function editarMessage(){
  var elemento={
    id:$("#idMessage").val(),
    messagetext:$("#message").val()
    }
  
  
  var dataToSend=JSON.stringify(elemento);
  $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:'PUT',
        
        success:function(response) {
          console.log(response);
        },

        complete : function(xhr, status){
          alert("Actualizado Correctamente");
          limpiarFormulario();
          location.href = location.href;
          },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }

function eliminarMessage(idElemento){
  var elemento={
    id:idElemento
  };
  
  var dataToSend=JSON.stringify(elemento);
  $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
          console.log(response);
          alert("Borrado Correctamente :)");
          location.href = location.href;
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  }

function buscarPorIDMessage(idItem){
  $.ajax({
      dataType: 'json',
      url:"https://g18b75f4cf84ad9-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/"+idItem.val(),
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#resultadoMessage").empty();
        $("#resultadoMessage").append("<table class='default' style='margin: 0 auto; color: aliceblue;'><tr><th>MESSAGETEXT</th><td>"+
        item.messagetext +"</td></tr></table>");
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}


function limpiarFormulario(){
    $("#idBase").val("");
    $("#roomBase").val("");
    $("#starsBase").val("");
    $("#categoryBase").val("");
    $("#descriptionBase").val("");
}
