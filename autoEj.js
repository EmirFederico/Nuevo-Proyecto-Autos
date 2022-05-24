let autos = require("./autoBaseNew");

const concesionaria = {
    autos: autos,
   
    buscarAuto: 
    function (patente) {
        for (i=0; i<this.autos.length; i++) {
                         if (this.autos[i].patente === patente){  
                         return  this.autos[i];
                         }
         }
         return  null
    },

    venderAuto:
    function (patente){
        if (this.buscarAuto(patente) !== null) {
            this.buscarAuto(patente).vendido = true
            return this.buscarAuto(patente)
         }
         else return "patente equivocada"
    },

    autosParaLaVenta:
    function () {
        let autoParaVenta = [];
        autoParaVenta = this.autos.filter(autoVenta => autoVenta.vendido == false)
        return autoParaVenta
    },

    autosNuevos:
    function () {
        let autoNuevo = [];
        autoNuevo = this.autosParaLaVenta().filter(autoNuevo => autoNuevo.km < 100)
        return autoNuevo
    },

    listaVentas:
    function () {
        let autosVendidos = [];
        let ventas = [];
        autosVendidos = this.autos.filter(auto => auto.vendido == true)
        for (let i=0; i< autosVendidos.length; i++){
            ventas.push(autosVendidos[i].precio)
        }
        return ventas
    },

    totalVentas:
    function() {
        let total = this.listaVentas().reduce((a, b) => a + b, 0);
        
        return total;


    },

    puedeComprar:
    function (patente, hombre) {            
        let patenteValida = "patente inválida"
        let cuotas = ""
        let precio = ""
        for (i=0; i<this.autosParaLaVenta().length; i++){
            if (patente == this.autosParaLaVenta()[i].patente){
                patenteValida = patente
                cuotas = this.autosParaLaVenta()[i].cuotas
                precio = this.autosParaLaVenta()[i].precio
                
                if (hombre.capacidadTotal >= precio && hombre.capacidadCuotas >= (precio/cuotas)){
                    return "Puede comprar"
                }
                else {
                    return "No puede comprar"
                }
            } 
        } return patenteValida
    },

    autosPuedeComprar:
    function(persona){
        let autosAVenta = this.autosParaLaVenta()
        /*console.log(autosAVenta)*/
        let resultado = [];
        for (i=0; i<autosAVenta.length; i++) {
        resultado.push("el auto "+ autosAVenta[i].modelo+ " " + this.puedeComprar(autosAVenta[i].patente, persona))
        }
        return resultado
    }

};

console.log(concesionaria.buscarAuto("JJK116"))
/*console.log(concesionaria.venderAuto("JJK116"))*/
console.log(concesionaria.autosParaLaVenta())
/*console.log(concesionaria.autosNuevos())
console.log(concesionaria.listaVentas())
console.log(concesionaria.totalVentas())*/
console.log(concesionaria.puedeComprar("JJK116", {capacidadCuotas: 30000, capacidadTotal:500000} ))
console.log(concesionaria.autosPuedeComprar({capacidadCuotas: 30000, capacidadTotal:100000} ))