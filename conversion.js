let mjeBienvenida = prompt("Bienvenido al sitio de conversión de divisas QUEPAIS. Por favor ingrese el número correspondiente a una opción, o FIN: \n1 Ver la guía de conversión de dólares blue a pesos argentinos. \n2 Ir al simulador de plazo fijo en pesos.\n3 Calcular la conversión de peso argentino a divisa extranjera. \n4 Calcular la conversión de divisa extranjera a peso argentino.",0);
mjeBienvenida = parseInt(mjeBienvenida);

let mjepesoADivExtranj 

let mjeDivExtranjAPeso

function calcularDesdePeso(divisaExtranjera, montoPesoADivExtranjera) {
    let conversionPesoADivExtranjera = montoPesoADivExtranjera / divisaExtranjera
    return conversionPesoADivExtranjera.toFixed(2)
}

let resultadoDivExtranjera
let montoPesoADivExtranjera
let montoDivExtranjeraAPeso

function calcularHaciaPeso(divisaExtranjera, montoDivExtranjeraAPeso) {
    let conversionDivExtranjeraAPeso = montoDivExtranjeraAPeso * divisaExtranjera
    return conversionDivExtranjeraAPeso.toFixed(2)
}

let resultadoPeso

let mjePlazoFijo

function calcularPlazoFijo (montoPF, tasa) {
    let interes = montoPF * tasa
    return interes
}
let resultadoPF
let totalPF

