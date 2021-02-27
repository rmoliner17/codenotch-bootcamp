class Carrito{

    

    constructor()
    {
        this.precioFinal = 0;
        this.productos = []
    }

}

class Producto{
    constructor(precio, nombre)
    {
        this.precio = precio
        this.nombre = nombre  
    }
}

let nba = new Producto (10, "nba")
let sudaderaNike = new Producto (20, "sudaderaNike")
let abrigoGris = new Producto(30, "abrigoGris")
let sudaderaRM = new Producto (20, "sudaderaRM")
let abrigoRojo = new Producto (30, "abrigoRojo")
let yeezy = new Producto (40, "yeezy")
let chandalNike = new Producto (50, "chandalNike")
let chandalLakers = new Producto (50, "chandalLakers")
let chandalNikeAzul = new Producto (50, "chandalNikeAzul")
let pijama = new Producto (30, "pijama")
let zapatillas = new Producto (30, "zapatillas")
let wade = new Producto (30, "wade")

let ropa= new Carrito()
function anyadir(prod){
    ropa.productos.push(prod)

    for(let i = 0; i < ropa.productos.length; i++){
        ropa.precioFinal += ropa.productos[i].precio;
    }
    console.log(ropa)
    // document.getElementById("miColumna").innerHTML = "este nombre contiene la r: " + ropa
}





    // let nba = document.getElementById("nba").value
    // let sudaderaNike  = document.getElementById("nba").value
    // let abrigoGris  = document.getElementById("nba").value
    // let sudaderaRM = document.getElementById("nba").value
    // let abrigoRojo = document.getElementById("nba").value
    // let yeezys = document.getElementById("nba").value
    // let chandalNike = document.getElementById("nba").value
    // let chandalLakers = document.getElementById("nba").value
    // let chandalNikeAzul = document.getElementById("nba").value
    // let pijama = document.getElementById("nba").value
    // let zapatillas = document.getElementById("nba").value
    // let wade = document.getElementById("wade").value
