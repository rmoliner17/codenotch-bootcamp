function nueva(){
    alert("Hello world")
}



function formulario(){

    // Con JQUERY
    let url = $("#exampleInputPassword1").val()
    
    $("#imagen").attr("src", url)
    $("#imagen").show()

    // Con JAVASCRIPT Vanilla

    // let url = document.getElementById("exampleInputPassword1").value

    // document.getElementById("imagen").src = url

    // document.getElementById("imagen").style.display = "block"

    // https://www.paisajesimagenes.com/wp-content/uploads/Fotos-de-paisajes-naturales..jpg

    let boton = document.createElement("button")

    boton.className = "btn btn-outline-danger"
    boton.innerHTML = "Hola"

    document.getElementById("parrafo").appendChild(boton)

    // document.getElementById("parrafo").append()


}

function mostrar(){

    document.getElementById("parrafo").style.display = "block"
}

function ocultar(){
    document.getElementById("parrafo").style.display = "none"
}



$(document).ready(function() {

    $("#mostrar").click(function(){
        $("#parrafo").show(1000);
    });
    
    $("#ocultar").click(function(){
        $("#parrafo").hide(1000);
    });

    $("#sacar").click(function(){
        $("#parrafo").append('<button id="nuevo" class="btn btn-warning" onclick="nueva()">Boton nuevo</button> <h1>Helloooo</h1> ');
    });

    

    // $("#sacar").click(function(){
    //     $("#parrafo").html('<button id="nuevo" class="btn btn-warning" onclick="nueva()">Boton nuevo</button> <h1>Helloooo</h1> ')
    // })
 
});