while (mjeBienvenida != "FIN") {
    
    switch(mjeBienvenida){
        case 1:
            //GUIA DE CONVERSION
            console.log("1 dólar blue son 760 pesos argentinos");
            let pesosGuiaConversion
            for (i = 10 ; i <= 100 ; i = i + 10) {
                pesosGuiaConversion = 760 * i
                console.log(i + " dólares blue son " + pesosGuiaConversion + " pesos argentinos" );
            }
            for (i = 200 ; i <= 1000 ; i = i + 100) {
                pesosGuiaConversion = 760 * i
                console.log(i + " dólares blue son " + pesosGuiaConversion + " pesos argentinos" );
            }
            for (i = 2000 ; i <= 10000 ; i = i + 1000) {
                pesosGuiaConversion = 760 * i
                console.log(i + " dólares blue son " + pesosGuiaConversion + " pesos argentinos" );
            }
            break
        case 2:
            //SIMULADOR DE PLAZO FIJO
            mjePlazoFijo = prompt("Por favor ingrese el número correspondiente a los días de plazo que quiere simular: 30, 60, 90 o 365.",0);
            mjePlazoFijo = parseInt(mjePlazoFijo);
            switch(mjePlazoFijo) {
                case 30:
                    montoPF = prompt("Ingrese el monto en pesos argentinos",0);
                    montoPF = parseInt(montoPF);
                    resultadoPF = calcularPlazoFijo(montoPF, 0.0983);
                    resultadoPF = parseInt(resultadoPF);
                    totalPF = montoPF + resultadoPF
                    console.log("El monto del interés generado es $" + resultadoPF);
                    console.log("El monto total a cobrar será de $" + totalPF);
                    break
                case 60:
                    montoPF = prompt("Ingrese el monto en pesos argentinos",0);
                    montoPF = parseInt(montoPF);
                    resultadoPF = calcularPlazoFijo(montoPF, 0.1966);
                    resultadoPF = parseInt(resultadoPF);
                    totalPF = montoPF + resultadoPF
                    console.log("El monto del interés generado es $" + resultadoPF);
                    console.log("El monto total a cobrar será de $" + totalPF);
                    break
                case 90:
                    montoPF = prompt("Ingrese el monto en pesos argentinos",0);
                    montoPF = parseInt(montoPF);
                    resultadoPF = calcularPlazoFijo(montoPF, 0.2949);
                    resultadoPF = parseInt(resultadoPF);
                    totalPF = montoPF + resultadoPF
                    console.log("El monto del interés generado es $" + resultadoPF);
                    console.log("El monto total a cobrar será de $" + totalPF);
                    break
                case 365:
                    montoPF = prompt("Ingrese el monto en pesos argentinos",0);
                    montoPF = parseInt(montoPF);
                    resultadoPF = calcularPlazoFijo(montoPF, 1.18);
                    resultadoPF = parseInt(resultadoPF);
                    totalPF = montoPF + resultadoPF
                    console.log("El monto del interés generado es $" + resultadoPF);
                    console.log("El monto total a cobrar será de $" + totalPF);
                    break
                default:
                    alert("Por favor ingrese una opción válida");
            }
            break
        case 3:
            //PESO A DIVISA EXTRANJERA
            while (mjeBienvenida != "FIN") {
            mjepesoADivExtranj = prompt("Por favor ingrese el número correspondiente a una opción, o FIN: \n1 Conversión de peso argentino a dolár blue. \n2 Conversión de peso argentino a dolar oficial.\n3 Conversión de peso argentino a real brasileño.\n4 Conversión de peso argentino a euro blue.\n5 Conversión de peso argentino a euro oficial.",0);
            mjepesoADivExtranj = parseInt(mjepesoADivExtranj);
                switch (mjepesoADivExtranj) {
                    case 1:
                        //PESO A DOLAR BLUE
                        montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                        montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                        resultadoDivExtranjera = calcularDesdePeso(770, montoPesoADivExtranjera);
                        resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                        console.log("El monto equivalente es " + resultadoDivExtranjera + " USD");
                        break
                    case 2:
                        //PESO A DOLAR OFICIAL
                        montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                        montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                        resultadoDivExtranjera = calcularDesdePeso(350, montoPesoADivExtranjera);
                        resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                        console.log("El monto equivalente es " + resultadoDivExtranjera + " USD");
                        break
                    case 3:
                        //PESO A REAL
                        montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                        montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                        resultadoDivExtranjera = calcularDesdePeso(100, montoPesoADivExtranjera);
                        resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                        console.log("El monto equivalente es " + resultadoDivExtranjera + " BRL");
                        break
                    case 4:
                        //PESO A EURO BLUE
                        montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                        montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                        resultadoDivExtranjera = calcularDesdePeso(826, montoPesoADivExtranjera);
                        resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                        console.log("El monto equivalente es " + resultadoDivExtranjera + " EUR");
                        break
                    case 5:
                        //PESO A EURO OFICIAL
                        montoPesoADivExtranjera = prompt("Ingrese el monto en pesos argentinos",0)
                        montoPesoADivExtranjera = parseInt(montoPesoADivExtranjera);
                        resultadoDivExtranjera = calcularDesdePeso(382, montoPesoADivExtranjera);
                        resultadoDivExtranjera = parseInt(resultadoDivExtranjera);
                        console.log("El monto equivalente es " + resultadoDivExtranjera + " EUR");
                        break
                }
                break
            }
            break
        case 4:
            //DIVISA EXTRANJERA A PESO
            while (mjeBienvenida != "FIN") {
                mjeDivExtranjAPeso = prompt("Por favor ingrese el número correspondiente a una opción, o FIN: \n1 Conversión de dolar blue a peso argentino.\n2 Conversión de dolar oficial a peso argentino.\n3 Conversión de real brasileño a peso argentino.\n4 Conversión de euro blue a peso argentino. \n5 Conversión de euro oficial a peso argentino.",0);
                mjeDivExtranjAPeso = parseInt(mjeDivExtranjAPeso); 
                switch (mjeDivExtranjAPeso) {
                    case 1:
                        //DOLAR BLUE A PESO
                        montoDivExtranjeraAPeso = prompt("Ingrese el monto en dólares",0)
                        montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                        resultadoPeso = calcularHaciaPeso(770, montoDivExtranjeraAPeso);
                        resultadoPeso = parseInt(resultadoPeso);
                        console.log("El monto equivalente es ", resultadoPeso, " ARS");
                        break
                    case 2:
                        //DOLAR OFICIAL A PESO
                        montoDivExtranjeraAPeso = prompt("Ingrese el monto en dólares",0)
                        montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                        resultadoPeso = calcularHaciaPeso(350, montoDivExtranjeraAPeso);
                        resultadoPeso = parseInt(resultadoPeso);
                        console.log("El monto equivalente es ", resultadoPeso, " ARS");
                        break
                    case 3:
                        //REAL A PESO
                        montoDivExtranjeraAPeso = prompt("Ingrese el monto en reales",0)
                        montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                        resultadoPeso = calcularHaciaPeso(100, montoDivExtranjeraAPeso);
                        resultadoPeso = parseInt(resultadoPeso);
                        console.log("El monto equivalente es ", resultadoPeso, " ARS");
                        break
                    case 4:
                        //EURO BLUE A PESO
                        montoDivExtranjeraAPeso = prompt("Ingrese el monto en euros",0)
                        montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                        resultadoPeso = calcularHaciaPeso(826, montoDivExtranjeraAPeso);
                        resultadoPeso = parseInt(resultadoPeso);
                        console.log("El monto equivalente es ", resultadoPeso, " ARS");
                        break
                    case 5:
                        //EURO OFICIAL A PESO
                        montoDivExtranjeraAPeso = prompt("Ingrese el monto en euros",0)
                        montoDivExtranjeraAPeso = parseInt(montoDivExtranjeraAPeso);
                        resultadoPeso = calcularHaciaPeso(382, montoDivExtranjeraAPeso);
                        resultadoPeso = parseInt(resultadoPeso);
                        console.log("El monto equivalente es ", resultadoPeso, " ARS");
                        break
                }
                break
            }
    }
    break
}




