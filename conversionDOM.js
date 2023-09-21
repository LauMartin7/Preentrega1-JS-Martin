//conversion a dolar o a peso arg

//declaracion de evenhandlers

function calculoConvADolar(e){
    
    let teclaConvADolar = document.getElementById("importeConvADolar");

    let resultadoConvADolar
    resultadoConvADolar = teclaConvADolar.value / e.target.value
    resultadoConvADolar=parseInt(resultadoConvADolar);

    let parrafoConvADolar = document.getElementById("parrafoConvADolar");
    
    parrafoConvADolar.innerText= `${teclaConvADolar.value} ARS = ${resultadoConvADolar} USD`
}

function calculoConvAPeso (e) {
    let teclaConvAPeso = document.getElementById("importeConvAPeso");

    let resultadoConvAPeso
    resultadoConvAPeso = teclaConvAPeso.value * e.target.value
    resultadoConvAPeso = parseInt(resultadoConvAPeso);

    let parrafoConvAPeso = document.getElementById("parrafoConvAPeso");

    parrafoConvAPeso.innerText= `${teclaConvAPeso.value} USD = ${resultadoConvAPeso} ARS`
    
}

//eventos de los select

let selectConvADolar = document.getElementById("selectConvADolar");
selectConvADolar.addEventListener("change", calculoConvADolar)

let divisaConvAPeso = document.getElementById("selectConvAPeso");
divisaConvAPeso.addEventListener("change", calculoConvAPeso)

