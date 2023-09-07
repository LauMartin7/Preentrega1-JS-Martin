//declaracion de la clase del menu 2
class Usuario{

    constructor( nombre , apellido , DNI, diasPF, montoPF, interesPF, totalCobroPF){
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.diasPF = diasPF;
        this.montoPF = montoPF;
        this.interesPF = interesPF;
        this.totalCobroPF = totalCobroPF;
    }
    get_datos(){
        alert(`<-- Datos ingresados -->
                Nombre: ${this.nombre}
                Apellido: ${this.apellido}
                DNI: ${this.DNI}
                Días de plazo fijo a simular: ${this.diasPF}
                Monto de plazo fijo a simular: ${this.montoPF}
                Monto del interés generado sería: ${this.interesPF}
                Total a cobrar sería: ${this.totalCobroPF}`);
    }
}

//variable del input gral
let mjeBienvenida = prompt("Bienvenido al sitio de conversión de divisas QUEPAIS. Por favor ingrese el número correspondiente a una opción, o FIN: \n1 Ver la guía de conversión de dólares blue a pesos argentinos. (por consola) \n2 Ir al simulador de plazo fijo en pesos.\n3 Calcular la conversión de peso argentino a divisa extranjera. \n4 Calcular la conversión de divisa extranjera a peso argentino.",0);
mjeBienvenida = parseInt(mjeBienvenida);

//objeto y funciones globales del menu 3 y 4
let divisaExtranjera = {
    dolarBlue: 730,
    dolarOficial: 367,
    real: 100,
    euroBlue: 788,
    euroOficial: 397.5
}

let mjepesoADivExtranj 

let mjeDivExtranjAPeso

let resultadoDivExtranjera

let calcularDesdePeso = ( divisaExtranjera, montoPesoADivExtranjera) => (montoPesoADivExtranjera / divisaExtranjera)

let calcularHaciaPeso = ( divisaExtranjera, montoDivExtranjeraAPeso) => (montoDivExtranjeraAPeso * divisaExtranjera)

let resultadoPeso

//funciones globales para menu 2(simulador de Plazo Fijo)
let interes = (montoPF, tasa) => (montoPF * tasa)
let totalPF = (montoPF, interesPF) => (montoPF + interesPF)
let interesPF

let totalCobroPF

//ciclo while gral segun el menu principal del prompt  mjebienvenida

