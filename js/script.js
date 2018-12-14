function clear(){
  document.getElementById("txt-ser").innerHTML="";
  document.getElementById("imagen-ser").innerHTML="";
  document.getElementById("bene1").innerHTML="";
  document.getElementById("bene2").innerHTML="";
  document.getElementById("bene3").innerHTML="";
  document.getElementById("bene4").innerHTML="";
}


function addServicio(titulo, contenido,b1,b2,b3,b4,b1im,b2im,b3im,b4im,imagen){
    var title = $("<h2/>", {
      "class":"card-title",
      html: titulo
    })

    var p = $("<p/>",{
      "class": "card-text",
      html: contenido
    })


    var bene1=$("<p/>",{
      "class": "card-text col-12",
      html: b1
    })

    var bene2=$("<p/>",{
      "class": "card-text col-12",
      html: b2
    })

    var bene3=$("<p/>",{
      "class": "card-text col-12",
      html: b3
    })

    var bene4=$("<p/>",{
      "class": "card-text col-12",
      html: b4
    })

    var img1=$('<img/>',{
      "class": "col-12",
      "src":b1im
    });

    var img2=$('<img/>',{
      "class": "col-12",
      "src":b2im
    });

    var img3=$('<img/>',{
      "class": "col-12",
      "src":b3im
    });

    var img4=$('<img/>',{
      "class": "col-12",
      "src":b4im
    });

    var imagenserv=$('<img/>',{
      "src":imagen
    });
    
    title.appendTo("#txt-ser" );
    imagenserv.appendTo("#imagen-ser");
    p.appendTo("#txt-ser" );
    img1.appendTo("#bene1");
    img2.appendTo("#bene2");
    img3.appendTo("#bene3");
    img4.appendTo("#bene4");
    bene1.appendTo( "#bene1" )
    bene2.appendTo( "#bene2" );
    bene3.appendTo( "#bene3" );
    bene4.appendTo( "#bene4" );

}

function ethBoton(){
  clear()
  document.querySelector('[ id="active"]').setAttribute('id','inactive')
  document.querySelector('[ href="#eth-hack"]').setAttribute('id','active')
  loadServiciosXml("ethhack") 
}

function cyberBoton(){
  clear()
  document.getElementById("active").setAttribute('id','inactive')
  document.querySelector('[ href="#analy-cyber"]').setAttribute('id','active')
  loadServiciosXml("cyber")
}

function ISOBoton(){
  clear()
  document.getElementById("active").setAttribute('id','inactive')
  document.querySelector('[ href="#cons-iso"]').setAttribute('id','active')
  loadServiciosXml("ISO")
}

function codeBoton(){
  clear()
  document.getElementById("active").setAttribute('id','inactive')
  document.querySelector('[ href="#analy-cod"]').setAttribute('id','active')
  loadServiciosXml("codigo")
}


function loadServiciosXml(seleccionado) {
  $.ajax({
      type: "GET",
      url: "data/Servicios.xml",
      dataType: "xml",
      success: function(xml){
          $(xml).find('item').each(function(){
            var id= $(this).attr('servicio')
            if(seleccionado==id){
              var titulo = $(this).find('titulo').text();
              var contenido = $(this).find('descripcion').text();
              var b1=$(this).find('beneficio1').text();
              var b2=$(this).find('beneficio2').text();
              var b3=$(this).find('beneficio3').text();
              var b4=$(this).find('beneficio4').text();
              var b1im=$(this).find('bene1imagen').text();
              var b2im=$(this).find('bene2imagen').text();
              var b3im=$(this).find('bene3imagen').text();
              var b4im=$(this).find('bene4imagen').text();
              var imagen=$(this).find('imagenser').text();
              
              addServicio(titulo, contenido,b1,b2,b3,b4,b1im,b2im,b3im,b4im,imagen)
            }

          });
      },
      error: function() {
        alert("Error al procesar el xml");
      }
  });
}

$(document).ready(function(){
  loadServiciosXml("cyber")


});