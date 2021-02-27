function recogerDatos (){
    ​
        let texto = document.getElementById("texto").value
        let numero = document.getElementById("numero").value
        let pass = document.getElementById("pass").value
        let email = document.getElementById("email").value
        let fecha = document.getElementById("fecha").value
    ​
        // document.getElementById("resultado").innerHTML = `El nombre es ${texto}, el numero es ${numero}, la contraseña es ${pass}, el email es ${email} y la fecha es ${fecha}`
    ​
    ​
        document.getElementById("miColumna").innerHTML = `<h1 id="titulo">${texto}</h1><h3>${numero}</h3><p>la contraseña es ${pass}, el email es ${email} y la fecha es ${fecha}</p><button onclick="alerta()">Muestra los datos por alert</button>`
    }
    ​
    ​
    function alerta(){
        alert("Buenos días")
    }​
    ​
    