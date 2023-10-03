//conversion a dolar o a peso arg


fetch(`https://dolarapi.com/v1/dolares`,
{
    headers: {
        Accept: 'application/json'
    }
})
.then(response => response.json() )
.then (data => {
    let [dolarOficial, dolarBlue, dolarBolsa, dolarContadoConLiqui, dolarTurista, dolarMayorista ] = data;

    //FECHA
    let DateTime = luxon.DateTime
    let fechaDolarApi = DateTime.fromISO(dolarBlue.fechaActualizacion);
    let fechaFormateada = fechaDolarApi.toLocaleString(DateTime.DATETIME_MED);
    let fechaActualizacion = document.querySelector("h3");
    fechaActualizacion.innerText = `Cotización del dólar al ${fechaFormateada}`
    
    //TABLA de cotizaciones

    
    let valoresDolarTabla = document.getElementById("valoresDolarTabla");

    let arrayValoresDolar = [dolarOficial?.compra, dolarOficial?.venta, dolarBlue?.compra, dolarBlue?.venta, dolarBolsa?.compra, dolarBolsa?.venta, dolarContadoConLiqui?.compra, dolarContadoConLiqui?.venta, dolarTurista?.venta, dolarMayorista?.compra, dolarMayorista?.venta];

    for (i=0; i< arrayValoresDolar.length; i++){
        let td = document.createElement('td');
        td.innerText = `$${arrayValoresDolar[i]}`
        valoresDolarTabla.appendChild(td);
    }
    
    let optionDefault = document.createElement('option');
    optionDefault.value="";
    optionDefault.text= "Seleccione una opción.."
    selectConvADolar.appendChild(optionDefault);

    let optionDefecto = document.createElement('option');
    optionDefecto.value="";
    optionDefecto.text= "Seleccione una opción.."
    selectConvAPeso.appendChild(optionDefecto);

    for(i=0; i< data.length; i++) {
        let option = document.createElement('option');
        let optionApeso = document.createElement('option');
        option.value = data[i].venta;
        option.text = data[i].nombre;
        optionApeso.value = data[i].venta;
        optionApeso.text = data[i].nombre;
        selectConvADolar.appendChild(option);
        selectConvAPeso.appendChild(optionApeso);
    }

})

//declaracion de evenhandlers

function calculoConvADolar(e){
    
    let teclaConvADolar = document.getElementById("importeConvADolar");
    let parrafoConvADolar = document.getElementById("parrafoConvADolar");
    

    let resultadoConvADolar = parseFloat(teclaConvADolar.value) > 0 ? parseFloat(teclaConvADolar.value) / parseFloat(e.target.value) : false; 

    resultadoConvADolar ? parrafoConvADolar.innerText= `${teclaConvADolar.value} ARS = ${resultadoConvADolar.toFixed(2)} USD` : parrafoConvADolar.innerText= `${teclaConvADolar.value} ARS no es una opción válida`
    
}

function calculoConvAPeso (e) {
    let teclaConvAPeso = document.getElementById("importeConvAPeso");
    let parrafoConvAPeso = document.getElementById("parrafoConvAPeso");

    let resultadoConvAPeso = parseFloat(teclaConvAPeso.value) > 0 ? parseFloat(teclaConvAPeso.value) * parseFloat(e.target.value) : false;
    
    resultadoConvAPeso ? parrafoConvAPeso.innerText= `${teclaConvAPeso.value} USD = ${resultadoConvAPeso.toFixed(2)} ARS` : parrafoConvAPeso.innerText= `${teclaConvAPeso.value} USD no es una opción válida`
    
}

//eventos de los select

let selectConvADolar = document.getElementById("selectConvADolar");
selectConvADolar.addEventListener("change", calculoConvADolar)

let selectConvAPeso = document.getElementById("selectConvAPeso");
selectConvAPeso.addEventListener("change", calculoConvAPeso)

