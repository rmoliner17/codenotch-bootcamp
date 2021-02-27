
let datos = []
function recogerDatos (){

        let desde = document.getElementById("desde").value
        let hacia = document.getElementById("hacia").value
        let fecha= document.getElementById("fecha").value
        let pasajeros = document.getElementById("pasajeros").value
        let nombre = document.getElementById("nombre").value
        let datos1 = {
            "desde":desde,
            "hacia": hacia,
            "fecha": fecha,
            "pasajeros":pasajeros,
            "nombre":nombre,
        }   

        datos.push(datos1)
        console.log(datos)
    }

// let sonR = [];
function encontrarR(){ 
    
    let result = ""
    for (let i=0; i<datos.length; i++){
        if(datos[i].nombre.includes("r")){
            // sonR.push(datos[i].nombre)
            result += datos[i].nombre + " "
        }
    }

    // console.log(sonR);
    document.getElementById("miColumna").innerHTML = "este nombre contiene la r: " + result 

}   