while (mjeBienvenida != "FIN") {
    
    switch(mjeBienvenida){
        case 1:
            //GUIA DE CONVERSION
            console.log("1 dólar blue son 730 pesos argentinos");

            let dolarGuia = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

            function dolarBlue (num) {
                console.log(num + " dólares blue son " + num * divisaExtranjera.dolarBlue + " pesos argentinos" );
            }

            dolarGuia.forEach(dolarBlue);
            break
        case 2:
            //SIMULADOR DE PLAZO FIJO
            let arregloPF = [];
            let nombre = ""; 
            while ( nombre != "FIN" ){
                nombre = prompt(`Si quiere simular un PF ingrese su nombre.\n Si quiere buscar una simulación de plazo fijo anterior, escriba "DNI". \n Si quiere salir del menú de simulador de PF escriba "FIN" `);
                nombre = nombre.toUpperCase();
                if( nombre != "FIN" && nombre != "DNI" ){
                    apellido = prompt("Ingrese su apellido");
                    apellido = apellido.toUpperCase();
                    DNI = prompt("Ingrese su DNI");
                    DNI = parseInt(DNI);
                    diasPF = prompt("Ingrese los días de plazo que quiere simular: 30, 60, 90 o 365.",0);
                    diasPF = parseInt(diasPF);
                    montoPF = prompt("Ingrese el monto en pesos argentinos.", 0);
                    montoPF = parseInt(montoPF);
                    switch(diasPF) {
                        case 30:
                            interesPF = interes(montoPF, 0.0983);
                            interesPF = parseInt(interesPF);
                            totalCobroPF = totalPF(montoPF, interesPF);
                            totalCobroPF = parseInt(totalCobroPF);
                            alert(`El monto del interés generado sería de \$${interesPF}\nEl monto total a cobrar sería de \$${totalCobroPF}`);
                            break
                        case 60:
                            interesPF = interes(montoPF, 0.1966);
                            interesPF = parseInt(interesPF);
                            totalCobroPF = totalPF(montoPF, interesPF);
                            totalCobroPF = parseInt(totalCobroPF);
                            alert(`El monto del interés generado sería de \$${interesPF}\nEl monto total a cobrar sería de \$${totalCobroPF}`);
                            break
                        case 90:
                            interesPF = interes(montoPF, 0.2949);
                            interesPF = parseInt(interesPF);
                            totalCobroPF = totalPF(montoPF, interes);
                            totalCobroPF = parseInt(totalCobroPF);
                            alert(`El monto del interés generado sería de \$${interesPF}\nEl monto total a cobrar sería de \$${totalCobroPF}`);
                            break
                        case 365:
                            interesPF = interes(montoPF, 1.18);
                            interesPF = parseInt(interesPF);
                            totalCobroPF = totalPF(montoPF, interes);
                            totalCobroPF = parseInt(totalCobroPF);
                            alert(`El monto del interés generado sería de \$${interesPF}\nEl monto total a cobrar sería de \$${totalCobroPF}`);
                            break
                        default:
                            alert("Por favor ingrese una opción válida de días de plazo a simular.");
                    
                    }
                    let usuario = new Usuario(nombre,apellido,DNI, diasPF, montoPF, interesPF, totalCobroPF);
                    arregloPF.push(usuario);

                    for( let usuario of arregloPF ){

                        usuario.get_datos();
                    }
                }
                else if(nombre == "DNI"){
                    let buscarDNI = prompt("Ingrese el DNI del usuario");
                    buscarDNI = parseInt(buscarDNI);
                    function buscarUsuario (usuario) {
                        return usuario.DNI == buscarDNI
                    }  
                    let resultadoBuscarUsuario = arregloPF.filter(buscarUsuario);
                    if(resultadoBuscarUsuario.length != 0 ){
                        alert("Datos encontrados del usuario : "+ JSON.stringify(...resultadoBuscarUsuario));
                    }
                    else{
                        alert("Usuario no encontrado. Aún no has simulado un plazo fijo con nosotros.");
                    }
                }
            }
                
            break
        case 3:
            //PESO A DIVISA EXTRANJERA
            mjepesoADivExtranj = prompt("Por favor ingrese el número correspondiente a una opción, o FIN: \n1 Conversión de peso argentino a dolár blue. \n2 Conversión de peso argentino a dolar oficial.\n3 Conversión de peso argentino a real brasileño.\n4 Conversión de peso argentino a euro blue.\n5 Conversión de peso argentino a euro oficial.",0);
            mjepesoADivExtranj = parseInt(mjepesoADivExtranj);
            switch (mjepesoADivExtranj) {
                case 1:
                    //PESO A DOLAR BLUE
                    montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                    montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                    resultadoDivExtranjera = calcularDesdePeso(divisaExtranjera.dolarBlue, montoPesoADivExtranjera);
                    resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                    alert("El monto equivalente es " + resultadoDivExtranjera + " USD");
                    break
                case 2:
                    //PESO A DOLAR OFICIAL
                    montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                    montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                    resultadoDivExtranjera = calcularDesdePeso(divisaExtranjera.dolarOficial, montoPesoADivExtranjera);
                    resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                    alert("El monto equivalente es " + resultadoDivExtranjera + " USD");
                    break
                case 3:
                    //PESO A REAL
                    montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                    montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                    resultadoDivExtranjera = calcularDesdePeso(divisaExtranjera.real, montoPesoADivExtranjera);
                    resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                    alert("El monto equivalente es " + resultadoDivExtranjera + " BRL");
                    break
                case 4:
                    //PESO A EURO BLUE
                    montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                    montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                    resultadoDivExtranjera = calcularDesdePeso(divisaExtranjera.euroBlue, montoPesoADivExtranjera);
                    resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                    alert("El monto equivalente es " + resultadoDivExtranjera + " EUR");
                    break
                case 5:
                    //PESO A EURO OFICIAL
                    montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                    montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                    resultadoDivExtranjera = calcularDesdePeso(divisaExtranjera.euroOficial, montoPesoADivExtranjera);
                    resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                    alert("El monto equivalente es " + resultadoDivExtranjera + " EUR");
                    break
            }
            break
            
        case 4:
            //DIVISA EXTRANJERA A PESO
        
            mjeDivExtranjAPeso = prompt("Por favor ingrese el número correspondiente a una opción, o FIN: \n1 Conversión de dolar blue a peso argentino.\n2 Conversión de dolar oficial a peso argentino.\n3 Conversión de real brasileño a peso argentino.\n4 Conversión de euro blue a peso argentino. \n5 Conversión de euro oficial a peso argentino.",0);
            mjeDivExtranjAPeso = parseInt(mjeDivExtranjAPeso); 
            switch (mjeDivExtranjAPeso) {
                case 1:
                    //DOLAR BLUE A PESO
                    montoDivExtranjeraAPeso = prompt("Ingrese el monto en dólares",0)
                    montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                    resultadoPeso = calcularHaciaPeso(divisaExtranjera.dolarBlue, montoDivExtranjeraAPeso);
                    resultadoPeso = parseInt(resultadoPeso);
                    alert("El monto equivalente es ", resultadoPeso, " ARS");
                    break
                case 2:
                    //DOLAR OFICIAL A PESO
                    montoDivExtranjeraAPeso = prompt("Ingrese el monto en dólares",0)
                    montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                    resultadoPeso = calcularHaciaPeso(divisaExtranjera.dolarOficial, montoDivExtranjeraAPeso);
                    resultadoPeso = parseInt(resultadoPeso);
                    alert("El monto equivalente es ", resultadoPeso, " ARS");
                    break
                case 3:
                    //REAL A PESO
                    montoDivExtranjeraAPeso = prompt("Ingrese el monto en reales",0)
                    montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                    resultadoPeso = calcularHaciaPeso(divisaExtranjera.real, montoDivExtranjeraAPeso);
                    resultadoPeso = parseInt(resultadoPeso);
                    alert("El monto equivalente es ", resultadoPeso, " ARS");
                    break
                case 4:
                    //EURO BLUE A PESO
                    montoDivExtranjeraAPeso = prompt("Ingrese el monto en euros",0)
                    montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                    resultadoPeso = calcularHaciaPeso(divisaExtranjera.euroBlue, montoDivExtranjeraAPeso);
                    resultadoPeso = parseInt(resultadoPeso);
                    alert("El monto equivalente es ", resultadoPeso, " ARS");
                    break
                case 5:
                    //EURO OFICIAL A PESO
                    montoDivExtranjeraAPeso = prompt("Ingrese el monto en euros",0)
                    montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                    resultadoPeso = calcularHaciaPeso(divisaExtranjera.euroOficial, montoDivExtranjeraAPeso);
                    resultadoPeso = parseInt(resultadoPeso);
                    alert("El monto equivalente es ", resultadoPeso, " ARS");
                    break
            }
            break
    }
    break
}




